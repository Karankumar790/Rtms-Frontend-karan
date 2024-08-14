import React from 'react'
import PageContainer from '../../../components/HOC/PageContainer'
import { Button, Grid, TextField } from '@mui/material'
import Input from '@mui/joy/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { BarChart } from '@mui/x-charts/BarChart';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1'),
  createData('2'),
  createData('3'),
  createData('4'),
  createData('5'),
  createData('6'),
  createData('7'),
  createData('8'),
  createData('9'),
  createData('10'),
];







function Monitor() {
  const [age, setAge] = React.useState('');
  const [installation, setInstallation] = React.useState('');
  const [number, setNumber] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };


  return (
    <div>

        <Grid container  spacing={3} pt={1} >
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Well Location</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={age}
                label="Well Location"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <FormControl  fullWidth size="small">
              <InputLabel id="demo-select-large-label">Well Installation</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={installation}
                label="Well  Installation"
                onChange={handleChangeInstallation}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <FormControl  fullWidth size="small" >
              <InputLabel id="demo-select-large-label">Well Number</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={number}
                label="Well Number"
                onChange={handleChangeNumber}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>

          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Well Location</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={age}
                label="Well Location"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>UP</MenuItem>
                <MenuItem value={20}>MP</MenuItem>
                <MenuItem value={30}>WB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container mt={2} >
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead >
                <TableRow  >
                  <StyledTableCell>Well No.</StyledTableCell>
                  <StyledTableCell align="left">GIP</StyledTableCell>
                  <StyledTableCell align="left">CHP</StyledTableCell>
                  <StyledTableCell align="left">THP</StyledTableCell>
                  <StyledTableCell align="left">Battery %</StyledTableCell>
                  <StyledTableCell align="left">Solar Power</StyledTableCell>
                  <StyledTableCell align="left">Communication</StyledTableCell>
                  <StyledTableCell align="left">Flow Status</StyledTableCell>
                  <StyledTableCell align="left">Last Update</StyledTableCell>
                  <StyledTableCell align="left">Alarm</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
       
      
    </div >
  )
}

export default Monitor
