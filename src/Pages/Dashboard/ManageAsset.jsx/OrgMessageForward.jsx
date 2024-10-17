import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, TimeField, TimePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import { Box } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RestoreIcon from '@mui/icons-material/Restore';
import ThreePIcon from '@mui/icons-material/ThreeP';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#8C000B', // Customize background color
    color: theme.palette.common.white, // Text color
    padding: '15px', // Custom padding
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
      <Grid container >
        <Grid item  xs={12} sm={12} md={12} lg={6} p={1}>
          <Box>
            <Typography variant='h5' sx={{ p: 2 }}>Message Forwarding</Typography>
          </Box>
          <Grid container spacing={2} gap={4}>
            <Grid item xs={12} sm={6} md={6} lg={3.5}>
              <Box display="flex" alignItems="center" gap={1}>
                <WorkOutlineIcon />
                <TextField variant='outlined' size='small' fullWidth label="Department" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center" gap={1}>
                <AccountBalanceIcon />
                <FormControl fullWidth size="small">
                  <InputLabel id="activity-label">Activity</InputLabel>
                  <Select
                    labelId="activity-label"
                    id="activity-select"
                    value={installation}
                    label="Activity"
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
              </Box>
            </Grid>
          </Grid>
          {/** Add spacing here for levels **/}
          {[1, 2, 3].map(level => (
            <Grid container spacing={2} key={level} sx={{ mt: 1 }}> {/* Add margin top here */}
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box display="flex" alignItems="center" gap={1}>
                  <AccessAlarmIcon />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimeField']} sx={{ padding: 0, margin: 0 }}>
                      <TimeField
                        defaultValue={dayjs('2022-04-17T00:00')}
                        format="HH:mm:ss"
                        size='small'
                        fullWidth
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex" alignItems="center" gap={1}>
                  <ThreePIcon />
                  <TextField variant='outlined' size='small' fullWidth label={`Level ${level}`} />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container p={2}
          sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }} mt={1}>
          <TableContainer component={Paper} sx={{ maxHeight: 320, height: 1000,  overflowY: 'auto'}}>
            <Table aria-label="customized table" stickyHeader>
              <TableHead >
                <TableRow  >
                  <StyledTableCell align='left' style={{width:"10%"}} >Activites</StyledTableCell>
                  <StyledTableCell align='left' style={{width:"10%"}} >Department</StyledTableCell>
                  <StyledTableCell align='left' style={{width:"10%"}} >Level 1</StyledTableCell>
                  <StyledTableCell align='left' style={{width:"10%"}} >Delay</StyledTableCell>
                  <StyledTableCell align='left' style={{width:"10%"}} >Level 2</StyledTableCell>
                  <StyledTableCell align='left' style={{width:"10%"}} >Delay</StyledTableCell>
                  <StyledTableCell align='left' style={{width:"10%"}} >Level 3</StyledTableCell>
                  <StyledTableCell align='left' style={{width:"10%"}} >Delay</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">1</StyledTableCell>
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
      </Grid>
    </>
  );
}

export default OrgMessageForward;
