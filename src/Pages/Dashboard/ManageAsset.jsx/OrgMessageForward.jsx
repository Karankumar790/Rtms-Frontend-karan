import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import dayjs from "dayjs";
import { Box } from "@mui/system";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EmailIcon from "@mui/icons-material/Email";
import Person3Icon from "@mui/icons-material/Person";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#8C000B", // Customize background color
    color: theme.palette.common.white, // Text color
    padding: "15px", // Custom padding
    height: "20px", // Specific height for the header row
    fontSize: "16px", // Font size for the header
    position: "sticky", // Sticky positioning
    zIndex: 1, // Ensure it stays above the rows
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name) {
  return { name };
}

const rows = [];

function OrgMessageForward() {
  const [installation, setInstallation] = useState("");

  const handleChangeInstallation = (event) => {
    setInstallation(event.target.value);
  };

  return (
    <>
      <Grid container p={2} component={Paper} boxShadow="4">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box display="flex" sx={{ pt: 2, pb: 2 }} gap={1}>
            <EmailIcon sx={{ mt: "2px" }} />
            <Typography variant="h5">Notification Forwarding</Typography>
          </Box>
          <Grid container alignItems="center" spacing={1}>
            {/* Notification Dropdown */}
            <Grid item xs={12} sm={2} md={2} lg={1.6} >
              <Box display="flex" alignItems="center" gap={1}>
                <AccountBalanceIcon />
                <FormControl fullWidth size="small">
                  <InputLabel id="activity-label">Department</InputLabel>
                  <Select
                    labelId="activity-label"
                    id="activity-select"
                    value={installation}
                    label="Activity"
                    onChange={handleChangeInstallation}
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    <MenuItem value={10}>Well</MenuItem>
                    <MenuItem value={20}>Router</MenuItem>
                    <MenuItem value={30}>Device</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Levels */}
            {[1, 2, 3].map((level) => (
              <Grid
                item
                xs={12}
                sm={2}
                md={2}
                lg={3.2}
                key={level}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                {/* TimeField */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{ flex: 1 }}
                >
                  <AccessAlarmIcon />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["TimeField"]}
                      sx={{ padding: 0, margin: 0, flex: 1 }}
                    >
                      <TimeField
                        defaultValue={dayjs("2022-04-17T00:00")}
                        format="HH:mm:ss"
                        size="small"
                        fullWidth
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>

                {/* Level TextField */}
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{ flex: 1 }}
                >
                  <Person3Icon />
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    label={`Level ${level}`}
                  />
                </Box>
              </Grid>
            ))}

            {/* Add Button */}
            <Grid
              item
              xs={12}
              sm={2}
              md={2}
              lg={0.8}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                variant="contained"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "green",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                }}
              >
                ADD
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* --------------------------------------------TABLE-------------------------------------- */}
        <Grid
          container
          // p={1}
          sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
          mt={1}
        >
          <TableContainer
            sx={{ maxHeight: 320, height: 1000, overflowY: "auto" }}
          >
            <Table aria-label="customized table" stickyHeader>
              {/* <TableHead>
                <TableRow>
                  <StyledTableCell align="left" style={{ width: "10%" }}>
                    Notification
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: "10%" }}>
                    Delay
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: "10%" }}>
                    Level 1
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: "10%" }}>
                    Delay
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: "10%" }}>
                    Level 2
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: "10%" }}>
                    Delay
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ width: "10%" }}>
                    Level 3
                  </StyledTableCell>
                </TableRow>
              </TableHead> */}
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default OrgMessageForward;
