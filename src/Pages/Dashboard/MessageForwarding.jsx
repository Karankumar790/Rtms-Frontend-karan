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
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUsersByOrganization } from "../../apis/Service";
// ----------------------Table for Mobile------------------------------

const StyledGridItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[100],
}));

const StyledContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: "white",
}));

let data = {
  "Well No": "1",
  Location: "New York",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Tata = {
  "Well No": "2",
  Location: "Delhi",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Mata = {
  "Well No": "3",
  Location: "UP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

let Sata = {
  "Well No": "4",
  Location: "MP",
  Installation: "01/01/2021",
  Latitude: "40.7128 N",
  Longitude: "74.0060 W",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px", // Increase padding
    height: "20px", // Set a specific height
    fontSize: "16px", // Optionally adjust font size for header
    lineHeight: "1.5", // Adjust line height if needed
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
  padding: "5px",
}));

function createData(name) {
  return { name };
}

const rows = [
  createData("1"),
  createData("2"),
  createData("3"),
  createData("4"),
  createData("5"),
  createData("6"),
  createData("7"),
  createData("8"),
];

function MessageForwarding() {
  const [selectedValue, setSelectedValue] = useState("");
  const organizationName = useSelector((state) => state.auth.organization);
  const [usersData, setUsersData] = useState([]);

  const fetchAllUserData = async () => {
    try {
      const response = await getUsersByOrganization(organizationName);
      if (response.success) {
        setUsersData(response.data);
      } else {
        toast.error(response.message || "something went wrong");
      }
      console.log(usersData, "all user data iiiiiiiiiiii");
    } catch (error) {
      console.log(error);
      toast.error(error, "error occured");
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    fetchAllUserData();
  }, [organizationName]);

  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between" }}
        pt={2}
        paddingBottom={2}
      >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Box display={"flex"} gap={1}>
            <img
              src="https://static.thenounproject.com/png/401262-200.png"
              alt="Img"
              height={"50px"}
              width={"50px"}
            />
            <Typography variant="h4">Message User</Typography>
          </Box>
        </Grid>

        <Grid item lg={3} md={6} sm={6} xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="dropdown-label">Select an Option</InputLabel>
            <Select
              labelId="dropdown-label"
              value={selectedValue}
              onChange={handleChange}
              label="Select an Option"
              fullWidth
              size="small"
            >
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* ------------------Table for Desktop--------------------------------- */}
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
                <StyledTableCell align="left"  width={"12.5%"}>User Name</StyledTableCell>
                <StyledTableCell align="left" width={"12.5%"}>Positions</StyledTableCell>
                <StyledTableCell align="left" width={"12.5%"}>Department</StyledTableCell>
                <StyledTableCell align="left" width={"12.5%"}>Employee ID</StyledTableCell>
                <StyledTableCell align="left" width={"12.5%"}>Email Add</StyledTableCell>
                <StyledTableCell align="left" width={"12.5%"}>Contact No.</StyledTableCell>
                <StyledTableCell align="left" width={"12.5%"}>User Status</StyledTableCell>
                <StyledTableCell align="left" width={"12.5%"}>View</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData?.map((user) => (
                <StyledTableRow key={user._id}>
                  <StyledTableCell component="th" scope="row">
                    {user.username}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.roleInRTMS}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {user.department}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {user.employeeID}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.email}</StyledTableCell>
                  <StyledTableCell align="left">
                    {user.contactNumber}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {" "}
                    Active
                  </StyledTableCell>
                  <StyledTableCell align="left">
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

      {/* ---------------------------Table for Mobile------------------------------------- */}

      <Grid
        container
        md={12}
        lg={12}
        sm={12}
        xs={12}
        sx={{ display: { sm: "block", xs: "block", md: "none", lg: "none" } }}
      >
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600 }}>
          {/* Table for mobile display */}
          <Grid container mt={2} direction="column">
            {Object.keys(data).map((header, index) => (
              <Grid container key={index}>
                {/* Header Section */}
                <StyledGridItem item xs={4}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
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
          {/* Repeat for Tata, Mata, Sata */}
          {/* Similar structure for Tata, Mata, Sata */}
        </Paper>
      </Grid>
    </div>
  );
}

export default MessageForwarding;
