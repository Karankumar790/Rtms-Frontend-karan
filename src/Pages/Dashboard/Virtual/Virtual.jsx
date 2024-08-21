import React from 'react'
import PageContainer from '../../../components/HOC/PageContainer'
import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';



// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('1'),
//   createData('2'),
//   createData('3'),
//   createData('4'),
//   createData('5'),
// ];



function Virtual() {
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

  //   const [age, setAge] = React.useState('');
  //   const [location, setLocation] = React.useState('');
  //   const [installation, setInstallation] = React.useState('');
  //   const [number, setNumber] = React.useState('');

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  //   const handleChangeLocation = (event) => {
  //     setLocation(event.target.value);
  //   };
  //   const handleChangeInstallation = (event) => {
  //     setInstallation(event.target.value);
  //   };
  //   const handleChangeNumber = (event) => {
  //     setNumber(event.target.value);
  //   };
  return (
    <div>
      <Grid container >
        <Typography variant='h4'>Live Capture </Typography>
      </Grid>
      <Grid container spacing={3} pt={1} justifyContent={'space-between'} >
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
          <FormControl fullWidth size="small">
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
          <FormControl fullWidth size="small" >
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
      </Grid>
      <Grid container  height={'500px'} mt={4} spacing={1} >
        <Grid container lg={5} md={6} sm={6} xs={12}  border='1px solid black' sx={{justifyContent:'space-evenly',display:'flex', alignItems:'center'}} mr={1}>
          
          <Button variant='contained'>Start</Button>
          <Button variant='contained'>End</Button>
          <Button variant='contained'>Capture photo</Button>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}  border='1px solid black' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      
      <Typography variant='h4'> Live photo </Typography>
  
        </Grid>
      </Grid>
     
    </div>
  )
}

export default Virtual