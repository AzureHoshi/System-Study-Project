import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

const RadioGroupVertical = (props) => {
  const [value, setValue] = React.useState('');
  const { questionsId, Labelquestion, answerLabels, handleChange } = props;

  const handleChangeValue = (event) => {
    setValue(event.target.value);

    // สำหรับแบบ object
    const select = { questId: questionsId, answerId: event.target.value };

    // แบบ array
    // const select = [questionsId, event.target.value];
    handleChange(select);
  };
  return (
    <FormControl component='fieldset'>
      <FormLabel
        id='questions-radiogroup-select'
        component='legend'
        sx={{ color: 'black' }}
      >
        <Typography sx={{ fontSize: '2rem' }}>{Labelquestion}</Typography>
      </FormLabel>
      <RadioGroup
        key={questionsId}
        aria-labelledby='demo-radio-buttons-group-label'
        name='radio-buttons-group'
        value={value}
        onChange={handleChangeValue}
      >
        {answerLabels.map((answerLabel, index) => (
          <Box
            key={answerLabel.id}
            sx={{ marginLeft: '1rem' }}
          >
            <FormControlLabel
              key={index}
              value={answerLabel.id}
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: '1rem' }}>
                  {answerLabel.answer}
                </Typography>
              }
            />
          </Box>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioGroupVertical.propTypes = {
  questionsId: PropTypes.number.isRequired,
  Labelquestion: PropTypes.string.isRequired,
  answerLabels: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RadioGroupVertical;
