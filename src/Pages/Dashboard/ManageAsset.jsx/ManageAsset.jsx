import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import AssetsIcon from "@mui/icons-material/AccountBalance";
import { useSelector } from "react-redux";
import {
  Edit as EditIcon,
  DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import {
  addDepartment,
  departmentDropdown,
  addPosition,
  addApprovalChain,
  getPosition,
  getApprovalChain,
  organizationAddData,
  getOrganizationData,
  UpdateDepartment,
  // deleteDepartment,
  deletePosition,
  updatePosition,
  updateApprovalChain,
  DeleteDepartment,
} from "../../../apis/Service";

function ManageAsset() {
  const organizationName = useSelector((state) => state.auth.organization);

  // const [position, setPosition] = useState(""); // Stores the current position input
  const [isEditingPosition, setIsEditingPosition] = useState(false); // Tracks if editing mode is active
  const [oldPosition, setOldPosition] = useState(null); // Tracks the old position being edited
  // const [departments, setDepartments] = useState([]); // Departments list
  // const [organizationName, setOrganizationName] = useState(""); // Organization name

  const inputRefDepartment = useRef(null);
  const [DepartmentLoading, setDepartmentLoading] = useState(true);
  const [departments, setDepartments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [selectedPositionDepartment, setSelectedPositionDepartment] =
    useState("");
  const [position, setPosition] = useState("");
  const [positionRows, setPositionRows] = useState([]);
  const [positionLoading, setPositionLoading] = useState(true);
  const [approvalChainLoading, setApprovalChainLoading] = useState(true);
  const [approvalChains, setApprovalChains] = useState(""); // For Action
  const [level1, setLevel1] = useState(""); // For Level-1
  const [level2, setLevel2] = useState(""); // For Level-2
  const [approvalChainRows, setApprovalChainRows] = useState([]);
  const [selectedApprovalDepartment, setSelectedApprovalDepartment] =
    useState("");

  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleApprovalChainSubmit = async () => {
    const formData = {
      organizationName: organizationName, // Can dynamically set based on user input
      departmentName: selectedApprovalDepartment,
      action: approvalChains,
      level1,
      level2,
    };

    try {
      if (isEditMode) {
        // Update approval chain
        const result = await updateApprovalChain(formData);
        console.log("Update Approval Chain Result:", result);
      } else {
        // Add approval chain
        const result = await addApprovalChain(formData);
        console.log("Add Approval Chain Result:", result);
      }

      // Reset the form after submission
      setSelectedApprovalDepartment("");
      setApprovalChains("");
      setLevel1("");
      setLevel2("");
      setIsEditMode(false); // Switch back to add mode after update
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleApprovalChainEdit = (index) => {
    const approvalChainToEdit = approvalChainRows[index];
    setSelectedApprovalDepartment(approvalChainToEdit.departmentName);
    setApprovalChains(approvalChainToEdit.approvalChains.action);
    setLevel1(approvalChainToEdit.approvalChains.level1);
    setLevel2(approvalChainToEdit.approvalChains.level2);

    setIsEditMode(true);
    setEditIndex(index);
  };
  //organization Data Add
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phone: "",
    fax: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [organiatioLoading, setOrganiationLoading] = useState(false);

  // Function to initiate editing department
  const handleEditClick = (index) => {
    setNewDepartmentName(departments[index]); // Set current department name to input
    setIsEditing(true); // Set editing mode
    setEditingIndex(index); // Set index of the department being edited
  };

  //Update Department Integration
  const handleAddOrUpdateDepartment = async () => {
    const value = newDepartmentName.trim();

    if (!organizationName) {
      toast.error("Organization name is missing");
      return;
    }

    if (value) {
      try {
        const formData = {
          organizationName: organizationName,
        };
        if (isEditing) {
          // Handle updating the department
          const oldDepartmentName = departments[editingIndex]; // Current department name
          formData.oldDepartmentName = oldDepartmentName; // Set the old department name
          formData.newDepartmentName = value; // Set the new department name
          const result = await UpdateDepartment(formData); // Call the update API
          if (result && result.success) {
            const updatedDepartments = [...departments];
            updatedDepartments[editingIndex] = value; // Update the department name
            setDepartments(updatedDepartments);
            toast.success(result.message || "Department updated successfully");
          } else {
            toast.error(result.message || "Failed to update department");
          }
        } else {
          // Handle adding the department
          formData.departmentName = value; // Set the new department name for adding
          const result = await addDepartment(formData);
          if (result && result.success) {
            setDepartments((prevDepartments) => [...prevDepartments, value]);
            toast.success(result.message || "Department added successfully");
          } else {
            toast.error(result.message || "Failed to add department");
          }
        }
        // Reset state after operation
        setNewDepartmentName(""); // Clear input
        setIsEditing(false); // Reset editing mode
        setEditingIndex(null); // Reset editing index
      } catch (error) {
        console.error("API call error: ", error.response || error.message);
        toast.error(
          "Error: " + (error.response?.data?.message || error.message)
        );
      }
    } else {
      toast.error("Department name cannot be empty");
    }
  };

  const handlePositionSubmit = async () => {
    if (!selectedPositionDepartment || !position) {
      toast.error("Department and position are required");
      return;
    }

    try {
      let result;
      if (isEditingPosition) {
        // Update position
        const formData = {
          organizationName: organizationName,
          departmentName: selectedPositionDepartment,
          oldPositionName: oldPosition, // oldPosition is set during editing
          newPositionName: position,
        };
        result = await updatePosition(formData);
      } else {
        // Add new position
        const formData = {
          organizationName: organizationName,
          departmentName: selectedPositionDepartment,
          positions: [position],
        };
        result = await addPosition(formData);
      }

      if (result && result.success) {
        toast.success(
          result.message ||
            (isEditingPosition
              ? "Position updated successfully"
              : "Position added successfully")
        );

        // Refresh the positions table (you can refetch or update locally)
        // fetchPositions();

        // Reset form inputs
        setPosition("");
        setSelectedPositionDepartment("");
        setIsEditingPosition(false);
        setOldPosition(null);
      } else {
        toast.error(result.message || "Failed to submit position");
      }
    } catch (error) {
      toast.error("Error: " + (error.response?.data?.message || error.message));
    }
  };

  const handleEditPosition = (departmentName, positionName) => {
    setSelectedPositionDepartment(departmentName);
    setPosition(positionName);
    setOldPosition(positionName); // Store old position for update
    setIsEditingPosition(true); // Set edit mode
  };

  // const fetchPositions = async () => {
  //   try {
  //     // Fetch positions based on selected department or all departments
  //     const result = await fetchDepartmentPositions();
  //     setPositionRows(result.data); // Update the positionRows state with the fetched data
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to fetch positions");
  //   }
  // };

  // Delete logic (if needed) would go here as well

  //delete department
  const handleDeleteClick = async (departmentName) => {
    if (!organizationName || !departmentName) {
      toast.error("Organization name and department name are required");
      return;
    }
    try {
      const response = await DeleteDepartment({
        organizationName,
        departmentName,
      });
      if (response && response.data.success) {
        setDepartments((prevDepartments) =>
          prevDepartments.filter((dep) => dep !== departmentName)
        );
        toast.error(response.data.message || "Failed to delete department");
      } else {
        toast.success(`Department "${departmentName}" deleted successfully`);
      }
    } catch (error) {
      console.error(
        "Error deleting department: ",
        error.response || error.message
      );
      toast.error("Error: " + (error.response?.data?.message || error.message));
    }
  };

  //Delete Position
  const handleDeletePosition = async (departmentName, positionName) => {
    const formData = {
      organizationName: organizationName, // Replace with the actual organization name
      departmentName: departmentName, // Include the department name
      positionName: positionName, // Position to delete
    };

    try {
      // Call the delete API
      const response = await deletePosition(formData);

      if (response.success) {
        // Optionally update state or UI after successful deletion
        alert(`${positionName} has been deleted from ${departmentName}.`);
      } else {
        // Handle the case where the API indicates failure
        alert(response.message || "Failed to delete position.");
      }
    } catch (error) {
      // Handle error (show error message or similar)
      alert("Failed to delete position.");
    }
  };

  //ADD position from api on the base of department
  // const handlePositionSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!organizationName) {
  //     toast.error("Organization name is required.");
  //     return;
  //   }
  //   // Check if department and position are selected
  //   if (!selectedPositionDepartment || !position) {
  //     toast.error("Please select a department and enter a position.");
  //     return;
  //   }
  //   const formData = {
  //     organizationName,
  //     departmentName: selectedPositionDepartment,
  //     positions: [position],
  //   };
  //   try {
  //     const response = await addPosition(formData);
  //     if (response.data.success) {
  //       toast.message(response.data.message);
  //       setPositionRows((prevRows) => [
  //         ...prevRows,
  //         { name: selectedPositionDepartment, position },
  //       ]);
  //       toast.success(response.message || "Position Add Successfully");
  //       setPosition("");
  //     } else {
  //       toast.success(response.message || "Position Add Successfully");
  //     }
  //   } catch (error) {
  //     console.error("Error adding position:", error.message);
  //   }
  // };

  //ADD approval chain from api on the base of department
  // const handleApprovalChainSubmit = async (event) => {
  //   event.preventDefault();
  //   // Check if all fields are filled out
  //   if (!organizationName) {
  //     toast.error("Organization Name is required");
  //     return;
  //   }
  //   if (!selectedApprovalDepartment) {
  //     toast.error("Please select a department");
  //     return;
  //   }
  //   if (!approvalChains || !level1 || !level2) {
  //     toast.error("Please fill out Action, Level-1, and Level-2");
  //     return;
  //   }
  //   const formData = {
  //     organizationName,
  //     departmentName: selectedApprovalDepartment,
  //     action: approvalChains, // Flattened
  //     level1, // Flattened
  //     level2, // Flattened
  //   };
  //   try {
  //     const response = await addApprovalChain(formData);
  //     if (response.data.success) {
  //       // toast.message(response.data.message);
  //       setApprovalChainRows((prevRows) => [
  //         ...prevRows,
  //         { name: selectedApprovalDepartment, approvalChains, level1, level2 },
  //       ]);
  //       setApprovalChains("");
  //       setLevel1("");
  //       setLevel2("");
  //       toast.success(response.message || "Approval Chain added successfully");
  //     } else {
  //       toast.success(
  //         response.data.message || "Approval Chain added successfully"
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error adding approval chain:", error.message);
  //     toast.error("An error occurred while adding the approval chain");
  //   }
  // };

  // Handle the form submission for adding an approval chain
  // Function to handle adding a new approval chain
  // const handleApprovalChainSubmit = async () => {
  //   if (!selectedApprovalDepartment || !approvalChains || !level1 || !level2) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }

  //   const formData = {
  //     organizationName: organizationName, // replace with the actual organization name
  //     departmentName: selectedApprovalDepartment,
  //     action: approvalChains,
  //     level1: level1,
  //     level2: level2,
  //   };

  //   try {
  //     const response = await addApprovalChain(formData);
  //     if (response.success) {
  //       toast.success("Approval chain added successfully");
  //       fetchApprovalChains(); // Fetch the updated list after adding
  //     } else {
  //       toast.error("Failed to add approval chain");
  //     }
  //   } catch (error) {
  //     toast.error("Error adding approval chain");
  //   }
  // };

  // Function to handle updating an approval chain
  const handleUpdateApprovalChain = async (department, action, lvl1, lvl2) => {
    const formData = {
      organizationName: organizationName, // replace with the actual organization name
      departmentName: department,
      action: action,
      level1: lvl1,
      level2: lvl2,
    };

    try {
      const response = await updateApprovalChain(formData);
      if (response.success) {
        toast.success("Approval chain updated successfully");
        fetchApprovalChains(); // Refresh list after update
      } else {
        toast.error("Failed to update approval chain");
      }
    } catch (error) {
      toast.error("Error updating approval chain");
    }
  };

  // New function to handle editing the approval chain
  const handleEditApprovalChain = (department, action, lvl1, lvl2) => {
    setSelectedApprovalDepartment(department);
    setApprovalChains(action);
    setLevel1(lvl1);
    setLevel2(lvl2);
    handleUpdateApprovalChain(department, action, lvl1, lvl2); // Call update function
  };

  // Handle the form submission for updating an approval chain
  const handleApprovalChainUpdate = async () => {
    const formData = {
      organizationName: "Foxboro.in.co", // Replace with dynamic organization if needed
      departmentName: selectedApprovalDepartment,
      action: approvalChains,
      level1,
      level2,
    };

    try {
      const response = await updateApprovalChain(formData);
      if (response.success) {
        toast.success(
          `Approval chain updated for ${selectedApprovalDepartment}`
        );
        fetchApprovalChains(); // Fetch and refresh the approval chains after successful update
        setIsEditing(false); // Reset the edit mode
      } else {
        toast.error("Failed to update approval chain");
      }
    } catch (error) {
      toast.error("Error occurred while updating approval chain");
    }
  };

  // Fetch departments from API To Show
  const fetchDepartments = async (organizationName) => {
    setDepartmentLoading(true);
    try {
      const formData = { organizationName };
      const response = await departmentDropdown(formData);
      if (response.data && response.data.length > 0) {
        const departmentList = response.data[0].departments.map(
          (department) => department.departmentName
        );
        // console.log("Fetched Departments:", departmentList);
        setDepartments(departmentList); // Store department names in state
      } else {
        console.warn("No department data found in response.");
        setDepartments([]); // Set to an empty array if no departments found
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    } finally {
      setDepartmentLoading(false);
    }
    // Fetch all departments and their respective positions
    setPositionLoading(true);
    try {
      const formData = { organizationName };
      const departmentResponse = await departmentDropdown(formData); // Fetch departments
      if (departmentResponse.data && departmentResponse.data.length > 0) {
        const departmentList = departmentResponse.data[0].departments.map(
          (dept) => dept.departmentName
        );
        // Fetch positions for each department
        const allPositions = await Promise.all(
          departmentList.map(async (department) => {
            const positionResponse = await getPosition(
              organizationName,
              department
            );
            return {
              departmentName: department,
              positions: positionResponse.data || [], // Store positions if found
            };
          })
        );
        setPositionRows(allPositions);
      } else {
        console.warn("No departments found");
        setPositionRows([]); // Clear if no departments are available
      }
    } catch (error) {
      console.error("Error fetching departments and positions:", error);
    } finally {
      setPositionLoading(false);
    }
    // Fetch all departments and their respective Approval Chain
    setApprovalChainLoading(true);
    try {
      const formData = { organizationName };
      const departmentResponse = await departmentDropdown(formData);
      if (departmentResponse.data && departmentResponse.data.length > 0) {
        const departmentList = departmentResponse.data[0].departments.map(
          (dept) => dept.departmentName
        );
        const allApprovalChain = await Promise.all(
          departmentList.map(async (department) => {
            const approvalChainResponse = await getApprovalChain(
              organizationName,
              department
            );
            return {
              departmentName: department,
              approvalChains: approvalChainResponse.data || [],
            };
          })
        );
        console.log(
          "Approval Chain Data:",
          JSON.stringify(allApprovalChain, null, 2)
        );
        setApprovalChainRows(allApprovalChain);
      } else {
        console.warn("No Departments Found");
        setApprovalChainRows([]);
      }
    } catch (error) {
      console.error("Error fetching departments and Approval Chain:", error);
    } finally {
      setApprovalChainLoading(false);
    }
    // Fetch organization data using the organization name
    setOrganiationLoading(true);
    try {
      const response = await getOrganizationData(organizationName);
      setFormData({
        address: response.address || "",
        city: response.city || "",
        state: response.state || "",
        country: response.country || "",
        pinCode: response.pinCode || "",
        phone: response.phone || "",
        fax: response.fax || "",
        email: response.email || "",
      });
      // console.log("organization", response);
    } catch (error) {
      console.error("Error fetching organization data:", error);
    } finally {
      setOrganiationLoading(false);
    }
  };

  //Organization ADD Data
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Handle Save
  const handleSave = async () => {
    try {
      setLoading(true);
      const updatedFormData = {
        ...formData,
        organizationName: organizationName,
      };
      const response = await organizationAddData(updatedFormData);
      if (response.status === 200) {
        toast.success("Data saved successfully:", response.message);
      } else {
        toast.success("Data saved successfully", response.message);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };
  // Handle Cancel Clear form fields
  const handleCancel = () => {
    setFormData({
      address: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      phone: "",
      fax: "",
      email: "",
    });
  };

  // -------------------Table------------------------
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      padding: "10px", // Increase padding
      height: "20px", // Set a specific height
      fontSize: "16px", // Optionally adjust font size for header
      lineHeight: "1.5", // Adjust line height if needed
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

  useEffect(() => {
    if (organizationName) {
      fetchDepartments(organizationName);
    }
  }, [organizationName]);

  return (
    <div>
      <Paper>
        <Grid container gap={1} p={3}>
          {/* Icon and Organization Name */}
          <IconButton>
            <AssetsIcon sx={{ fontSize: 30, color: "green" }} />
          </IconButton>
          <Typography variant="h4" mt={1}>
            Organization = [ {organizationName ? organizationName : "N/A"} ]
          </Typography>
          {/* Form Fields */}
          <Grid container spacing={3}>
            <Grid item md={10} sm={10} xs={12} lg={12}>
              <Grid container spacing={1}>
                {[
                  "address",
                  "city",
                  "state",
                  "country",
                  "pinCode",
                  "phone",
                  "fax",
                  "email",
                ].map((field) => (
                  <Grid item xs={12} sm={3} md={3} lg={3} key={field}>
                    <Typography variant="h6">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </Typography>
                    <TextField
                      type="text"
                      variant="outlined"
                      size="small"
                      fullWidth
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      disabled={organiatioLoading} // Disable field if loading
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          {/* Button Section */}
          <Grid
            container
            mt={2}
            display={"flex"}
            justifyContent={"end"}
            gap={1}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                  fontSize: "16px",
                  width: "150px",
                }}
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? "SAVING..." : "SAVE"}
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                  fontSize: "16px",
                  width: "150px",
                }}
                onClick={handleCancel}
              >
                CANCEL
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* ------------Input textfield for table------------------- */}
      <Card sx={{ my: 2 }}>
        <CardContent>
          <Grid container spacing={2} mt={0.1}>
            {/* ------------------------ADD DEPARTMENT------------------------------ */}
            <Grid
              item
              xs={12}
              sm={3.5}
              md={3.5}
              lg={2.5}
              gap={1}
              display="flex"
              flexDirection={"column"}
            >
              <Typography variant="h5">Add Department</Typography>
              <Box display="flex" gap={1}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Department"
                  value={newDepartmentName} // Bind value to newDepartmentName state
                  onChange={(e) => setNewDepartmentName(e.target.value)}
                  fullWidth
                />
                <Button
                  variant="contained"
                  onClick={handleAddOrUpdateDepartment}
                  size="small"
                  sx={{
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "darkgreen",
                    },
                  }}
                >
                  {isEditing ? "UPDATE" : "ADD"}{" "}
                </Button>
              </Box>
              <Grid container>
                <TableContainer
                  component={Paper}
                  sx={{ maxHeight: 620, overflow: "auto" }}
                >
                  <Table aria-label="customized table" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          sx={{ fontSize: "18px", width: "15%" }}
                        >
                          Department
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {DepartmentLoading ? (
                        <TableRow>
                          <StyledTableCell colSpan={2}>
                            Loading...
                          </StyledTableCell>
                        </TableRow>
                      ) : departments && departments.length > 0 ? (
                        departments.map((departmentName, index) => (
                          <TableRow key={index}>
                            <StyledTableCell>
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <span>
                                  {index + 1}. {departmentName}
                                </span>
                                <Box display="flex">
                                  <IconButton
                                    onClick={() => handleEditClick(index)}
                                  >
                                    {" "}
                                    <EditIcon fontSize="medium" />
                                  </IconButton>{" "}
                                  <IconButton
                                    sx={{
                                      color: "red",
                                      "&:hover": { color: "darkred" },
                                      marginRight: "8px",
                                    }}
                                    onClick={() =>
                                      handleDeleteClick(departmentName)
                                    }
                                  >
                                    <DeleteForeverIcon fontSize="medium" />
                                  </IconButton>
                                </Box>
                              </Box>
                            </StyledTableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <StyledTableCell colSpan={2}>
                            No departments available
                          </StyledTableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            {/* ------------------------ADD POSITION------------------------------ */}
            <Grid
              item
              xs={12}
              sm={3.5}
              md={3.5}
              lg={3.5}
              gap={1}
              display="flex"
              flexDirection={"column"}
            >
              <Typography variant="h5">Add Position</Typography>
              <Box display="flex" gap={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  {DepartmentLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-select-large-label">
                        Department
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-large"
                        label="Department"
                        value={selectedPositionDepartment}
                        onChange={(e) =>
                          setSelectedPositionDepartment(e.target.value)
                        }
                      >
                        <MenuItem value="" disabled>
                          Select a department
                        </MenuItem>
                        {departments && departments.length > 0 ? (
                          departments.map((departmentName, index) => (
                            <MenuItem
                              key={departmentName}
                              value={departmentName}
                            >
                              {index + 1}. {departmentName}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem value="" disabled>
                            No departments available
                          </MenuItem>
                        )}
                      </Select>
                    </FormControl>
                  )}
                </Grid>

                <TextField
                  variant="outlined"
                  size="small"
                  label="Position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  fullWidth
                />

                <Button
                  variant="contained"
                  onClick={handlePositionSubmit}
                  size="small"
                  sx={{
                    backgroundColor: isEditingPosition ? "blue" : "green",
                    "&:hover": {
                      backgroundColor: isEditingPosition
                        ? "darkblue"
                        : "darkgreen",
                    },
                  }}
                >
                  {isEditingPosition ? "Update" : "Add"}
                </Button>
              </Box>

              {/* Position Table */}
              <Grid container>
                <TableContainer
                  component={Paper}
                  sx={{ maxHeight: 620, overflow: "auto" }}
                >
                  <Table aria-label="customized table" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          sx={{ fontSize: "18px", width: "15%" }}
                        >
                          Department
                        </StyledTableCell>
                        <StyledTableCell
                          sx={{ fontSize: "18px", width: "15%" }}
                        >
                          Position
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {positionLoading ? (
                        <TableRow>
                          <StyledTableCell colSpan={2}>
                            Loading...
                          </StyledTableCell>
                        </TableRow>
                      ) : departments && departments.length > 0 ? (
                        positionRows.map((row, index) => (
                          <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                              <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <span>
                                  {index + 1}. {row.departmentName}
                                </span>
                              </Box>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.positions.length > 0
                                ? row.positions.map((position, posIndex) => (
                                    <div
                                      key={posIndex}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      {posIndex + 1}. {position}
                                      <Box display="flex">
                                        <IconButton
                                          aria-label="edit"
                                          size="small"
                                          sx={{
                                            color: "darkblue",
                                            "&:hover": { color: "black" },
                                          }}
                                          onClick={() =>
                                            handleEditPosition(
                                              row.departmentName,
                                              position
                                            )
                                          }
                                        >
                                          <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                          aria-label="delete"
                                          size="small"
                                          sx={{
                                            color: "red",
                                            "&:hover": { color: "darkred" },
                                            marginRight: "8px",
                                          }}
                                          onClick={() =>
                                            handleDeletePosition(
                                              row.departmentName,
                                              position
                                            )
                                          }
                                        >
                                          <DeleteForeverIcon fontSize="small" />
                                        </IconButton>
                                      </Box>
                                    </div>
                                  ))
                                : "No positions available"}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      ) : (
                        <TableRow>
                          <StyledTableCell colSpan={2}>
                            No Positions available
                          </StyledTableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            {/* ------------------------APPROVAL CHAIN------------------------------ */}
            <Grid
              item
              xs={12}
              sm={5}
              md={5}
              lg={6}
              gap={1}
              display="flex"
              flexDirection={"column"}
            >
              <Typography variant="h5">Approval Chain</Typography>
              <Box display="flex" gap={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="department-label">Department</InputLabel>
                    <Select
                      labelId="department-label"
                      id="department-select"
                      label="Department"
                      value={selectedApprovalDepartment}
                      onChange={(e) =>
                        setSelectedApprovalDepartment(e.target.value)
                      }
                    >
                      <MenuItem value="" disabled>
                        Select a department
                      </MenuItem>
                      {departments && departments.length > 0 ? (
                        departments.map((departmentName, index) => (
                          <MenuItem key={index} value={departmentName}>
                            {index + 1}. {departmentName}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem value="" disabled>
                          No departments available
                        </MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>

                <TextField
                  variant="outlined"
                  label="Action"
                  size="small"
                  value={approvalChains}
                  onChange={(e) => setApprovalChains(e.target.value)}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  label="Level-1"
                  size="small"
                  value={level1}
                  onChange={(e) => setLevel1(e.target.value)}
                  fullWidth
                />
                <TextField
                  variant="outlined"
                  label="Level-2"
                  size="small"
                  value={level2}
                  onChange={(e) => setLevel2(e.target.value)}
                  fullWidth
                />

                <Button
                  variant="contained"
                  onClick={handleApprovalChainSubmit}
                  size="small"
                  sx={{
                    backgroundColor: isEditMode ? "orange" : "green",
                    "&:hover": {
                      backgroundColor: isEditMode ? "darkorange" : "darkgreen",
                    },
                  }}
                >
                  {isEditMode ? "Update" : "Add"}
                </Button>
              </Box>

              {/* ------------Table----------------------------- */}
              <Grid container>
                <TableContainer
                  component={Paper}
                  sx={{ maxHeight: 620, overflow: "auto" }}
                >
                  <Table aria-label="customized table" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell
                          sx={{ fontSize: "18px", width: "25%" }}
                        >
                          Department
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: "25%" }}>
                          Action
                        </StyledTableCell>
                        <StyledTableCell
                          align="left"
                          sx={{ fontSize: "18px", width: "25%" }}
                        >
                          Level-1
                        </StyledTableCell>
                        <StyledTableCell
                          align="left"
                          sx={{ fontSize: "18px", width: "25%" }}
                        >
                          Level-2
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {approvalChainLoading ? (
                        <TableRow>
                          <StyledTableCell colSpan={4}>
                            Loading...
                          </StyledTableCell>
                        </TableRow>
                      ) : approvalChainRows && approvalChainRows.length > 0 ? (
                        approvalChainRows.map((row, index) => (
                          <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                              {index + 1}. {row.departmentName}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {index + 1}. {row.approvalChains.action || "N/A"}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {index + 1}. {row.approvalChains.level1 || "N/A"}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {index + 1}. {row.approvalChains.level2 || "N/A"}
                              <Box display="flex">
                                <IconButton
                                  onClick={() => handleApprovalChainEdit(index)}
                                >
                                  <EditIcon fontSize="medium" />
                                </IconButton>
                                <IconButton
                                  sx={{
                                    color: "red",
                                    "&:hover": { color: "darkred" },
                                    marginRight: "8px",
                                  }}
                                >
                                  <DeleteForeverIcon fontSize="medium" />
                                </IconButton>
                              </Box>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      ) : (
                        <TableRow>
                          <StyledTableCell colSpan={4}>
                            No Approval Chain Available
                          </StyledTableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default ManageAsset;
