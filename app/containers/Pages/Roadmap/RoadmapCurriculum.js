import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from 'tss-react/mui';
import brand from 'dan-api/dummy/brand';
// import { PapperBlock } from 'dan-components';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';

// data หลักสูตร
// let curriculumId = 0;
// function createData1(curriculumNameTh, curriculumYear) {
//   curriculumId += 1;
//   return {
//     curriculumId,
//     curriculumNameTh,
//     curriculumYear
//   };
// }

// const data1 = [
//   createData1('หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์', '2555'),
//   createData1('หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์', '2560'),
//   createData1('หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์', '2565'),
// ];

// // data หมวดวิชา
// let subjectCategoryId = 0;
// function createData2(name) {
//     subjectCategoryId += 1;
//     return {
//         subjectCategoryId,
//         name
//     };
// }
// const data2 = [
//     createData2('หมวดวิชาศึกษาทั่วไป'),
//     createData2('หมวดวิชาเฉพาะ'),
//     createData2('หมวดวิชาเลือกเสรี'),
// ];

// test
// let subjectTypeId = 0;
// function createData3(name, subjectCategoryId2) {
//     subjectTypeId += 1;
//     return {
//         subjectTypeId,
//         name,
//         subjectCategoryId2
//     };
// }
// const data3 = [
//     createData3('วิชาศึกษาทั่วไปบังคับ', '1'),
//     createData3('วิชาศึกษาทั่วไปเลือก', '1'),
//     createData3('วิชาแกน', '2'),
//     createData3('วิชาเฉพาะด้าน', '2'),
// ];

// const data3 = [
//   {
//     name: 'หมวดวิชาศึกษาทั่วไป',
//     child: [
//       {
//         name: 'วิชาศึกษาทั่วไปบังคับ',
//         child: [
//           { name: 'กลุ่มวิชาภาษาและการสื่อสาร' },
//           { name: 'กลุ่มวิชาสุภาพ' },
//         ],
//       },
//       {
//         name: 'วิชาศึกษาทั่วไปเลือก',
//         child: [
//           { name: 'กลุ่มวิชาสังคมศาสตร์และมนุษย์ศาสตร์' },
//           { name: 'กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์' },
//         ],
//       },
//     ],
//     name: 'หมวดวิชาเฉพาะ',
//     child: [
//       {
//         name: 'วิชาแกน',
//         child: [
//           { name: 'กลุ่มวิชาพื้นฐานทางวิทยาศาสตร์และคณิตศาสตร์' },
//           { name: 'กลุ่มวิชาพื้นฐานทางวิศวกรรมศาสตร์' },
//         ],
//       },
//       {
//         name: 'วิชาเฉพาะด้าน',
//         child: [
//           { name: 'กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์' },
//           { name: 'กลุ่มโครงสร้างพื้นฐานของระบบ' },
//         ],
//       },
//       {
//         name: 'วิชาเลือก',
//         child: [
//           { name: 'กลุ่มวิชาเครือข่ายคอมพิวเตอร์' },
//           { name: 'กลุ่มวิชาระบบคอมพิวเตอร์' },
//         ],
//       },
//     ],
//   },
// ];

// const data4 = [
//   {
//     subject_id: 1,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 2,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 3,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 4,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 5,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 6,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 7,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 8,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
//   {
//     subject_id: 9,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   }, {
//     subject_id: 10,
//     subject_name_th: 'ภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวัน',
//     subject_name_en: 'GEBLC101',
//     subject_type_name: 'วิชาเลือก'
//   },
// ];

const useStyles = makeStyles()((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  underline: {
    height: '4rem'
  },
}));

function RoadmapCurriculum() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const { classes } = useStyles();
  const [selectCurri, setSelectCurri] = useState('');
  const [showDetail, setShowDetail] = useState(false);
  const [selectTypeSubject, setSelectTypeSubject] = useState('1');

  // ข้อมูลหลักสูตร
  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3002/roadmap/curriculum')
      .then((response) => setData1(response.data))
      .catch((err) => console.log(err));
  });
  const [data3, setData3] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3002/roadmap/subject/${selectCurri}`)
      .then((response) => setData3(response.data))
      .catch((err) => console.log(err));
  });

  const handleChange = event => {
    setSelectCurri(event.target.value);
    setShowDetail(true);
  };
  const handleChangeTypeSubject = event => {
    setSelectTypeSubject(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'start',
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 3,
          my: 1,
        }}
      >
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 380, fullWidth: 1500 }}
        >
          <InputLabel id="select_roadmap_head"><Typography variant="subtitle1" color="#03a9f4">เลือกหลักสูตร</Typography></InputLabel>
          <Select
            id="select_roadmap_head"
            className={classes.underline}
            value={selectCurri}
            onChange={handleChange}
            sx={{
              '& #select_roadmap_head': {
                fontSize: '1.5rem',
              }
            }}
          >
            {data1.map((curri) => (
              <MenuItem key={curri.curriculum_id} value={curri.curriculum_id}>
                {curri.curriculum_name_th} {curri.curriculum_year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {(showDetail)
        ? <div>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'start',
              bgcolor: 'background.paper',
              borderRadius: 1,
              boxShadow: 3,
              my: 1,
              p: 1,
              px: 2
            }}
          >
            <Typography variant="subtitle1" >
              ระยะเวลาของหลักสูตร: ศึกษาปกติ 4 ปี ไม่เกิน 8 ปี
            </Typography>
            <Typography variant="subtitle1" >
              จำนวนหน่วยกิตตลอดหลักสูตร: ? หน่วยกิต
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'start',
              bgcolor: 'background.paper',
              borderRadius: 1,
              boxShadow: 3,
              my: 1,
              p: 1
            }}
          >
            <FormControl
              variant="standard"
              sx={{ minWidth: 380, fullWidth: 400, mb: 4 }}
            >
              <InputLabel variant="standard" htmlFor="subject_type">
                กลุ่มวิชา
              </InputLabel>
              <Select
                defaultValue={1}
                value={selectTypeSubject}
                onChange={handleChangeTypeSubject}
                inputProps={{
                  name: 'กลุ่มวิชา',
                  id: 'subject_type',
                }}
              >
                <MenuItem value={1}>วิชาทั้งหมด</MenuItem>
                <MenuItem value={2}>วิชาเลือก</MenuItem>
                <MenuItem value={3}>วิชาบังคับ</MenuItem>
                <MenuItem value={4}>วิชานอกแผน???</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={1}>
              {data3.map((subjectlist) => (
                <Grid item xs={4} md={2.4} key={subjectlist.subject_id}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                      boxShadow: 3,
                      m: 1,
                      p: 1,
                      typography: 'body1'
                    }}
                  >
                    <Typography variant="subtitle1" color={'#ff6d00'}>
                      {subjectlist.subject_code}
                    </Typography>
                    <Typography variant="subtitle2">
                      {subjectlist.subject_name_en}
                    </Typography>
                    <Typography variant="subtitle2">
                      {subjectlist.subject_name_th}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        typography: 'body1',
                      }}
                    >
                      <Button variant="contained" size="small">ดูเพิ่มเติม</Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        : ''
      }
    </div>
  );
}

export default RoadmapCurriculum;
