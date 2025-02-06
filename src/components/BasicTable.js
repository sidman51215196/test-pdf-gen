import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Chocolate Cake', 300, 5.5, 20, 4.7),
  createData('Vanilla Ice Cream', 150, 3.2, 30, 4.2),
  createData('Strawberry Tart', 250, 6.8, 25, 4.5),
  createData('Cheesecake', 320, 7.0, 40, 4.8),
  createData('Apple Pie', 200, 4.0, 35, 4.3),
  createData('Banana Bread', 180, 3.5, 45, 4.1),
  createData('Carrot Cake', 280, 5.3, 50, 4.4),
  createData('Lemon Meringue Pie', 270, 4.8, 55, 4.6),
  createData('Pumpkin Spice Muffin', 220, 5.0, 60, 4.2),
  createData('Chocolate Chip Cookies', 160, 3.0, 70, 4.0),
  createData('Blueberry Muffin', 210, 4.2, 65, 4.3),

];


export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
