/** @format */

import React from 'react';
// @mui material
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function AboutME() {
  return (
    <div>
      <Card>
        <Box sx={{ p: 2, display: 'flex' }}>
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>About</Typography>
            <Typography variant='body2' color='text.secondary'>
              หลักสูตร :
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              คณะ :
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              สาขา :
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              สาขาวิชา :
            </Typography>
          </Stack>
        </Box>
      </Card>
    </div>
  );
}
export default AboutME;
