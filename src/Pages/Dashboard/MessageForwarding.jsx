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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ThreePIcon from '@mui/icons-material/ThreeP';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "@mui/material/Modal";
import { getUsersByOrganization } from "../../apis/Service";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { bgcolor, borderRadius, display } from "@mui/system";
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

const style = {
  position: "relative",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // display:'flex',
  // alignItems:"center",
  // justifyContent:"center",
  // flexDirection:'column',
  borderRadius: "10px",
  // width: "40%",
  bgcolor: "background.paper",
  // bgcolor:"pink",
  border: "1px solid #000",
  boxShadow: 24,
  p: 6,
};

const userDetails = [
  "Username",
  "Position",
  "Department",
  "EmployeeID",
  "Email",
  "Contact no.",
  "Joining Date",
  "User Status",
];

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

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#8C000B",
//     color: theme.palette.common.white,
//     padding: "10px", // Increase padding
//     height: "20px", // Set a specific height
//     fontSize: "16px", // Optionally adjust font size for header
//     lineHeight: "1.5", // Adjust line height if needed
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     padding: "3px",
//   },
// }));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B",
    color: theme.palette.common.white,
    padding: "10px", // Increase padding
    height: "20px", // Set a specific height
    fontSize: "18px", // Optionally adjust font size for header
    lineHeight: "1.5", // Adjust line height if needed
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    textAlign: "center",
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

