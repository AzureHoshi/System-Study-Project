/** @format */

import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Hidden from '@material-ui/core/Hidden';
// @mui material
import {
  Box,
  Button,
  Divider,
  styled,
  Paper,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// @mui icons-material
import AddIcon from '@mui/icons-material/Add';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import BackpackIcon from '@mui/icons-material/Backpack';
import ComputerIcon from '@mui/icons-material/Computer';
import FolderIcon from '@mui/icons-material/Folder';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function UpdataStudyHistory() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#292929' : '#fff',
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

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* ถ้าหน้าจอ <= lg จะไม่เห็น และ ถ้า >= lg จะเห็น */}
          <Hidden mdDown>
            {/* ถ้าหน้าจอ >= lg จะเห็น ขนาด 3 และ ถ้าต่ำกว่าจะไม่เห็น */}
            <Grid lg={2}>
              {/* ==========================================  เริ่มด้านซ้ายสุดตรงนี้  ========================================== */}
              <Item>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Box sx={{ p: 2, display: 'block', m: 'auto' }}>
                    <Button
                      variant='contained'
                      size='medium'
                      startIcon={<AddIcon />}>
                      เพิ่มเทอม
                    </Button>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      m: 'auto',
                      textAlign: 'left',
                    }}>
                    <Box sx={{ ml: 2, mb: 1 }}>
                      <Button variant='text' startIcon={<ClearAllIcon />}>
                        รายชื่อวิชาทั้งหมด
                      </Button>
                    </Box>
                    <Box sx={{ ml: 2, mb: 1 }}>
                      <Button variant='text' startIcon={<BackpackIcon />}>
                        หมวดวิชาศึกษาทั่วไป
                      </Button>
                    </Box>
                    <Box sx={{ ml: 2, mb: 1 }}>
                      <Button variant='text' startIcon={<ComputerIcon />}>
                        หมวดวิชาเฉพาะ
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      m: 'auto',
                      textAlign: 'left',
                    }}>
                    <Box sx={{ m: 'auto' }}>
                      <Typography sx={{ fontWeight: 500 }}>
                        ภาคเรียนที่
                      </Typography>
                    </Box>
                    {/* ===================================================  map ตรงนี้  =================================================== */}
                    <Box sx={{ m: 'auto' }}>
                      <Button variant='text' startIcon={<FolderIcon />}>
                        เทอมที่ 1
                      </Button>
                    </Box>
                    <Box sx={{ m: 'auto' }}>
                      <Button variant='text' startIcon={<FolderIcon />}>
                        เทอมที่ 2
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Hidden>
          {/* หน้าจอ >= lg จะเห็น ขนาด 4 และ >= sm จะเห็น ขนาด 6 และ >= xs จะเห็น ขนาด 16 */}
          <Grid lg={4} sm={6} xs={16}>
            {/* ==========================================  เริ่มดตรงกลางตรงนี้  ========================================== */}
            <Item>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Box sx={{ p: 2, m: 'auto', width: 450, maxWidth: '100%' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    {/* ถ้าหน้าจอ >= lg จะไม่เห็น และ ถ้า <= lg จะเห็น */}
                    <Hidden lgUp>
                      <IconButton
                        size='large'
                        edge='start'
                        color='primary'
                        aria-label='menu'
                        sx={{ mr: { md: 'auto' } }}>
                        <MenuIcon />
                      </IconButton>
                    </Hidden>
                    <TextField
                      fullWidth
                      id='search'
                      label='Search'
                      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  ตรงนี้ไม่เข้าใจ  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end' sx={{ mb: 1 }}>
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <ListItemText
                            primary='ENGCE103'
                            sx={{ mr: 1, mt: 2, ml: 1 }}
                          />
                          <ListItemText
                            primary='โครงสร้างข้อมูลและขั้นตอนวิธี'
                            secondary='Data Structures and Algorithms'
                          />
                        </Box>
                      </ListItemButton>
                      {/* จะเห็นเฉพาะ xs */}
                      <Box sx={{ m: 'auto' }}>
                        <Hidden only={['sm', 'md', 'lg', 'xl']}>
                          <Box sx={{ m: 'auto' }}>
                            <IconButton>
                              <AddIcon />
                            </IconButton>
                          </Box>
                        </Hidden>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Item>
          </Grid>
          {/* เฉพาะหน้าจะ xs จะไม่เห็น  */}
          <Hidden only={'xs'}>
            {/* หน้าจอ >= lg จะเห็น ขนาด 5 และ >= sm จะเห็น ขนาด 6 */}
            <Grid lg={6} sm={6}>
              {/* ==========================================  เริ่มด้านขวาสุดตรงนี้ ========================================== */}
              <Item>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Box sx={{ p: 2 }}>
                    <Typography variant='h6'>รายละเอียดรายวิชา</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ flexGrow: 1 }}>
                    {/* ==========================================  รายละเอียดเริ่มตรงนี้ ========================================== */}
                    {/* Grid ข้างในนี้เต็มที่ 12  */}
                    <Grid
                      lg={12}
                      sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
                      <Box sx={{ mt: 0.4 }}>
                        <Typography fontWeight={600}>ENGCE103</Typography>
                      </Box>
                      <Box sx={{ ml: 2, flex: 1 }}>
                        <Typography fontWeight={500}>
                          โครงสร้างข้อมูลและขั้นตอนวิธี
                        </Typography>
                        <Typography fontWeight={500}>
                          Data Structures and Algorithms
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 0.4 }}>
                        <Typography variant='h6'>3</Typography>
                      </Box>
                    </Grid>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { lg: 'row', sm: 'column' },
                      }}>
                      <Grid lg={12} sm={12}>
                        <Box sx={{ p: 1 }}>
                          <Typography fontWeight={600}>วิชาก่อนหน้า</Typography>
                        </Box>
                        <Box sx={{ p: 1, ml: 4 }}>
                          <Typography fontWeight={300}>
                            ENGCC304 : การเขียนโปรแกรมคอมพิวเตอร์
                          </Typography>
                        </Box>
                      </Grid>
                      {/* ........................................  ยังไม่รู้จะทำยังไง   ..................................... */}
                      {/* <Grid
                        lg={4}
                        sm={12}
                        sx={{ backgroundColor: '#A50' }}></Grid>
                      <Grid
                        lg={4}
                        sm={12}
                        sx={{ backgroundColor: '#A90' }}></Grid> */}
                    </Box>
                    <Grid lg={12}>
                      <Box sx={{ p: 1 }}>
                        <Typography fontWeight={600}>
                          คำอธิบายรายวิชา
                        </Typography>
                      </Box>
                      <Box sx={{ p: 1, ml: 4 }}>
                        <Typography fontWeight={300}>
                          ศึกษาและฝึกปฏิบัติการเกี่ยวกับการแทนข้อมูล
                          โครงสร้างและการออกแบบข้อมูล แบบอาร์เรย์ สแต็ก คิว
                          ลิงค์ลิสต์ ต้นไม้ กราฟ การจัดเรียงข้อมูล
                          การค้นหาข้อมูล วิเคราะห์ขั้นตอนวิธี
                        </Typography>
                      </Box>
                    </Grid>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Button variant='contained' size='medium'>
                        เพิ่มรายวิชา
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </div>
  );
}

export default UpdataStudyHistory;
