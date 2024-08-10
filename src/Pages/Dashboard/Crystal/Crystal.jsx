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
import Chart from 'react-apexcharts';
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
  createData('3'),
  createData('4'),
  createData('5'),
  createData('3'),
  createData('4'),
  createData('5'),
];







function Monitor() {
  const [age, setAge] = React.useState('');
  const [installation, setInstallation] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [parameters, setParameters] = React.useState('');
  const [report, setReport] = React.useState('');
  const [resolution, setResolution] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleChangeParameters = (event) => {
    setParameters(event.target.value);
  };

  const handleChangeReport = (event) => {
    setReport(event.target.value);
  };
  const handleChangeResolution = (event) => {
    setResolution(event.target.value);
  };


  const lineChartOptions = {
    chart: {
      type: 'line'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    }
  };

  const lineChartSeries = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70]
    }
  ];

  return (
    <PageContainer>
      <Grid Container spacing={2}>
        <Grid container  sx={{ display: 'flex',flexDirection:'column' }}>
          <Grid container  sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
            <Grid item sm={6} md={4} xs={12} lg={3}>
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
            <Grid item sm={6} md={4} xs={12} lg={3}>
              <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                <InputLabel id="demo-select-large-label">Well Installation</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-large"
                  value={installation}
                  label="Well Installation"
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
            <Grid item sm={6} md={4} xs={12} lg={3}>
              <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
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
            <Grid item sm={6} md={4} xs={12} lg={3}>
              <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                <InputLabel id="demo-select-large-label">Parameters</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-large"
                  value={parameters}
                  label="Parameters"
                  onChange={handleChangeParameters}
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
          {/* ----------------Input Field 2-------------------- */}
          <Grid container  sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
            <Grid item sm={6} md={4} xs={12} lg={3} >
              <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                <InputLabel id="demo-select-large-label">Report Type</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-large"
                  value={report}
                  label="Report Type"
                  onChange={handleChangeReport}
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
            <Grid item sx={{width:"10px"}}sm={6} md={4} xs={12} lg={3} mt={1} pl={1} >
              <Input
                type="date"
                sx={{width:'250px',height:'40px'}}
                slotProps={{
                  input: {
                    min: '2001-02-16',
                    max: '2024-08-07',
                  },
                }}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12} lg={3} mt={1} pl={1} >
              <Input
                type="date"
                sx={{width:'250px',height:'40px' }}

                slotProps={{
                  input: {
                    min: '2001-02-16',
                    max: '2024-08-10',
                  },
                }}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12} lg={3}>
              <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                <InputLabel id="demo-select-large-label">Resolution</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-large"
                  value={resolution}
                  label="Resolution"
                  onChange={handleChangeResolution}
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
        </Grid>
        {/* ----------------Table--------------------------- */}
        <Grid container   mt={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}  >
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
                      <StyledTableCell align="left">1</StyledTableCell>
                      <StyledTableCell align="left">5/6/2024</StyledTableCell>
                      <StyledTableCell align="left">gbz</StyledTableCell>
                      <StyledTableCell align="left">yes</StyledTableCell>
                      {/* <StyledTableCell align="left">1</StyledTableCell> */}
                      <StyledTableCell align="left">all good</StyledTableCell>


                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          {/* ---------------chart---------------------------- */}
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <Chart
              options={lineChartOptions}
              series={lineChartSeries}
              type="line"
              height={650}
            />
          </Grid>
        </Grid>
      </Grid>
    </PageContainer >
  )
}

export default Monitor