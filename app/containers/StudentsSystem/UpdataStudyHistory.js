/** @format */

import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';

// @mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import AboutME from './AboutME';
// import TestTable from './TestTable';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import AddIcon from '@mui/icons-material/Add';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import BackpackIcon from '@mui/icons-material/Backpack';
import ComputerIcon from '@mui/icons-material/Computer';
import FolderIcon from '@mui/icons-material/Folder';
import SearchIcon from '@mui/icons-material/Search';

function UpdataStudyHistory() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#292929' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
        <Box sx={{ p: 2 }}>
          <Stack sx={{ spacing: 0.5 }}>
            <Typography sx={{ fontWeight: 700 }}>Contact Trem</Typography>
            <Typography variant='body2' color='text.secondary'>
              List Your Trem
            </Typography>
          </Stack>
        </Box>
      </Card>

      <Box sx={{ flexGrow: 1, mt: 3.5 }}>
        <Grid container spacing={2}>
          {/* ตัวซ้ายสุด */}
          <Grid xs={2}>
            <Item>
              <Box>
                <Button variant='contained' startIcon={<AddIcon />}>
                  เพิ่มเทอม
                </Button>
              </Box>
              <Divider sx={{ m: 1.5 }} />
              <Box>
                <Stack direction='column' spacing={2}>
                  <Button variant='text' startIcon={<ClearAllIcon />}>
                    รายชื่อวิชาทั้งหมด
                  </Button>
                  <Button variant='text' startIcon={<BackpackIcon />}>
                    หมวดวิชาศึกษาทั่วไป
                  </Button>
                  <Button variant='text' startIcon={<ComputerIcon />}>
                    หมวดวิชาเฉพาะ
                  </Button>
                </Stack>
              </Box>
              <Divider sx={{ m: 1.5 }} />
              <Box>
                <Stack direction='column' spacing={2}>
                  <Typography sx={{ fontWeight: 500 }}>ภาคเรียนที่</Typography>
                  <Button variant='text' startIcon={<FolderIcon />}>
                    เทอมที่ 1
                  </Button>
                  <Button variant='text' startIcon={<FolderIcon />}>
                    เทอมที่ 2
                  </Button>
                </Stack>
              </Box>
            </Item>
          </Grid>
          {/* ตัวกลาง */}
          <Grid xs={4}>
            <Item>
              <Box>
                <Stack direction='row' spacing={1}>
                  <TextField
                    id='outlined-basic'
                    label='Search Subject'
                    variant='outlined'
                    sx={{ width: '90%' }}
                  />
                  <Button variant='text' startIcon={<SearchIcon />} />
                </Stack>
              </Box>
            </Item>
          </Grid>
          {/* ตัวขวาสุด */}
          <Grid xs={6}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default UpdataStudyHistory;
