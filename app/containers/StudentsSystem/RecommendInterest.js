import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Mui
import { Box, Typography, Button, Tabs, Tab, Pagination } from '@mui/material';
import { Cardcooperative } from 'dan-components';
// data
import studentprojects from '../../api/dummy/studentprojects';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function RecommendInterest() {
  const [valueTabs, setValueTabs] = React.useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // จำนวนรายการต่อหน้า
  const [totalItems, setTotalItems] = useState(0); // จำนวนรายการทั้งหมด
  const [data, setData] = useState([]); // ข้อมูล Card จาก API

  // คำนวณตำแหน่งเริ่มต้นและสิ้นสุดของรายการที่จะแสดงในหน้าปัจจุบัน
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // สร้างรายการ Card ที่จะแสดงในหน้าปัจจุบัน
  const currentItems = data.slice(startIndex, endIndex);

  useEffect(() => {
    setData(studentprojects);
    setTotalItems(studentprojects.length);
  }, []);

  const handlePageChange = (event, valuePage) => {
    setCurrentPage(valuePage);
  };

  const handleTabsChange = (event, newValue) => {
    setValueTabs(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          p: 1,
          m: 0.5,
          maxWidth: '100%',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Box sx={{ my: '1rem' }}>
          <Tabs
            value={valueTabs}
            onChange={handleTabsChange}
            aria-label='basic tabs example'
          >
            <Tab
              label='แนะนำโครงงาน'
              {...a11yProps(0)}
            />
            <Tab
              label='แนะนำสหกิจ'
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TabPanel
            value={valueTabs}
            index={0}
          >
            <Box>
              <Button variant='contained'>กรอกประเภทโปรเจ็ค</Button>
              <Button variant='contained'>กรอกจากความใหม่</Button>
              <Button variant='contained'>นึกไม่ออก</Button>
            </Box>
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
                {currentItems.map((item, index) => (
                  <Box
                    sx={{ m: '1rem' }}
                    key={index}
                  >
                    <Cardcooperative
                      projectName={item.projectName}
                      projectTags={item.projectTags}
                      projectImg={item.projectImg}
                    ></Cardcooperative>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                m: '1',
              }}
            >
              <Typography sx={{ border: '1 solid' }}>Page: {currentPage}</Typography>
              <Pagination
                count={Math.ceil(totalItems / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                siblingCount={2}
                boundaryCount={2}
              />
            </Box>
          </TabPanel>
          <TabPanel
            value={valueTabs}
            index={1}
          >
            Item Two
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
}

export default RecommendInterest;
