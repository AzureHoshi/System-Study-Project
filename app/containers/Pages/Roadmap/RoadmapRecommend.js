import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function RoadmapRecommend() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const data1 = [
    {
      year: 1,
      semester: 1
    },
    {
      year: 1,
      semester: 2
    },
    {
      year: 2,
      semester: 1
    },
    {
      year: 2,
      semester: 2
    },
    {
      year: 3,
      semester: 1
    },
    {
      year: 3,
      semester: 2
    },
    {
      year: 4,
      semester: 1
    },
    {
      year: 4,
      semester: 2
    },
  ];
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
      <PapperBlock title="Blank Page" desc="Some text description">
        {data1.map((head) => (
          <Box
            key={head.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'start',
              bgcolor: 'background.paper',
              borderRadius: 1,
              boxShadow: 2,
              my: 1,
            }}
          >
            {head.year}/{head.semester}
            <Box
              key={head.id}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                borderRadius: 1,
                m: 1,
              }}
            >
              <TableContainer sx={{ minWidth: 300, maxWidth: 400 }} component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>วิชาบังคับ</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>
                          {row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TableContainer sx={{ minWidth: 300, maxWidth: 400 }} component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>วิชาเลือก</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>
                          {row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box
                key={head.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: 1,
                  m: 1,
                  boxShadow: 2,
                  minWidth: 300,
                  maxWidth: 400,
                }}
              >
                <Typography>วิชาบังคับ: 1 หน่วย</Typography>
                <Typography>วิชาเลือก: 1 หน่วย</Typography>
                <Typography>วิชาเสรี: 1 หน่วย</Typography>
                <Typography>หน่วยกิตรวม: 1 หน่วย</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </PapperBlock>
    </div>
  );
}

export default RoadmapRecommend;
