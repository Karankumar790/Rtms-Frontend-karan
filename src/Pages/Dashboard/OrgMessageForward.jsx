import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#8C000B', // Customize background color
    color: theme.palette.common.white, // Text color
    padding: '10px', // Custom padding
    height: '20px',  // Specific height for the header row
    fontSize: '16px', // Font size for the header
    position: 'sticky', // Sticky positioning
    zIndex: 1, // Ensure it stays above the rows
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1'),
 
];


function OrgMessageForward() {
  const [installation, setInstallation] = useState('');

  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item  xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Activity</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={installation}
              label="Well Installation"
              onChange={handleChangeInstallation}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={10}>Well</MenuItem>
              <MenuItem value={20}>Router</MenuItem>
              <MenuItem value={30}>Device</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TextField variant='outlined' size='small' fullWidth label="Department" />
        </Grid>
        <Grid item  xs={12} sm={8} md={6} lg={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker', 'TimePicker', 'TimePicker']}>
              <DemoItem  >
                <TimePicker views={['hours', 'minutes', 'seconds']} sx={{ height: '50%' }} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TextField variant='outlined' size='small' fullWidth label="Level 1" />
        </Grid>
        <Grid item  xs={12} sm={8} md={6} lg={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker', 'TimePicker', 'TimePicker']}>
              <DemoItem  >
                <TimePicker views={['hours', 'minutes', 'seconds']} sx={{ height: '50%' }} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TextField variant='outlined' size='small' fullWidth label="Level 2" />
        </Grid>
        <Grid item  xs={12} sm={8} md={6} lg={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker', 'TimePicker', 'TimePicker']}>
              <DemoItem  >
                <TimePicker views={['hours', 'minutes', 'seconds']} sx={{ height: '50%' }} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <TextField variant='outlined' size='small' fullWidth label="Level 3" />
        </Grid>
      </Grid>
      <Grid container 
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }} mt={1}>
        <TableContainer component={Paper} sx={{ maxHeight: 620,height:1000 }}>
          <Table aria-label="customized table" stickyHeader>
            <TableHead >
              <TableRow  >
                <StyledTableCell align='left'>Activite</StyledTableCell>
                <StyledTableCell align='left'>Department</StyledTableCell>
                <StyledTableCell align='left'>Level 1</StyledTableCell>
                <StyledTableCell align='left'>Delay</StyledTableCell>
                <StyledTableCell align='left'>Level 2</StyledTableCell>
                <StyledTableCell align='left'>Delay</StyledTableCell>
                <StyledTableCell align='center'>Level 3</StyledTableCell>
                <StyledTableCell align='left'>Delay</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default OrgMessageForward;
