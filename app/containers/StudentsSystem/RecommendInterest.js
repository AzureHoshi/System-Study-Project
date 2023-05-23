import React from 'react';

import { Box } from '@mui/material';
import { PapperBlock, Cardcooperative } from 'dan-components';

// data
import studentprojects from '../../api/dummy/studentprojects';

function RecommendInterest() {
  return (
    <div>
      <PapperBlock
        title='แนะนำโครงงาน และ สหกิจที่'
        desc=''
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {studentprojects.map((project) => (
            <Box
              sx={{ m: '1rem' }}
              key={project.projectId}
            >
              <Cardcooperative
                projectName={project.projectName}
                projectDetails={project.projectDetails}
                projectImg={project.projectImg}
              ></Cardcooperative>
            </Box>
          ))}
        </Box>
      </PapperBlock>
    </div>
  );
}

export default RecommendInterest;
