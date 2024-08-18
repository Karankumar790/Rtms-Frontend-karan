import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// -------------------Table Function-------------------------
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  // [`&.${tableCellClasses.body}`]: {
  //   fontSize: 14,
  // },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ManageAsset() {
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const [add, setAdd] = useState([]);

  const handleAdd = () => {
    const value = inputRef?.current.value;
    const value1 = inputRef1?.current.value;
    const value2 = inputRef2?.current.value;
    const value3 = inputRef3?.current.value;

    // Add the values as an object to the state array
    setAdd([...add, { department: value, head: value1, email: value2, phone: value3 }]);

    // Clear the input fields after adding
    inputRef.current.value = null;
    inputRef1.current.value = null;
    inputRef2.current.value = null;
    inputRef3.current.value = null;
  }

  return (
    <div>
      <Paper>
        <Grid container spacing={2} p={2}>
          {/* -------------Input field------------------ */}
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <Grid item sx={{ display: 'flex', flexDirection: 'row' }} gap={1}>
              <Typography variant="h4">Asset: </Typography>
              <TextField variant="outlined" fullWidth />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">Address 1</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">Address 2</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">City</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">State</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">Country</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">Pin Code</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">Phone</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">Fax</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">Latitude</Typography>
                <TextField variant="outlined" fullWidth value={""} />
              </Grid>
            </Grid>
          </Grid>
          {/* /-------------Image-------------------- */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src="https://media.istockphoto.com/id/959381934/photo/sunset-over-pumpjack-silhouette-with-copy-space.jpg?s=612x612&w=0&k=20&c=fcyH9ZVieEwbLHk9LkjxdX7vveS56TFqRbUMV6xpRcA=" alt="photo" style={{
              width: '100%', // Set the image to take the full width of its container
              height: 'auto', // Maintain aspect ratio
              border: '2px solid black',
              objectFit: 'contain', // Contain the image within its bounds without stretching
            }} />
          </Grid>
        </Grid>
      </Paper>
      {/* ------------Input textfield for table------------------- */}
      <Card  sx={{ my:2 }}>
        <CardContent>
          <Typography variant="h5"> Add Department Information</Typography>
          <Grid container spacing={2} mt={0.1}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Department" inputRef={inputRef} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Head of Department" inputRef={inputRef1} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Email" inputRef={inputRef2} fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Phone" inputRef={inputRef3} fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button variant="contained" onClick={handleAdd}>
                Add Department
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* -------------------------Table-------------------------- */}
      <Grid container>
        <Tabs>
          <TabList>
            <Tab>
              <Typography fontSize={'large'}>Departments</Typography>
            </Tab>
            <Tab>
              <Typography fontSize={'large'}>Permissions</Typography>

            </Tab>
          </TabList>
          <TabPanel>
            <TableContainer sx={{ border: "1px solid black", overflowX: "auto" }}>
              <Table aria-label="customized table" className="responsive-table" >
                <TableHead >
                  <TableRow  >
                    <StyledTableCell sx={{ fontSize: '18px' }} align="left">Department</StyledTableCell>
                    <StyledTableCell sx={{ fontSize: '18px' }} align="left">Head Of Department</StyledTableCell>
                    <StyledTableCell sx={{ fontSize: '18px' }} align="left">Email</StyledTableCell>
                    <StyledTableCell sx={{ fontSize: '18px' }} align="left">Mobile Number</StyledTableCell>
                    {/* <StyledTableCell sx={{fontSize:'18px'}} align="left">Well number</StyledTableCell> */}
                    {/* <StyledTableCell sx={{fontSize:'18px'}} align="left">Description</StyledTableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {add.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>
                        <TextField variant="filled" value={row.department} fullWidth />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField variant="filled" value={row.head} fullWidth />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField variant="filled" value={row.email} fullWidth />
                      </StyledTableCell>
                      <StyledTableCell>
                        <TextField variant="filled" value={row.phone} fullWidth />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
              <TableContainer sx={{ border: "1px solid black", overflowX: "auto" }}>
                <Table aria-label="customized table" className="responsive-table">
                  <TableHead >
                    <TableRow>
                      <StyledTableCell>Permission</StyledTableCell>
                      <StyledTableCell align="left">Data/TIme</StyledTableCell>
                      <StyledTableCell align="left">Well Location</StyledTableCell>
                      <StyledTableCell align="left">Well Installation</StyledTableCell>
                      <StyledTableCell align="left">Well number</StyledTableCell>
                      <StyledTableCell align="left">Description</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row"> Notification No.</StyledTableCell>
                      <StyledTableCell>25kalori</StyledTableCell>
                      <StyledTableCell>shyam</StyledTableCell>
                      <StyledTableCell>Ramu singh</StyledTableCell>
                      <StyledTableCell>225</StyledTableCell>
                      <StyledTableCell>44555</StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
          </TabPanel>
        </Tabs>
      </Grid>
    </div>
  );
}

export default ManageAsset;
