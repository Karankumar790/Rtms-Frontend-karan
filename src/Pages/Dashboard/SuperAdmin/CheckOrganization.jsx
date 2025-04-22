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
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { getAllOwnersByAdmin } from "../../../apis/Service";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width:"30%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

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
  const [owners, setOwners] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const [open, setOpen] = React.useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleViewClick = (owner) => {
    setSelectedOrganization(owner);
    handleOpen();
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
    <div
      style={{
        filter: open ? "blur(8px)" : "none",
        transition: "filter 0.1s ease",
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between" }}
        pt={2}
        paddingBottom={2}
      >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box display={"flex"} gap={1} p={2}>
            <AccountBalanceIcon sx={{ height: "37px", width: "40px" }} />
            <Typography variant="h4">Customers</Typography>
          </Box>
        </Grid>

        {/* Dropdown */}
        <Grid item lg={2} md={2} sm={6} xs={12} p={2}>
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
      <Grid
        container
        mt={2}
        md={12}
        lg={12}
        sm={5}
        xs={4}
        sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
      >
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 320, height: 600, overflow: "auto" }}
        >
          <Table aria-label="customized table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left" width="11%">
                  Organization UId
                </StyledTableCell>

                <StyledTableCell align="left" width="12%">
                  Organization Name
                </StyledTableCell>
                <StyledTableCell align="left" width="11%">
                  Owner Name
                </StyledTableCell>
                <StyledTableCell align="left" width="11%">
                  Email
                </StyledTableCell>
                <StyledTableCell align="left" width="11%">
                  Mobile
                </StyledTableCell>
                <StyledTableCell align="left" width="11%">
                  Created On
                </StyledTableCell>
                <StyledTableCell align="left" width="11%">
                  Expiring On
                </StyledTableCell>
                <StyledTableCell align="left" width="11%">
                  Status
                </StyledTableCell>
                <StyledTableCell align="left" width="11%">
                  View
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {owners.map((owner) => (
                <StyledTableRow key={owner._id}>
                  <StyledTableCell align="left">1</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {owner.organizationName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {owner.username}
                  </StyledTableCell>
                  <StyledTableCell align="left">{owner.email}</StyledTableCell>
                  <StyledTableCell align="left">
                    {owner.contactNumber}
                  </StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left">Active</StyledTableCell>
                  <StyledTableCell align="left">
                    <IconButton
                      sx={{
                        color: "grey",
                        "&:hover": { color: "darkred" },
                        marginRight: "5px",
                      }}
                      onClick={() => handleViewClick(owner)}
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

      <Modal
        open={open}
      >
        <Box borderRadius={3} sx={style}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" component="h2" sx={{fontStyle:"oblique"}}>
              Organization Details
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            {selectedOrganization && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    mb: 3,
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography variant="h5" fontWeight={700} color={"brown"}>{selectedOrganization.organizationName}</Typography>
                  {selectedOrganization.organizationLogo && (
                    <img
                      src={selectedOrganization.organizationLogo}
                      alt="Organization Logo"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[ 
                    { label: "Organization UID :", value: "1" },
                    { label: "UserName :", value: selectedOrganization.username },
                    { label: "Subtitle Name :", value: ""},
                    { label: "Email :", value: selectedOrganization.email },
                    { label: "Phone :", value: selectedOrganization.contactNumber },
                    { label: "Address :", value: "" },
                    { label: "City :", value: "" },
                    { label: "State :", value: "" },
                    { label: "Country :", value: "" },
                    { label: "Pincode :", value: "" },
                    { label: "Created On :", value: "" },
                    { label: "Updated On :", value: "" },
                    { label: "Expiring On :", value: "" },
                    { label: "Active Plan :", value: "" }
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      <Typography variant="h6" width={"250px"}>
                        {item.label}
                      </Typography>
                      <TextField
                        size="small"
                        value={item.value}
                        disabled
                        fullWidth
                      />
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
          <Box mt={2} gap={2} sx={{ display: "flex", justifyContent:"end"  }}>
            <Button variant="contained" color="primary" size="large" onClick={handleClose}>
              Enable
            </Button>
            <Button variant="contained" color="primary" size="large" onClick={handleClose}>
              Disable
            </Button>
            <Button variant="contained" color="primary" size="large" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default CheckOrganization;
