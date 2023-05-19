import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, FormControl, Button } from '@mui/material';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, RadioGroupVertical } from 'dan-components';
import questions from '../../api/dummy/question';

export default function InterestQuestion() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    questions.forEach((quest) => {
      selectedAnswers.push({
        questId: quest.id,
        answerId: '0',
      });
    });
  }, []);

  // log เพื่อเช็คค่าคำตอบที่ส่งมา
  useEffect(() => {
    console.log(selectedAnswers);
  }, [selectedAnswers]);

  const handleChange = (Ans) => {
    // const updatedAnswers = [...selectedAnswers];
    // updatedAnswers[Ans[0] - 1] = [Ans[0], Ans[1]];
    // setSelectedAnswers(updatedAnswers);

    const updatedAns = selectedAnswers.map((answer) => {
      if (answer.questId === Ans.questId) {
        return { ...answer, answerId: Ans.answerId };
      }
      return answer;
    });
    setSelectedAnswers(updatedAns);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(' Submit Log :', selectedAnswers);
  };
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='twitter:title'
          content={title}
        />
        <meta
          property='twitter:description'
          content={description}
        />
      </Helmet>
      <PapperBlock
        title='แบบสอบถามความสนใจต่อสายงานด้านต่างๆ'
        desc='Some text description'
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <FormControl>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  pl: '1.5rem',
                }}
              >
                {questions.map((question) => (
                  <RadioGroupVertical
                    key={question.id}
                    questionsId={question.id}
                    Labelquestion={question.Labelquestion}
                    answerLabels={question.answers}
                    handleChange={handleChange}
                  />
                ))}
              </Box>
            </FormControl>
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
        </form>
      </PapperBlock>
    </div>
  );
}
