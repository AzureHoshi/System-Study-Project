import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Rating, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { PapperBlock } from 'dan-components';
import questions from '../../api/dummy/feedbacksQuestion';
const studentId = { stu_code: 10 };

function StudentFeedback() {
  const [formData, setFormData] = useState(studentId);
  const [status, setStatus] = useState(true);

  // เช็คค่า form data
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    axios
      .post('http://localhost:3200/api/v1/getstatusfeedback', studentId)
      .then((response) => {
        console.log(response.data.statusFeedback);
        if (response.data.statusFeedback === 0) {
          setStatus(true);
        } else {
          setStatus(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    // ตรวจสอบว่าต้องตอบข้อที่เป็น rating ทุกข้อให้ครบ
    console.log(studentId);
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
      stu_code: formData.stu_code,
      feedback_id: question.feedbackId,
      sf_answer: formData[`question${question.feedbackId}`],
    }));

    console.log(transformedData);
    // ส่งข้อมูลไปยัง API ด้วย axios post
    axios
      .post('http://localhost:3200/api/v1/student_feedback', transformedData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .post('http://localhost:3200/api/v1/update_statusfeedback', studentId)
      .then((response) => {
        console.log(response.data);
        setStatus(false);
      })
      .catch((error) => {
        console.error(error);
      });
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

  const CompletedFeedback = () => (
    <div>
      <PapperBlock
        title='แบบสอบถามประเมินความสนใจ'
        desc='Some text description'
      >
        <Container maxWidth='xl'>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h3'>คุณได้กรอกข้อมูล Feedback ไปแล้ว</Typography>
          </Box>
        </Container>
      </PapperBlock>
    </div>
  );

  const FillOfFeedback = () => (
    <div>
      <PapperBlock
        title='แบบสอบถามความพึงพอใจต่อการใช้งานเว็บไซต์'
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

  return <div>{status === true ? <FillOfFeedback /> : <CompletedFeedback />}</div>;
}

export default StudentFeedback;
