import React from 'react';
import PropTypes from 'prop-types';

// MUI
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material';

const Cardcooperative = (props) => {
  const { projectName, projectDetails, projectImg } = props;
  console.log(projectImg);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='300'
          image={projectImg}
          alt='green iguana'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            {projectName}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
          >
            {projectDetails}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          color='primary'
        >
          details
        </Button>
      </CardActions>
    </Card>
  );
};

Cardcooperative.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDetails: PropTypes.string.isRequired,
  projectImg: PropTypes.string.isRequired,
};

export default Cardcooperative;
