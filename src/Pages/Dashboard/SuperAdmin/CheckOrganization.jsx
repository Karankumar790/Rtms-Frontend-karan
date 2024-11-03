import React, { useEffect, useState } from "react";
import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Typography,
  Select,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { getAllOwnersByAdmin } from "../../../apis/Service";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px",
    height: "20px",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "3px",
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

function CheckOrganization() {
  const [owners, setOwners] = useState([]); // State to hold owners data
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const data = await getAllOwnersByAdmin(); 
        setOwners(data.data.owners);
      } catch (error) {
        console.error("Error fetching owners:", error);
      }
    };

    fetchOwners();
  }, []);

  return (
    <div>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }} pt={2} paddingBottom={2}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box display={"flex"} gap={1} p={2}>
            <AccountBalanceIcon sx={{ height: '37px', width: '40px' }} />
            <Typography variant="h4">Customers</Typography>
          </Box>
        </Grid>

        {/* Dropdown */}
        <Grid item lg={3} md={6} sm={6} xs={12} p={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="dropdown-label">Customers</InputLabel>
            <Select
              labelId="dropdown-label"
              value={selectedValue}
              onChange={handleChange}
              label="Customers"
              fullWidth
              size="small"
            >
              <MenuItem value={10}>Active Customer</MenuItem>
              <MenuItem value={20}>Inactive Customer</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Table for Desktop */}
      <Grid container mt={2} md={12} lg={12} sm={5} xs={4} sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}>
        <TableContainer component={Paper} sx={{ maxHeight: 320, height: 600, overflow: "auto" }}>
          <Table aria-label="customized table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Organization Name</StyledTableCell>
                <StyledTableCell align="left">User Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Mobile</StyledTableCell>
                <StyledTableCell align="left">Created On</StyledTableCell>
                <StyledTableCell align="left">Expiring On</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="center">View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {owners.map((owner) => (
                <StyledTableRow key={owner._id}>
                  <StyledTableCell component="th" scope="row">
                    {owner.organizationName}
                  </StyledTableCell>
                  <StyledTableCell align="left">{owner.username}</StyledTableCell>
                  <StyledTableCell align="left">{owner.email}</StyledTableCell>
                  <StyledTableCell align="left">{owner.contactNumber}</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left">Active</StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      sx={{
                        color: "grey",
                        "&:hover": { color: "darkred" },
                        marginRight: "5px",
                      }}
                    >
                      <VisibilityIcon fontSize="large" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Mobile Table Section (same structure as before) */}
      {/* Add mobile table rendering if necessary */}
    </div>
  );
}

export default CheckOrganization;



// {/* <Grid
//         container
//         md={12}
//         lg={12}
//         sm={12}
//         xs={12}
//         sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}
//       >
//         <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
//           {/* Table for mobile display */}
//           <Grid container mt={2} direction="column">
//             {Object.keys(data).map((header, index) => (
//               <Grid container key={index}>
//                 {/* Header Section */}
//                 <StyledGridItem item xs={4}>
//                   <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                     {header}
//                   </Typography>
//                 </StyledGridItem>
//                 {/* Content Section */}
//                 <StyledContent item xs={8}>
//                   <Typography variant="body1">{data[header]}</Typography>
//                 </StyledContent>
//               </Grid>
//             ))}
//           </Grid>
//           {/* Repeat for Tata, Mata, Sata */}
//           {/* Similar structure for Tata, Mata, Sata */}
//         </Paper>
//       </Grid> */}