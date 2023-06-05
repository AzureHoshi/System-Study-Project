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
  const { Name, Tags, Img } = props;
  return (
    <Card sx={{ maxWidth: 280, boxShadow: 3, overflowWrap: 'break-word' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='280'
          image={Img}
        />
        <CardContent
          sx={{
            overflowWrap: 'anywhere',
          }}
        >
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            noWrap
          >
            {Name}
          </Typography>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='flex-start'
            spacing={0.5}
          >
            {Tags.map((tag) => (
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
  Name: PropTypes.string.isRequired,
  Tags: PropTypes.array.isRequired,
  Img: PropTypes.string.isRequired,
};

export default Cardcooperative;
