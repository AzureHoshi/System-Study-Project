import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioGroupVertical = (props) => {
  const [value, setValue] = React.useState('');
  const { questionsId, Labelquestion, answerLabels, handleChange } = props;

  const handleChangeValue = (event) => {
    setValue(event.target.value);
    const select = [questionsId, event.target.value];
    handleChange(select);
  };
  return (
    <FormControl>
      <FormLabel id='demo-radio-buttons-group-label'>{Labelquestion}</FormLabel>
      <RadioGroup
        key={questionsId}
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
        value={value}
        onChange={handleChangeValue}
      >
        {answerLabels.map((answerLabel, index) => (
          <FormControlLabel
            key={index}
            value={answerLabel.id}
            control={<Radio />}
            label={answerLabel.answer}
          />
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
