import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Rating, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { PapperBlock } from 'dan-components';
import questions from '../../api/dummy/feedbacksQuestion';

function StudentFeedback() {
  // const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({});

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
      questionId: question.feedbackId,
      answerId: formData[`question${question.feedbackId}`],
    }));

    // ส่งข้อมูลไปยัง API ด้วย axios post
    axios
      .post('http://localhost:3200/api/v1/interest_questions', transformedData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReset = () => {
    setFormData({});
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
        title='แบบสอบถามประเมินความสนใจ'
        desc='Some text description'
      >
        <Container maxWidth='xl'>
          <Box sx={{ mt: 4 }}>
            {questions.map((question) => (
              <Box
                key={question.feedbackId}
                sx={{ mt: 2 }}
              >
                <Typography
                  variant='h6'
                  gutterBottom
                >
                  {question.feedbackId}. {question.fb_question}
                </Typography>
                {question.type === 'rating' ? (
                  <Rating
                    name={`question${question.feedbackId}`}
                    size='large'
                    value={formData[`question${question.feedbackId}`] || null}
                    onChange={(event, value) => {
                      handleChangeAnswer(`question${question.feedbackId}`, value);
                    }}
                  />
                ) : question.type === 'text' ? (
                  <TextField
                    id={`question${question.feedbackId}`}
                    variant='outlined'
                    fullWidth
                    value={formData[`question${question.feedbackId}`] || ''}
                    onChange={(event) => {
                      handleChangeAnswer(`question${question.feedbackId}`, event.target.value);
                    }}
                  />
                ) : null}
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

export default StudentFeedback;
