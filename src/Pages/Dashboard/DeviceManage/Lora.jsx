import { Button, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// -------------------------New Born Table--------------------------------------------

const StyleTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyleTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CreateData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const row = [
  CreateData("1"),
  CreateData("2"),
  CreateData("3"),
  CreateData("4"),
];

function Lora() {
  return (
    <div>
       {/* ----------------------------------Table and Inputs Field-------------------------------- */}
       <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* ------------------------------Table--------------------------------------------- */}
        <Grid
          item
          lg={1.6}
          md={6}
          sm={8}
          xs={12}
          sx={{ border: "1px solid black" }}
        >
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 620, overflow: "auto" }}
          >
            <Table aria-label="customized table" stickyHeader>
              <TableHead>
                <TableRow>
                  <StyleTableCell sx={{ fontSize: "18px" }}>
                    Device Name
                  </StyleTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <StyleTableRow key={row.name}>
                    <StyleTableCell component="th" scope="row">
                      {row.name}
                    </StyleTableCell>
                  </StyleTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* ------------------------------Inputs-------------------------------------------- */}
        <Grid
          item
          lg={10.2}
          md={6}
          sm={8}
          xs={12}
          sx={{ border: "1px solid black" }}
        >
          <Grid container spacing={3} p={1}>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Device Name</Typography>
              <TextField variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Cloud ID</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">LoRa ID</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Landmark</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Lattitude</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Longitude</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Scan Timer</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Publish Code</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Typography variant="h6">Subscribe Code</Typography>
              <TextField variant="outlined" size="small" fullWidth value={""} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* --------------------------------Button--------------------------------------------- */}
      <Grid
        container
        mt={2}
        display={"flex"}
        justifyContent={"end"}
        gap={1}
        flexDirection={{ xs: "row" }}
      >
        <Box>
          <Link to="/dashboard/AddDevice" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green", // Change button color to green
                "&:hover": {
                  backgroundColor: "darkgreen", // Optional: Change color on hover
                },
                fontSize: "16px",
                width: "150px",
              }}
            >
              Add Device
            </Button>
          </Link>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green", // Change button color to green
              "&:hover": {
                backgroundColor: "darkgreen", // Optional: Change color on hover
              },
              fontSize: "16px",
              width: "150px",
            }}
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green", // Change button color to green
              "&:hover": {
                backgroundColor: "darkgreen", // Optional: Change color on hover
              },
              fontSize: "16px",
              width: "150px",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Grid>
    </div>
  )
}

export default Lora
