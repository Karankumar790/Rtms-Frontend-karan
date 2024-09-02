import { Button, Card, CardContent, Grid, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
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
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

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

  const steps = ["Head of Department", "Manager", "Team Leader"];

  return (
    <div className="bg-color">
      <Paper sx={{bgcolor:'#d1dcf0'}}>
        <Grid container gap={3} p={2}>
          <Typography variant="h4">Organization </Typography>

          <Grid container spacing={2} >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">Asset </Typography>
              <TextField variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">Address Line 1</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">City</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">State</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">Country</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">Pin Code</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">Phone</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Typography variant="h6">Fax</Typography>
              <TextField variant="outlined" fullWidth value={""} />
            </Grid>

          </Grid>

        </Grid>
      </Paper>
      {/* ------------Input textfield for table------------------- */}
      <Card sx={{ my: 2, bgcolor:'#d1dcf0' }}>
        <CardContent>
          <Typography variant="h5"> Add Department</Typography>
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
              <Button variant="contained" className="btn-primary " onClick={handleAdd}>
                Add Department
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* ----------------------Postion-------------------------------- */}

      <Card sx={{ my: 2, bgcolor:'#d1dcf0' }}>
        <CardContent>
          <Typography variant="h5"> Add Postion</Typography>
          <Grid container spacing={2} mt={0.1}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Head of Department" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Manager" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Team Leader" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField variant="outlined" label="Employee" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button variant="contained"  className="btn-primary ">
                Postion
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* -----------------------Approval chain------------------------- */}

      <Card sx={{ my: 2, bgcolor:'#d1dcf0' }} >

        <Grid item xs={12} sm={12} md={12}>
          <Box >
            <Stepper
              activeStep={1}
              alternativeLabel
              sx={{
                fontSize: "500px",
                padding: "10px",
                "& .MuiStepConnector-line": {
                  marginTop: "12px",
                  marginRight: "10px",
                  marginLeft: "10px",
                },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      "& .MuiStepIcon-root": {
                        width: 50,
                        height: 50,
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Grid item xs={12} sm={12} md={12} mb={2} sx={{ display: "flex", justifyContent: "center" }} >
            <Box
              sx={{
                // width: "70%",
                width:'100%',
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">Aproval Status:</Typography>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained"  className="btn-primary "  >
                  Close
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Card>
      {/* -------------------------Table-------------------------- */}
      <Grid container>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <Tabs>
            <TabList>
              <Tab>
                <Typography fontSize={'small'}>Departments</Typography>
              </Tab>
              <Tab>
                <Typography fontSize={'small'}>Permissions</Typography>

              </Tab>
            </TabList>
            <TabPanel>
              <TableContainer>
                <Table aria-label="customized table">
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
                      <StyledTableRow key={`table - header - ${index}`}>
                        <StyledTableCell> {row.department} </StyledTableCell>
                        <StyledTableCell> {row.head}</StyledTableCell>
                        <StyledTableCell>{row.email}</StyledTableCell>
                        <StyledTableCell> {row.phone}</StyledTableCell>
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
      </Grid>
    </div >
  );
}

export default ManageAsset;
