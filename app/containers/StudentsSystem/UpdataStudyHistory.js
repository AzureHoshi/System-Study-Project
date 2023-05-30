/** @format */

import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import AboutME from './AboutME';
// import TestTable from './TestTable';
// import Grid from '@mui/material/Unstable_Grid2';

function UpdataStudyHistory() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
      </Helmet>

      <Card>
        <Box sx={{ m: 2 }}>
          <Stack>
            <Typography sx={{ fontWeight: 700 }}>Contact Term</Typography>
            <Typography variant='body2' color='text.secondary'>
              <Typography variant='body2' color='text.secondary'>
                List Your Term
              </Typography>
            </Typography>
          </Stack>
        </Box>
      </Card>

      <Card sx={{ mt: 3.5 }}>
        <Box sx={{ m: 2, flexGrow: 1 }}></Box>
      </Card>
    </div>
  );
}

export default UpdataStudyHistory;
