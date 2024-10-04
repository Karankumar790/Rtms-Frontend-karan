import React, { useRef, useState } from 'react';
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";

// -------------------Styled Components-------------------------
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: '10px',
    height: '20px',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// -------------------Main Component-------------------------
function OtherTable() {
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const [add, setAdd] = useState([]);
  const [parameter, setParameter] = useState(""); // Added parameter state

  const handleChangeParameter = (event) => {
    setParameter(event.target.value);
  };

  const handleAdd = () => {
    const value = inputRef?.current.value;
    const value1 = inputRef1?.current.value;
    const value2 = inputRef2?.current.value;
    const value3 = inputRef3?.current.value;

    setAdd([...add, { department: value, head: value1, email: value2, phone: value3 }]);

    inputRef.current.value = null;
    inputRef1.current.value = null;
    inputRef2.current.value = null;
    inputRef3.current.value = null;
  };

  const rows = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
  ];

  return (
    <div style={{height:'100%',width:'100%'}}>
      <Card sx={{ my: 1 }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* ------------------------ADD DEPARTMENT------------------------------ */}
            <Grid item xs={12} sm={3.5} md={3.5} lg={2.5} gap={1} display='flex' flexDirection={'column'}>
              <Box display='flex' gap={1}>
                <TextField variant="outlined" size="small" label="Add Location" inputRef={inputRef} fullWidth />
                <Button variant='contained' onClick={handleAdd} size="small"
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': { backgroundColor: 'darkgreen' },
                  }}>
                  ADD
                </Button>
              </Box>
              {/* -------------------------------Table-------------------------------- */}
              {/* <Grid container>
                <TableContainer component={Paper} sx={{ maxHeight: 300, overflow: 'auto' }}>
                  <Table stickyHeader aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ fontSize: '18px', width: '15%' }}>Locations</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px', width: '10%' }}></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">1</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid> */}
            </Grid>

            {/* ------------------------ADD POSITION------------------------------ */}
            <Grid item xs={12} sm={3.5} md={3.5} lg={3.5} gap={1} display='flex' flexDirection={'column'}>
              <Box display='flex' gap={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-select-large-label">Locations</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-large"
                      value={parameter}
                      label="Department"
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value=""><em>All</em></MenuItem>
                      <MenuItem value={1}>Software</MenuItem>
                      <MenuItem value={2}>Hardware</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <TextField variant="outlined" size="small" label=" Add Installation" inputRef={inputRef} fullWidth />
                <Button variant='contained' onClick={handleAdd} size="small"
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': { backgroundColor: 'darkgreen' },
                  }}>
                  ADD
                </Button>
              </Box>
              {/* ----------------------------------Table 2---------------------------------- */}
              {/* <Grid container>
                <TableContainer component={Paper} sx={{ maxHeight: 300, overflow: 'auto' }}>
                  <Table stickyHeader aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ fontSize: '18px', width: '25%' }}>Locations</StyledTableCell>
                        <StyledTableCell sx={{ fontSize: '18px', width: '25%' }}>Installation</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="left">1</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid> */}
            </Grid>

            {/* ------------------------APPROVAL CHAIN------------------------------ */}
            <Grid item xs={12} sm={5} md={5} lg={6} gap={1} display='flex' flexDirection={'column'}>
              <Box display='flex' gap={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-select-large-label">Locations</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-large"
                      value={parameter}
                      label="Department"
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value=""><em>All</em></MenuItem>
                      <MenuItem value={1}>Software</MenuItem>
                      <MenuItem value={2}>Hardware</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <TextField variant="outlined" label="Installation" size="small" fullWidth />
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-select-large-label">Well Type</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-large"
                      value={parameter}
                      label="Department"
                      onChange={handleChangeParameter}
                    >
                      <MenuItem value=""><em>All</em></MenuItem>
                      <MenuItem value={1}>Self-flowing</MenuItem>
                      <MenuItem value={2}>pugger well</MenuItem>
                    </Select>
                  </FormControl>
                <TextField variant="outlined" label="Well Number" size="small" fullWidth />
                <Button variant='contained' onClick={handleAdd} size="small"
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': { backgroundColor: 'darkgreen' },
                  }}>
                  ADD
                </Button>
              </Box>

              {/* ----------------------------------Table 3---------------------------------- */}
              {/* <Grid container>
                <TableContainer component={Paper} sx={{ maxHeight: 300, overflow: 'auto' }}>
                  <Table stickyHeader aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ fontSize: '18px', width: '15%' }}>Location</StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: '15%' }}>Installation</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontSize: '18px', width: '15%' }}>Well Type</StyledTableCell>
                        <StyledTableCell align="left" sx={{ fontSize: '18px', width: '15%' }}>Well Number</StyledTableCell>
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
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid> */}
            </Grid>

            {/* ------------------------BUTTON BOX------------------------------ */}
            {/* <Grid container mt={2} display={"flex"} justifyContent={"end"} gap={1} flexDirection={{ xs: 'row' }}>
              <Box>
                <Button variant='contained'
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': { backgroundColor: 'darkgreen' },
                    fontSize: '16px',
                    width: '150px',
                  }}>
                  SAVE
                </Button>
              </Box>
              <Box>
                <Button variant='contained'
                  sx={{
                    backgroundColor: 'green',
                    '&:hover': { backgroundColor: 'darkgreen' },
                    fontSize: '16px',
                    width: '150px',
                  }}>
                  EDIT
                </Button>
              </Box>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default OtherTable;
