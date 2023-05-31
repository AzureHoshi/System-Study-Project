import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// Mui
import { Box, Button, Container, Typography, RadioGroup, Radio, FormControlLabel } from '@mui/material';

// คำถาม
import { PapperBlock } from 'dan-components';
import axios from 'axios';

// import axios from 'axios';

// ข้อมูลจำลอง
// import questions from '../../api/dummy/question';
// const interestSurveyId = 1;
// const stuCode = 10;
const stuCodeObj = { stu_code: 10 };

export default function InterestQuestion() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState(stuCodeObj);

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
      stu_code: formData.stu_code,
      interest_question_id: question.interest_question_id,
      ssa_answer: formData[`question${question.interest_question_id}`],
    }));

    console.log(transformedData);

    // ส่งข้อมูลไปยัง API ด้วย axios post
    // axios
    //   .post('http://localhost:3200/api/v1/student_feedback', transformedData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handleReset = () => {
    setFormData(stuCodeObj);
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
                  {/* {question.answers.map((answer) => (
                    <FormControlLabel
                      key={answer.id}
                      value={answer.id}
                      control={<Radio />}
                      label={answer.answer}
                      sx={{ m: 0.5 }}
                    />
                  ))} */}
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
          key={answer.answer_question_id}
          value={answer.answer_question_id}
          control={<Radio />}
          label={answer.answer_question_title}
          sx={{ m: 0.5 }}
        />
      ))}
    </div>
  );
};
