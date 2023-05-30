import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// Mui
import { Box, Button, Container, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

// คำถาม
import { PapperBlock } from 'dan-components';
// import axios from 'axios';

// ข้อมูลจำลอง
import questions from '../../api/dummy/question';
// const interestSurveyId = 1;

export default function InterestQuestion() {
  // const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({ studentId: 1 });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = () => {
    // ตรวจสอบว่าต้องตอบข้อที่เป็น rating ทุกข้อให้ครบ
    const unansweredQuestions = questions.filter(
      (question) => question.type === 'rating' && !formData[`question${question.feedbackId}`]
    );

    if (unansweredQuestions.length > 0) {
      // มีข้อที่ยังไม่ได้เลือก
      const unansweredQuestionIds = unansweredQuestions.map((question) => question.feedbackId);
      alert(`กรุณาเลือกคำตอบของข้อที่: ${unansweredQuestionIds.join(', ')}`);
      return;
    }

    // แปลงข้อมูลก่อนส่งไปยัง API
    const transformedData = questions.map((question) => ({
      student_id: formData.studentId,
      feedback_id: question.feedbackId,
      feedback_answer: formData[`question${question.feedbackId}`],
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
    setFormData({ studentId: 1 });
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
                key={question.id}
                sx={{ mt: 2 }}
              >
                <Typography
                  variant='h6'
                  gutterBottom
                >
                  {question.id}. {question.Labelquestion}
                </Typography>
                <RadioGroup
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                  value={formData[`question${question.id}`] || null}
                  onChange={(event, value) => {
                    handleChangeAnswer(`question${question.id}`, value);
                  }}
                >
                  {question.answers.map((answer) => (
                    <FormControlLabel
                      key={answer.id}
                      value={answer.id}
                      control={<Radio />}
                      label={answer.answer}
                      sx={{ ml: 2 }}
                    />
                  ))}
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
