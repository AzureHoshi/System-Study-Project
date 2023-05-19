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
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';

// @mui Icons button
// import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Add from '@mui/icons-material/Add';

// @mui colors
import { red } from '@mui/material/colors';
import { alpha } from '@mui/material';

function StudyHistory() {
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
        <Box sx={{ p: 2, display: 'flex' }}>
          <Avatar
            variant='rounded'
            src='https://bit.ly/3W3gF7s'
            sx={{ width: 70, height: 70 }}
          />
          <Stack spacing={0.5} sx={{ ml: 1, mt: 0.8, flex: 1 }}>
            <Typography fontWeight={700}>Prachaya Mala</Typography>
            <Typography variant='body2' color='text.secondary'>
              Nong / Project Management
            </Typography>
          </Stack>
          <Stack sx={{ mt: 2.5 }}>
            <Button
              variant='outlined'
              startIcon={<Add sx={{ fontSize: 14 }} />}>
              Add
            </Button>
          </Stack>
          <Stack sx={{ mt: 2.5, ml: 1.5 }}>
            <Button
              variant='outlined'
              startIcon={<Edit sx={{ fontSize: 14 }} />}>
              Edit
            </Button>
          </Stack>
        </Box>
      </Card>

      <Card sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', borderRadius: 1, padding: 1 }}>
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: alpha('#ebe6e6', 0.3),
              width: '33.33%',
              height: 370,
              ml: 0.2,
              p: 1,
            }}>
            <Stack spacing={0.5} sx={{ ml: 1, mt: 0.8 }}>
              <Typography variant='body1' sx={{ color: red[50] }}>
                Platform Settings
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                ACCOUT
              </Typography>
              <CardContent>
                <Box sx={{ display: 'flex', ml: -3.2, mt: -2 }}>
                  <Switch defaultChecked />
                  <Typography variant='body2' sx={{ mt: 1.1 }}>
                    Email me when someone follows me
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: -3.2 }}>
                  <Switch />
                  <Typography variant='body2' sx={{ mt: 1.1 }}>
                    Email me when someone answers on my post
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', ml: -3.2 }}>
                  <Switch defaultChecked />
                  <Typography variant='body2' sx={{ mt: 1.1 }}>
                    Email me when someone mentions me
                  </Typography>
                </Box>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ ml: -2.5, mt: 0.5 }}>
                  APPLICATION
                </Typography>
                <Box sx={{ display: 'flex', ml: -3.2 }}>
                  <Switch />
                  <Typography variant='body2' sx={{ mt: 1.1 }}>
                    New launches and projects
                  </Typography>
                </Box>{' '}
                <Box sx={{ display: 'flex', ml: -3.2 }}>
                  <Switch defaultChecked />
                  <Typography variant='body2' sx={{ mt: 1.1 }}>
                    Monthly product updates
                  </Typography>
                </Box>{' '}
                <Box sx={{ display: 'flex', ml: -3.2 }}>
                  <Switch defaultChecked />
                  <Typography variant='body2' sx={{ mt: 1.1 }}>
                    Subscribe to newsletter
                  </Typography>
                </Box>
              </CardContent>
            </Stack>
          </Box>
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: alpha('#ebe6e6', 0.3),
              width: '33.33%',
              height: 370,
              ml: 1.2,
              p: 1,
            }}></Box>
          <Box
            sx={{
              borderRadius: 1,
              backgroundColor: alpha('#ebe6e6', 0.3),
              width: '33.33%',
              height: 370,
              ml: 1.2,
              p: 1,
            }}></Box>
        </Box>
      </Card>
    </div>
  );
}

export default StudyHistory;
