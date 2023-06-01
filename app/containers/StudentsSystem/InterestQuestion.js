import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Mui
import { Box, Button, Container, Typography, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { PapperBlock } from 'dan-components';

// ข้อมูลจำลอง
// import questions from '../../api/dummy/question';
// const interestSurveyId = 1;
// const stuCode = 10;
const stuIdObj = { student_id: 1 };
const stuCodeObj = { stu_code: 10 };

export default function InterestQuestion() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState(stuIdObj);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    axios
      .post('http://localhost:3200/api/v1/questions_student', stuCodeObj)
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    // ตรวจสอบว่าต้องตอบข้อที่เป็น rating ทุกข้อให้ครบ
    const unansweredQuestions = questions.filter((question) => !formData[`question${question.interest_question_id}`]);

    if (unansweredQuestions.length > 0) {
      // มีข้อที่ยังไม่ได้เลือก
      const unansweredQuestionIds = unansweredQuestions.map((question) => question.interest_question_id);
      alert(`กรุณาเลือกคำตอบของข้อที่: ${unansweredQuestionIds.join(', ')}`);
      return;
    }

    // แปลงข้อมูลก่อนส่งไปยัง API
    const transformedData = questions.map((question) => ({
      student_id: formData.student_id,
      interest_question_id: question.interest_question_id,
      interest_answers_id: formData[`question${question.interest_question_id}`],
    }));

    console.log(transformedData);

    // ส่งข้อมูลไปยัง API ด้วย axios post
    axios
      .post('http://localhost:3200/api/v1/student_answers', transformedData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReset = () => {
    setFormData(stuIdObj);
  };

  const handleChangeAnswer = (questionId, answer) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [questionId]: answer,
    }));
  };

  return (
    <div>
      <PapperBlock
        title='แบบสอบถามความสนใจต่อสายงานด้านต่างๆ'
        desc='Some text description'
      >
        <Container maxWidth='xl'>
          <Box sx={{ mt: 4 }}>
            {questions.map((question) => (
              <Box
                key={question.interest_question_id}
                sx={{ mt: 2 }}
              >
                <Typography
                  variant='h6'
                  gutterBottom
                >
                  {question.interest_question_no}. {question.interest_question_title}
                </Typography>
                <RadioGroup
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name={`question${question.interest_question_id}`}
                  value={formData[`question${question.interest_question_id}`] || null}
                  onChange={(event, value) => {
                    handleChangeAnswer(`question${question.interest_question_id}`, value);
                  }}
                >
                  <AnswerRadioGroup interest_question_id={question.interest_question_id} />
                </RadioGroup>
              </Box>
            ))}
            <Box sx={{ mt: 4 }}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={handleReset}
                sx={{ ml: 2 }}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </Container>
      </PapperBlock>
    </div>
  );
}

const AnswerRadioGroup = (interestQuestionId) => {
  // const interestQuestion = { interest_question_id: interestQuestionId };
  const [answerData, setAnswerData] = useState([]);
  console.log(interestQuestionId);

  useEffect(() => {
    axios
      .post('http://localhost:3200/api/v1/answer_questionstudent', interestQuestionId)
      .then((response) => {
        console.log(response.data);
        setAnswerData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {answerData.map((answer) => (
        <FormControlLabel
          key={answer.interest_answers_id}
          value={answer.interest_answers_id}
          control={<Radio />}
          label={answer.interest_answers_title}
          sx={{ m: 0.5 }}
        />
      ))}
    </div>
  );
};
