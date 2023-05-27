import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import { Cardcooperative } from 'dan-components';
// data
import studentprojects from '../../api/dummy/studentprojects';

function RecommendInterest() {
  return (
    <div>
      <Box
        sx={{
          p: 1,
          m: 0.5,
          maxWidth: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant='h4'
            gutterBottom
          >
            แนะนำโปรเจ็ค
          </Typography>
          <Box>
            <Button variant='contained'>กรอกประเภทโปรเจ็ค</Button>
            <Button variant='contained'>กรอกจากความใหม่</Button>
            <Button variant='contained'>นึกไม่ออก</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', border: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            maxWidth: '100%',
            borderRadius: 1,
            justifyContent: 'center',
          }}
        >
          {studentprojects.map((project) => (
            <Box
              sx={{ m: '1rem' }}
              key={project.projectId}
            >
              <Cardcooperative
                projectName={project.projectName}
                projectTags={project.projectTags}
                projectImg={project.projectImg}
              ></Cardcooperative>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default RecommendInterest;
