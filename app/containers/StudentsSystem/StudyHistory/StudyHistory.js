/** @format */
import React from 'react';
import Helmet from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Hidden from '@material-ui/core/Hidden';

// @mui material
import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  IconButton,
  Tab,
  Typography,
} from '@mui/material';
// @mui lab
import { TabContext, TabList, TabPanel } from '@mui/lab';
// @mui icons-material
import EditIcon from '@mui/icons-material/Edit';
// import Components
import AboutME from './components/AboutME';
import TestTable from './components/TestTable';

function StudyHistory() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  // Tab line
  const [tabvalue, setTabValue] = React.useState('1');
  const handleChangeTabs = (event, newTabValue) => {
    setTabValue(newTabValue);
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
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'row' }}>
          <Box>
            <Avatar
              variant='rounded'
              src='https://bit.ly/3W3gF7s'
              sx={{ width: 70, height: 70 }}
            />
          </Box>
          <Box sx={{ ml: 2, mt: 1.5, flex: 1 }}>
            <Typography sx={{ fontWeight: 700 }}>Prachaya Mala</Typography>
            <Typography variant='body2' color='text.secondary'>
              Nong / Project Managemen
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 1.5,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Hidden xsDown>
              <Stack sx={{ direction: 'column', spacing: 1.5, mr: 2 }}>
                <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                  29
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  หน่วยกิตที่เทียบโอน
                </Typography>
              </Stack>
              <Stack sx={{ direction: 'column', spacing: 1.5, mr: 2 }}>
                <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                  22
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  หน่วยกิตที่เรียนแล้ว
                </Typography>
              </Stack>
              <Stack sx={{ direction: 'column', spacing: 1.5, mr: 2 }}>
                <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                  79
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  หน่วยกิตที่เหลือ
                </Typography>
              </Stack>
            </Hidden>
          </Box>
        </Box>
      </Card>
      {/* ขนาดหน้าจอ sm ลงมา */}
      <Hidden smUp>
        <Card sx={{ mt: 2 }}>
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'row' }}>
            <Stack sx={{ direction: 'column', spacing: 0.5, ml: 2, mr: 1 }}>
              <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                29
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ fontSize: 12 }}>
                หน่วยกิตที่เทียบโอน
              </Typography>
            </Stack>
            <Stack sx={{ direction: 'column', spacing: 0.5, mr: 1 }}>
              <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                22
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ fontSize: 12 }}>
                หน่วยกิตที่เรียนแล้ว
              </Typography>
            </Stack>
            <Stack sx={{ direction: 'column', spacing: 0.5 }}>
              <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                79
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ fontSize: 12 }}>
                หน่วยกิตที่เหลือ
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Hidden>

      <Card sx={{ mt: 2 }}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tabvalue}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <TabList
                onChange={handleChangeTabs}
                scrollButtons={false}
                sx={{ flex: 1 }}>
                <Tab label='โครงสร้างหน่วยกิต' value='1' />
                <Tab label='เกี่ยวกับ' value='2' />
                {/* <Tab
                  label='เพิ่มประวัติการเรียน'
                  href='http://localhost:3001/app/updata-studyhistory'
                /> */}
              </TabList>
              <Box sx={{ display: 'block', m: 'auto' }}>
                <Hidden smUp>
                  <IconButton href='http://localhost:3001/app/updata-studyhistory'>
                    <EditIcon />
                  </IconButton>
                </Hidden>
                <Hidden xsDown>
                  <Button
                    href='http://localhost:3001/app/updata-studyhistory'
                    variant='text'>
                    เพิ่มประวัติการเรียน
                  </Button>
                </Hidden>
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
      </Card>
    </div>
  );
}

export default StudyHistory;
