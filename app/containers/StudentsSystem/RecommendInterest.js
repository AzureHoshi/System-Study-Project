import React from 'react';

import { Box } from '@mui/material';
import { Cardcooperative } from 'dan-components';
// data
import studentprojects from '../../api/dummy/studentprojects';

function RecommendInterest() {
  return (
    <div>
      <Box sx={{ width: '100%' }}>
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
