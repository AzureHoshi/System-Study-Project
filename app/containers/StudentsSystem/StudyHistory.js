/** @format */

import React from 'react';
import Helmet from 'react-helmet';
import brand from 'dan-api/dummy/brand';

// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AboutME from './AboutME';
import TestTable from './TestTable';

function StudyHistory() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Box sx={{ p: 2, display: 'flex' }}>
          <Avatar
            variant='rounded'
            src='https://bit.ly/3W3gF7s'
            sx={{ width: 70, height: 70 }}
          />
          <Stack sx={{ spacing: 0.5, m: 1, flex: 1 }}>
            <Typography sx={{ fontWeight: 700 }}>Prachaya Mala</Typography>
            <Typography variant='body2' color='text.secondary'>
              Nong / Project Managemen
            </Typography>
          </Stack>
          <Stack sx={{ m: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
              }}>
              29
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ display: 'flex', justifyContent: 'center' }}>
              หน่วยกิตที่เทียบโอน
            </Typography>
          </Stack>
          <Stack sx={{ m: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
              }}>
              22
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ display: 'flex', justifyContent: 'center' }}>
              หน่วยกิตที่เรียนแล้ว
            </Typography>
          </Stack>
          <Stack sx={{ m: 1 }}>
            <Typography
              sx={{
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
              }}>
              79
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ display: 'flex', justifyContent: 'center' }}>
              หน่วยกิตที่เหลือ
            </Typography>
          </Stack>
        </Box>
      </Card>

      <Divider sx={{ mt: 2 }} />

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} sx={{ display: 'flex' }}>
          <Box sx={{ borderColor: 'divider', display: 'flex' }}>
            <TabList
              onChange={handleChange}
              aria-label='lab API tabs example'
              display='flex'>
              <Tab label='โครงสร้างหน่วยกิต' value='1' />
              <Tab label='เกี่ยวกับ' value='2' />
            </TabList>
            <Box
              sx={{
                display: 'flex',
                width: '89%',
                justifyContent: 'end',
              }}>
              <Button
                href='http://localhost:3001/app/updata-studyhistory'
                variant='text'>
                เพิ่มประวัติการเรียน
              </Button>
            </Box>
          </Box>
          <TabPanel value='1'>
            <TestTable />
          </TabPanel>
          <TabPanel value='2'>
            <AboutME />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default StudyHistory;
