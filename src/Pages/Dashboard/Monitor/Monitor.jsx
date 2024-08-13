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
];







function Monitor() {
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <PageContainer>
      <Grid Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }} >
        <Grid item lg={3} md={3} sm={3} xs={3} sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
          <Grid item >
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
        <Grid item  lg={3} md={3} sm={3} xs={3} sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
          <Grid item>
            <Input
              type="date"
              slotProps={{
                input: {
                  min: '2001-02-16',
                  max: '2024-08-07',
                },
              }}
            />
          </Grid>
          <Grid item>
            <Input
              type="date"
              slotProps={{
                input: {
                  min: '2001-02-16',
                  max: '2024-08-10',
                },
              }}
            />
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
        <Grid item mt={2} >
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead >
                <TableRow  >
                  <StyledTableCell>Notification No.</StyledTableCell>
                  <StyledTableCell align="left">Data/Time</StyledTableCell>
                  <StyledTableCell align="left">Well Location</StyledTableCell>
                  <StyledTableCell align="left">Well Installation</StyledTableCell>
                  <StyledTableCell align="left">Well number</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
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

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
       
        </Grid>
      </Grid>
    </PageContainer >
  )
}

export default Monitor
