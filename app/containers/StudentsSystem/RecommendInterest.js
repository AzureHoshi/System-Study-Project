import React, { useState, useEffect } from 'react';

// Mui
import {
  Box,
  Typography,
  Pagination,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from '@mui/material';
import { Cardcooperative } from 'dan-components';
// data
import studentprojects from '../../api/dummy/studentprojects';
import cooperative from '../../api/dummy/cooperative';

function RecommendInterest() {
  const [selectedValueData, setSelectedValueData] = useState('1'); // ข้อมูลที่เลือกการแสดงข้อมูล

  const handleSelectedDataChange = (event) => {
    setSelectedValueData(event.target.value);
  };

  // const dataType1 = () => (
  //   <Box sx={{ m: 1 }}>
  //     <FormLabel id='demo-row-radio-buttons-group-label'>ประเภทโครงงาน</FormLabel>
  //     <RadioGroup
  //       row
  //       name='row-radio-buttons-group'
  //     >
  //       <FormControlLabel
  //         value='0'
  //         control={<Radio />}
  //         label='Hardware'
  //       />
  //       <FormControlLabel
  //         value='1'
  //         control={<Radio />}
  //         label='Software'
  //       />
  //     </RadioGroup>
  //   </Box>
  // );

  // const dataType2 = () => (
  //   <Box sx={{ m: 1 }}>
  //     <FormLabel id='demo-row-radio-buttons-group-label'>ประเภทโครงงาน</FormLabel>
  //     <RadioGroup
  //       row
  //       name='row-radio-buttons-group'
  //     >
  //       <FormControlLabel
  //         value='0'
  //         control={<Radio />}
  //         label='Hardware'
  //       />
  //       <FormControlLabel
  //         value='1'
  //         control={<Radio />}
  //         label='Software'
  //       />
  //     </RadioGroup>
  //   </Box>
  // );

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: 2,
          borderRadius: 2,
          mb: '2rem',
          p: '1rem',
          display: 'column',
          direction: 'row',
        }}
      >
        <Box sx={{ m: 1 }}>
          <FormControl>
            <FormLabel id='demo-row-radio-buttons-group-label'>เลือกข้อมูลที่การแสดง</FormLabel>
            <RadioGroup
              row
              value={selectedValueData}
              onChange={handleSelectedDataChange}
            >
              <FormControlLabel
                value='1'
                control={<Radio />}
                label='โครงงาน'
              />
              <FormControlLabel
                value='2'
                control={<Radio />}
                label='สหกิจ'
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      {selectedValueData === '1' ? <ShowDataProject /> : <ShowDataCooperative />}
    </Box>
  );
}

const ShowDataProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // จำนวนรายการต่อหน้า
  const [totalItems, setTotalItems] = useState(0); // จำนวนรายการทั้งหมด
  const [data, setData] = useState([]); // ข้อมูล Card จาก API
  const [years, setYears] = React.useState('0');

  const handleYearChange = (event) => {
    setYears(event.target.value);
  };

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
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 2, borderRadius: 2 }}>
      <Box sx={{ m: '1rem', p: '1rem', border: '1px solid', alignItems: 'flex-start' }}>
        <FormControl>
          <FormLabel id='demo-row-radio-buttons-group-label'>ประเภทโครงงาน</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='1'
              control={<Radio />}
              label='Hardware'
            />
            <FormControlLabel
              value='2'
              control={<Radio />}
              label='Software'
            />
            <FormControlLabel
              value='2'
              control={<Radio />}
              label='Network'
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }}>
          <FormLabel id='demo-row-radio-buttons-group-label'>โครงงานของปี</FormLabel>
          <Select
            value={years}
            onChange={handleYearChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={0}>
              <em>ทั้งหมด</em>
            </MenuItem>
            <MenuItem value={2566}>2566</MenuItem>
            <MenuItem value={2565}>2565</MenuItem>
            <MenuItem value={2564}>2564</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 1,
            maxWidth: '100%',
            justifyContent: 'center',
          }}
        >
          {currentItems.map((item, index) => (
            <Box
              sx={{ m: '0.5rem' }}
              key={index}
            >
              <Cardcooperative
                Name={item.projectName}
                Tags={item.projectTags}
                Img={item.projectImg}
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
    </Box>
  );
};

const ShowDataCooperative = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // จำนวนรายการต่อหน้า
  const [totalItems, setTotalItems] = useState(0); // จำนวนรายการทั้งหมด
  const [data, setData] = useState([]); // ข้อมูล Card จาก API
  const [provinces, setProvinces] = React.useState('0');

  const handleProvincesChange = (event) => {
    setProvinces(event.target.value);
  };

  // คำนวณตำแหน่งเริ่มต้นและสิ้นสุดของรายการที่จะแสดงในหน้าปัจจุบัน
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // สร้างรายการ Card ที่จะแสดงในหน้าปัจจุบัน
  const currentItems = data.slice(startIndex, endIndex);

  useEffect(() => {
    setData(cooperative);
    setTotalItems(cooperative.length);
  }, []);

  const handlePageChange = (event, valuePage) => {
    setCurrentPage(valuePage);
  };
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 2, borderRadius: 2 }}>
      <Box sx={{ m: '1rem', p: '1rem', border: '1px solid', alignItems: 'flex-start' }}>
        <FormControl>
          <FormLabel id='demo-row-radio-buttons-group-label'>ประเภทสหกิจ</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value='1'
              control={<Radio />}
              label='Hardware'
            />
            <FormControlLabel
              value='2'
              control={<Radio />}
              label='Software'
            />
            <FormControlLabel
              value='2'
              control={<Radio />}
              label='Network'
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }}>
          <FormLabel id='demo-row-radio-buttons-group-label'>จังหวัด</FormLabel>
          <Select
            value={provinces}
            onChange={handleProvincesChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={0}>
              <em>ทั้งหมด</em>
            </MenuItem>
            <MenuItem value={2566}>เชียงใหม่</MenuItem>
            <MenuItem value={2565}>กรุงเทพ</MenuItem>
            <MenuItem value={2564}>ลำปาง</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 1,
            maxWidth: '100%',
            justifyContent: 'center',
          }}
        >
          {currentItems.map((item, index) => (
            <Box
              sx={{ m: '0.5rem' }}
              key={index}
            >
              <Cardcooperative
                Name={item.cooperativeName}
                Tags={item.cooperativeTags}
                Img={item.cooperativeImg}
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
    </Box>
  );
};
export default RecommendInterest;
