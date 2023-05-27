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
  Chip,
  Stack,
} from '@mui/material';

const Cardcooperative = (props) => {
  const { projectName, projectTags, projectImg } = props;
  console.log(projectImg);
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='280'
          image={projectImg}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            component='div'
          >
            {projectName}
          </Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='flex-start'
            spacing={0.5}
          >
            {projectTags.map((tag) => (
              <Chip
                key={tag.id}
                label={tag.tagName}
              />
            ))}
          </Stack>
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
  projectTags: PropTypes.array.isRequired,
  projectImg: PropTypes.string.isRequired,
};

export default Cardcooperative;
