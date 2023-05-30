/** @format */

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, name, max, compareTransfer, finish, surplus) {
  return { id, name, max, compareTransfer, finish, surplus };
}

const rows = [
  createData(1, 'จำนวนหน่วยกิตตลอดหลักสูตร', 130, 28, 22, 80),
  createData(2, 'หมวดวิชาศึกษาทั่วไป', 30, 12, 9, 9),
  createData(3, 'หมวดวิชาเฉพาะ', 94, 16, 13, 65),
  createData(4, 'หมวดวิชาเลือกเสรี', 6),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>รายชื่อวิชา</TableCell>
            <TableCell align='right'>หน่วยกิตแต่ละรายวิชา</TableCell>
            <TableCell align='right'>หน่อยกิตที่เทียบโอน</TableCell>
            <TableCell align='right'>หน่อยกิตที่เรียนแล้ว</TableCell>
            <TableCell align='right'>หน่อยกิตที่เหลือ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.max}</TableCell>
              <TableCell align='right'>{row.compareTransfer}</TableCell>
              <TableCell align='right'>{row.finish}</TableCell>
              <TableCell align='right'>{row.surplus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
