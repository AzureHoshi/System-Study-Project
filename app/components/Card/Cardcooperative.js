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
  Box,
} from '@mui/material';

const Cardcooperative = (props) => {
  const { projectName, projectTags, projectImg } = props;
  console.log(projectImg);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='300'
          image={projectImg}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
          >
            {projectName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            {projectTags.map((tag) => (
              <Chip
                key={tag.id}
                label={tag.tagName}
              />
            ))}
          </Box>
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
