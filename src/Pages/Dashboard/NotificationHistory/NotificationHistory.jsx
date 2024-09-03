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

// -------------------------------Table for  Moblie --------------------------
const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: 'white',
}));

let data = {
  "Well No": "1",
  "Location": "New York",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};

let Tata = {
  "Well No": "2",
  "Location": "Delhi",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};

let Mata = {
  "Well No": "3",
  "Location": "UP",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};

let Sata = {
  "Well No": "4",
  "Location": "MP",
  "Installation": "01/01/2021",
  "Latitude": "40.7128 N",
  "Longitude": "74.0060 W"
};
// ------------------------Table for Desktop-----------------------------   


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



function NotificationHistory() {
  const [age, setAge] = React.useState('');
  const [notification, setNotification] = React.useState('');
  const [installation, setInstallation] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeNotification = (event) => {
    setNotification(event.target.value);
  };

  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };
  return (
    <div>
      <Grid container>
        <Typography variant='h4'>Notification History</Typography>
      </Grid>
      <Grid container spacing={3} pt={1} >
        <Grid item xs={12} sm={8} md={6} lg={3} >
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Notification No.</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={notification}
              label="Well Location"
              onChange={handleChangeNotification}
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
        <Grid item xs={12} sm={8} md={6} lg={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Well Installation</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-large"
              value={installation}
              label="Well Location"
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
          <FormControl fullWidth size="small">
            <InputLabel id="demo-select-large-label">Well Number</InputLabel>
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
      {/* <Grid container mt={3}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead >
              <TableRow  >
                <StyledTableCell sx={{fontSize:'18px'}}>Notification No.</StyledTableCell>
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
      </Grid> */}

<Grid container md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block"}}} mt={1}>
        <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: 'auto'}}>
          <Table aria-label="customized table" stickyHeader>
            <TableHead >
              <TableRow  >
                <StyledTableCell sx={{ fontSize: '18px' }} align='left'>Complain No.</StyledTableCell>
                <StyledTableCell sx={{ fontSize: '18px' }} align="left">Data/Time</StyledTableCell>
                <StyledTableCell sx={{ fontSize: '18px' }} align="left">Notification No.</StyledTableCell>
                <StyledTableCell sx={{ fontSize: '18px' }} align="left">Raiser Name</StyledTableCell>
                <StyledTableCell sx={{ fontSize: '18px' }} align="left">Taker Name</StyledTableCell>
                <StyledTableCell sx={{ fontSize: '18px' }} align="center">Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" sx={{ width: '13%' }}> 
                    {row.name}
                    
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ width: '13%' }}>5/6/2024</StyledTableCell>
                  <StyledTableCell align="left" sx={{ width: '13%' }}></StyledTableCell>
                  <StyledTableCell align="left" sx={{ width: '13%' }}></StyledTableCell>
                  <StyledTableCell align="left" sx={{ width: '13%' }}></StyledTableCell>
                  <StyledTableCell align="left" sx={{ width: '25%' }}></StyledTableCell>


                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid container md={12}
        lg={12}
        sm={12}
        xs={12}
        sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}>
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
          <Grid container mt={2} direction="column">
            {Object.keys(data).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{data[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Tata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{Tata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Mata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{Mata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
          {/* ----------------------Dreak---------------------------------- */}
          <Grid container mt={2} direction="column">
            {Object.keys(Sata).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {header}
                  </Typography>
                </StyledGridItem>
                {/* Content Section */}
                <StyledContent item xs={8}>
                  <Typography variant="body1">{Sata[header]}</Typography>
                </StyledContent>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}

export default NotificationHistory
