import React from 'react'
import PageContainer from '../../../components/HOC/PageContainer'
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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
  createData('1'),
  createData('2'),
  createData('3'),
  createData('4'),
  createData('5'),
  createData('3'),
  createData('4'),
  createData('5'),
];



function ComplaintHistory() {
  
  const [compNo, setCompNo] = React.useState('');
  const [notification, setNotification] = React.useState('');
  const [rName, setRName] = React.useState('');
  const [tName, setTname] = React.useState('');

  const handleLocation = (event) => {
    setCompNo(event.target.value);
  };

  const handleNotification = (event) => {
    setNotification(event.target.value);
  };

  const handleRaiserName = (event) => {
    setRName(event.target.value);
  };

  const handleTakerName = (event) => {
    setTname(event.target.value);
  };
  return (
    <div>
       <Grid container>
          <Typography variant='h4'>Complaint History</Typography>
        </Grid>
        <Grid container   spacing={3} pt={1}  >
          <Grid item xs={12} sm={8} md={6} lg={3} >
            <FormControl fullWidth size="small">
              <InputLabel className='custom-textfield' id="demo-select-large-label">Complain No.</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={compNo}
                label="Well Location"
                onChange={handleLocation}
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
              <InputLabel id="demo-select-large-label">Notification no.</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={notification}
                label="Well Location"
                onChange={handleNotification}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>all</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-large-label">Raiser Name</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={rName}
                label="Well Location"
                onChange={handleRaiserName}
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
              <InputLabel id="demo-select-large-label">Taker Name</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-large"
                value={tName}
                label="Well Location"
                onChange={handleTakerName}
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
        <Grid container  mt={3}>
          <TableContainer component={Paper} sx={{ maxHeight: 700, overflow: 'auto' }}>
            <Table aria-label="customized table">
              <TableHead >
                <TableRow  >
                  <StyledTableCell sx={{fontSize:'18px'}}>Complain No.</StyledTableCell>
                  <StyledTableCell sx={{fontSize:'18px'}} align="left">Data/Time</StyledTableCell>
                  <StyledTableCell sx={{fontSize:'18px'}} align="left">Well Location</StyledTableCell>
                  <StyledTableCell sx={{fontSize:'18px'}} align="left">Well Installation</StyledTableCell>
                  <StyledTableCell sx={{fontSize:'18px'}} align="left">Well number</StyledTableCell>
                  <StyledTableCell sx={{fontSize:'18px'}} align="left">Description</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">5/6/2024</StyledTableCell>
                    <StyledTableCell align="left">Ghaziabad</StyledTableCell>
                    <StyledTableCell align="left">Yes</StyledTableCell>
                    <StyledTableCell align="left">3</StyledTableCell>
                    <StyledTableCell align="left">good</StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    </div>
  )
}

export default ComplaintHistory