function MessageForwarding() {
  const [selectedValue, setSelectedValue] = useState("");
  const organizationName = useSelector((state) => state.auth.organization);
  const [usersData, setUsersData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  // Handle opening the modal with user data
  const handleViewUser = (user) => {
    setSelectedUser(user); // Set the selected user's data
    setOpen(true); // Open the modal
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
            {/* <img
              src="https://static.thenounproject.com/png/401262-200.png"
              alt="Img"
              height={"50px"}
              width={"50px"}
            /> */}
            <Box sx={{ display: "flex", alignItems: "center" }} width={"30px"} height={"40px"}>
              <ThreePIcon sx={{ fontSize: "30px" }} />
            </Box>
            <Typography variant="h4">Message User</Typography>
          </Box>
        </Grid>

        {/* <Grid item lg={2} md={6} sm={6} xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel >Select an Option</InputLabel>
            <Select
              value={selectedValue}
              onChange={handleChange}
              label="Select an Option"
              fullWidth
              size="small"
            >
              <MenuItem value={10}>All User</MenuItem>
              <MenuItem value={20}>Active User</MenuItem>
              <MenuItem value={30}>Inactive Users</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}

        <Grid item xs={12} sm={8} md={6} lg={2.4}>
          <Box display="flex" alignItems="center">
            <FormControl fullWidth size="small">
              <InputLabel id="activity-label">Select an Option</InputLabel>
              <Select
                labelId="activity-label "
                id="activity-select "
                label="Select an Option"
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value={10}>All Users</MenuItem>
                <MenuItem value={20}>Active Users</MenuItem>
                <MenuItem value={30}>Inactive Users</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      {/* ------------------Table for Desktop--------------------------------- */}
      <Grid container>
        {/* <Modal
          open={open}
          // onClose={handleClose}
          className="center"
          sx={{ backgroundColor: `rgba(255, 255, 255, 0.5)` }}
        >
          <Grid item lg={6} md={8} sm={8} xs={12} sx={style} >
            <Box
              position="absolute"
              sx={{
                top: "3%",
                right: "-2.8%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <IconButton onClick={handleClose} color=" solid black">
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box textAlign="center" pb={1}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                User Details
              </Typography>
            </Box>
       
            <Grid item lg={12} md={10} xs={11} sm={11} gap={2} display="flex">
              <Grid lg={10} md={8} xs={12} sm={12}>
                {userDetails.map((field, index) => (
                  <Grid
                    item
                    display="flex"
                    // justifyContent="space-around"
                    // spacing={999}
                    // gap={1}
                    p={2}
                  >
                    <Grid
                      lg={4}
                      md={5}
                      sm={12}
                      xs={12}
                      key={index}
                      display={"flex"}
                    >
                      <Typography variant="h6">{field}</Typography>
                    </Grid>
                    <Grid lg={8} md={7} sm={12} xs={12}>
                      <TextField
                        variant="standard"
                        placeholder={field}
                        disabled
                        fullWidth
                        size="small"
                      ></TextField>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid item lg={4} md={4} xs={12} sm={12}>
                <Box
                  className="center"
                  height={"200px"}
                  width={"200px"}
                  border={"1px solid black"}
                  ml={3}
                  mt={3}
                  mb={2}
                >
                  Id Card Photo
                </Box>
                <Box
                  className="center"
                  height={"200px"}
                  width={"200px"}
                  border={"1px solid black"}
                  mt={4}
                  ml={3}
                >
               
                  Passport Photo
                </Box>
              </Grid>
            </Grid>
        
            <Box
              display="flex"
              justifyContent="end"
              // bgcolor='yellowgreen'
              pt={1}
              pb={1}
              // pl={1}
              pr={3}
              gap={3}
              // mr={6}
              // pr={73}

              width={"100%"}
            >
              <Button
                variant="contained"
                sx={{ width: "150px", p: "10px", fontSize: "15px" }}
              >
              
                Delete User
              </Button>
              <Button
                variant="contained"
                sx={{ width: "150px", p: "10px", fontSize: "15px", mr: "12px" }}
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Grid>
        </Modal> */}

        <Modal
          open={open}
          // onClose={handleClose} // Close modal
          className="center"
          sx={{ backgroundColor: `rgba(255, 255, 255, 0.5)` }}
        >
          <Grid item lg={6} md={8} sm={8} xs={12} sx={style}>
            <Box
              position="absolute"
              sx={{
                top: "3%",
                right: "-2.8%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <IconButton onClick={handleClose} color="solid black">
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box textAlign="center" pb={1}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                User Details
              </Typography>
            </Box>
            <Grid item lg={12} md={10} xs={11} sm={11} gap={2} display="flex">
              <Grid item lg={10} md={8} xs={12} sm={12}>
                {userDetails.map((field, index) => (
                  <Grid item display="flex" p={2} key={index}>
                    {console.log(field, ".................")}
                    <Grid lg={4} md={5} sm={12} xs={12} display={"flex"}>
                      <Typography variant="h6">{field}</Typography>
                    </Grid>
                    <Grid lg={8} md={7} sm={12} xs={12}>
                      <TextField
                        variant="standard"
                        // sx={"read-only"}
                        value={
                          field === "Username"
                            ? selectedUser?.username
                            : field === "Position"
                              ? selectedUser?.roleInRTMS
                              : field === "Department"
                                ? selectedUser?.department
                                : field === "EmployeeID"
                                  ? selectedUser?.employeeID
                                  : field === "Email"
                                    ? selectedUser?.email
                                    : field === "Contact no."
                                      ? selectedUser?.contactNumber
                                      : field === "Joining Date"
                                        ? selectedUser?.createdAt
                                        : field === "User Status"
                                          ? selectedUser?.accountStatus
                                          : ""
                        }
                        disabled
                        fullWidth
                        size="small"
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              <Grid item lg={4} md={4} xs={12} sm={12}>
                <Box
                  className="center"
                  height={"200px"}
                  width={"200px"}
                  border={"1px solid black"}
                  ml={3}
                  mt={3}
                  mb={2}
                  component="img"
                  src={selectedUser?.idCardPhoto || ""}
                  alt="ID Card Photo"
                />
                <Box
                  className="center"
                  height={"200px"}
                  width={"200px"}
                  border={"1px solid black"}
                  mt={4}
                  ml={3}
                  component="img"
                  src={selectedUser?.passportPhoto || ""}
                  alt="Passport Photo"
                />
              </Grid>
            </Grid>
            <Box
              // bgcolor={'yellow'}
              display="flex"
              justifyContent="end"
              pt={1}
              pb={1}
              mt={3}
              // pr={3}
              gap={2}
            >
              <Button
                variant="contained"
                sx={{ width: "160px", p: "10px", fontSize: "14px" }}
              >
                Activate User
              </Button>
              <Button
                variant="contained"
                sx={{ width: "160px", p: "10px", fontSize: "14px", mr: "10px" }}
                onClick={handleClose}
              >
                Make Inactivate
              </Button>
            </Box>
          </Grid>
        </Modal>
      </Grid>
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
                <StyledTableCell width={"12.5%"}>User Name</StyledTableCell>
                <StyledTableCell width={"12.5%"}>Positions</StyledTableCell>
                <StyledTableCell width={"12.5%"}>Department</StyledTableCell>
                <StyledTableCell width={"12.5%"}>Employee ID</StyledTableCell>
                <StyledTableCell width={"12.5%"}>Email Add</StyledTableCell>
                <StyledTableCell width={"12.5%"}>Contact No.</StyledTableCell>
                <StyledTableCell width={"12.5%"}>User Status</StyledTableCell>
                <StyledTableCell width={"12.5%"}>View</StyledTableCell>
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
                  <StyledTableCell>{user.department}</StyledTableCell>
                  <StyledTableCell>{user.employeeID}</StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  <StyledTableCell>{user.contactNumber}</StyledTableCell>
                  <StyledTableCell> Active</StyledTableCell>
                  <StyledTableCell>
                    <IconButton
                      sx={{
                        color: "grey",
                        "&:hover": { color: "darkred" },
                        marginRight: "5px",
                      }}
                      onClick={() => handleViewUser(user)}
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
