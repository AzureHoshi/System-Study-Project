import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, RadioGroupVertical } from 'dan-components';
import questions from '../../api/dummy/question';

export default function InterestQuestion() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    questions.map((question) => setSelectedAnswers([[question.id, '-']]));
  }, []);

  useEffect(() => {
    console.log(selectedAnswers);
  }, [selectedAnswers]);

  const handleChange = (Ans) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[Ans[0] - 1] = [Ans[0], Ans[1]];
    setSelectedAnswers(updatedAnswers);
  };

  const submit = () => {
    console.log(selectedAnswers);
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
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignContent: 'center',
              border: '1px solid',
              width: '50%',
            }}
          >
            <FormControl>
              {questions.map((question) => (
                <RadioGroupVertical
                  key={question.id}
                  questionsId={question.id}
                  Labelquestion={question.Labelquestion}
                  answerLabels={question.answers}
                  handleChange={handleChange}
                />
              ))}
              <Button
                variant='contained'
                color='success'
                onClick={submit}
                sx={{
                  width: '50%',
                }}
              >
                ยืนยัน
              </Button>
            </FormControl>
          </Box>
        </Box>
      </PapperBlock>
    </div>
  );
}
