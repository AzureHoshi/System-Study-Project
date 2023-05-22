import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PapperBlock } from 'dan-components';

// MUI
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box,
  Typography,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

// ข้อมูลจำลอง
import feedbacks from '../../api/dummy/feedback';
const satisfactions = [1, 2, 3, 4, 5];

function StudentFeedback() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [checkAnswers, setCheckAnswers] = useState([]);
  const [openPopupAns, setOpenPopupAns] = useState(false);
  const [openPopupConfirm, setOpenPopupConfirm] = useState(false);

  const checkAns = () => {
    const filteredfeedbackIds = selectedAnswers
      .filter((item) => item.answerId === '-')
      .map((item) => item.feedbackId);
    setCheckAnswers(filteredfeedbackIds);
    if (filteredfeedbackIds.length > 0) setOpenPopupAns(true);
    else {
      setOpenPopupConfirm(true);
    }
  };

  const handleClose = () => {
    setOpenPopupAns(false);
    setOpenPopupConfirm(false);
  };

  useEffect(() => {
    feedbacks.forEach((feedback) => {
      selectedAnswers.push({
        feedbackId: feedback.feedbackId,
        answerId: '-',
      });
    });
    console.log(selectedAnswers);
  }, []);

  // log เพื่อเช็คค่าคำตอบที่ส่งมา
  useEffect(() => {
    console.log(selectedAnswers);
  }, [selectedAnswers]);

  const handleChange = (Ans) => {
    const updatedAns = selectedAnswers.map((answer) => {
      if (answer.feedbackId === Ans.feedbackId) {
        return { ...answer, answerId: Ans.answerId };
      }
      return answer;
    });
    setSelectedAnswers(updatedAns);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAns();
  };

  return (
    <div>
      <PapperBlock
        title='แบบประเมินความพึงพอใจที่มีต่อเว็บไซค์'
        desc='เลือกคะแนนที่ตรงกับความพึงพอใจมากที่สุด'
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: '1.5rem',
              }}
            >
              {feedbacks.map((feedback) => (
                <CheckType
                  key={feedback.feedbackId}
                  feedbackid={feedback.feedbackId}
                  question={feedback.fb_question}
                  type={feedback.type}
                  handleChange={handleChange}
                />
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                pr: 2,
              }}
            >
              <Button
                variant='contained'
                color='success'
                type='submit'
              >
                ยืนยัน
              </Button>
            </Box>
          </Box>
        </form>
      </PapperBlock>
      <Dialog
        open={openPopupAns}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'โปรดกรอกข้อมูลให้ครบทุกข้อ'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            ข้อที่ยังไม่ได้เลือกคือข้อที่
            {checkAnswers.map((checkAnswer, index) => (
              <React.Fragment key={checkAnswer}>
                {` ${checkAnswer}${
                  index !== checkAnswers.length - 1 ? ', ' : ''
                }`}
              </React.Fragment>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openPopupConfirm}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'ยืนยันส่งแบบประเมินความสนใจ'}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
          >
            ตกลง
          </Button>
          <Button
            onClick={handleClose}
            autoFocus
          >
            ยกเลิก
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function CheckType({ feedbackid, question, type, handleChange }) {
  const [value, setValue] = React.useState('');
  const handleChangeValue = (event) => {
    setValue(event.target.value);

    // สำหรับแบบ object
    const select = {
      feedbackId: feedbackid,
      answerId: event.target.value,
    };

    // แบบ array
    // const select = [questionsId, event.target.value];
    handleChange(select);
  };
  if (type === 1) {
    return (
      <>
        <FormControl component='fieldset'>
          <FormLabel
            id='demo-row-radio-buttons-group-label'
            sx={{ color: 'black' }}
          >
            <Typography sx={{ fontSize: '1.5rem' }}>{question}</Typography>
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            value={value}
            onChange={handleChangeValue}
          >
            {satisfactions.map((satisfaction) => (
              <Box
                key={satisfaction}
                sx={{ py: '0.5rem', pl: '0.5rem' }}
              >
                <FormControlLabel
                  value={satisfaction}
                  control={<Radio />}
                  label={
                    <Typography
                      variant='h6'
                      gutterBottom
                    >
                      {satisfaction}
                    </Typography>
                  }
                  key={satisfaction}
                />
              </Box>
            ))}
          </RadioGroup>
        </FormControl>
      </>
    );
  }
  return (
    <>
      <Typography variant='h5'>{question}</Typography>
      <TextField
        id='filled-basic'
        variant='filled'
        value={value}
        onChange={handleChangeValue}
      />
    </>
  );
}

CheckType.propTypes = {
  feedbackid: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StudentFeedback;
