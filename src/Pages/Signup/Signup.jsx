import { Grid, Typography, TextField, Box, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PageContainer from '../../components/HOC/PageContainer';
import CallIcon from '@mui/icons-material/Call';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Link } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { styled, useTheme } from "@mui/material/styles";
import { Email } from '@mui/icons-material';

function Signup() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [IdCard, setIdCard] = useState(null);
    //---------------------FOR VALIDATION--------------------------------

    const initialValues = { username: '', Email: '', mobile: '', employeeId: '', organization: '', department: '', role: '' };

    const [inputValues, setInputValues] = useState(initialValues);
    const [hasTouchedUsername, setHasTouchedUsername] = useState({
        username: false,
        email: false,
        mobile: false,
        employeeId: false,
        organization: false,
        department: false,
        role: false,
    }); // New state to track if the username field has been touched

    const handleUsernameChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
        setHasTouchedUsername({ ...hasTouchedUsername, [name]: false }); // Mark the username field as touched when the user types
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setHasTouchedUsername({ ...touchedFields, [name]: true });
    };

    return (

        <PageContainer className='bgImg' showheader='true' showfooter='true'>
            <Grid container >
                <Grid item padding={2} width={600} >
                    <Card>
                        <CardContent orientation="vertical">
                            <Grid item pt={1} sx={{ textAlign: "center" }}>
                                <Typography variant='h4'>Registration</Typography>
                                <Typography variant='h6' color='#800000'>Create a New RTMS Account</Typography>
                            </Grid>
                            <Grid item px={4} alignItems={'center'}>
                                <form>
                                    <Grid item gap='9px' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Grid item>
                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    className='custom-textfield'
                                                    label="Username"
                                                    variant="standard"
                                                    color="info"
                                                    name="username"
                                                    value={inputValues.username}
                                                    onChange={handleUsernameChange}
                                                    helperText={hasTouchedUsername && !inputValues.username ? "Username is required" : ''}
                                                    error={hasTouchedUsername && !inputValues.username}
                                                    onBlur={handleBlur}
                                                    fullWidth
                                                />
                                            </Box>
                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Email"
                                                    name="email"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues.email}
                                                    onChange={handleUsernameChange}
                                                    helperText={hasTouchedUsername.email && !inputValues.email ? "email is required" : ''}
                                                    error={hasTouchedUsername.email && !inputValues.email}
                                                    onBlur={handleBlur}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <CallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label=" Mobile"
                                                    name="mobile"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues.mobile}
                                                    onChange={handleUsernameChange}
                                                    helperText={hasTouchedUsername.mobile && !inputValues.mobile ? "mobile is required" : ''}
                                                    error={hasTouchedUsername.mobile && !inputValues.mobile}
                                                    onBlur={handleBlur}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Employee ID"
                                                    name="employeeId"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues.employeeId}
                                                    onChange={handleUsernameChange}
                                                    helperText={hasTouchedUsername.employeeId && !inputValues.employeeId ? "Username is required" : ''}
                                                    error={hasTouchedUsername.employeeId && !inputValues.employeeId}
                                                    onBlur={handleBlur}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Organization"
                                                    name="organization"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues.organization}
                                                    onChange={handleUsernameChange}
                                                    helperText={hasTouchedUsername.organization && !inputValues.organization ? "Username is required" : ''}
                                                    error={hasTouchedUsername.organization && !inputValues.organization}
                                                    onBlur={handleBlur}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />


                                                <TextField
                                                    label="Department"
                                                    name="department"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues.department}
                                                    onChange={handleUsernameChange}
                                                    helperText={hasTouchedUsername.department && !inputValues.department ? "department is required" : ''}
                                                    error={hasTouchedUsername.department && !inputValues.department}
                                                    onBlur={handleBlur}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />


                                                <TextField
                                                    label="Role in RTMS"
                                                    name="role"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues.role}
                                                    onChange={handleUsernameChange}
                                                    helperText={hasTouchedUsername.role && !inputValues.role ? "Username is required" : ''}
                                                    error={hasTouchedUsername.role && !inputValues.role}
                                                    onBlur={handleBlur}
                                                />

                                            </Box>


                                            <Box mt={.5} sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <CameraAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                    <Button variant="outlined" sx={{ minWidth: "80px", backgroundColor: "#D3D3D3", marginRight: "2px", border: "black", height: "30px", padding: "4px", width: "100%", cursor: "pointer", overflow: "scroll" }} component="label" >
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => setSelectedPhoto(e.target.files[0])}
                                                            hidden
                                                        />
                                                        {selectedPhoto ? (
                                                            <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                {selectedPhoto.name}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ color: 'black' }}>Upload Photo</Typography>
                                                        )}
                                                    </Button>
                                                </Box>
                                                <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <CameraAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                    <Button variant="outlined" sx={{ minWidth: "80px", backgroundColor: "#D3D3D3", marginRight: "2px", border: "black", height: "30px", padding: "4px", width: "100%", cursor: "pointer", overflow: "scroll" }} component="label" >
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={(e) => setIdCard(e.target.files[0])}
                                                            hidden
                                                        />
                                                        {IdCard ? (
                                                            <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                                {IdCard.name}
                                                            </Typography>
                                                        ) : (
                                                            <Typography sx={{ color: 'black' }}>Upload ID Card</Typography>
                                                        )}
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item>
                                            <Link to='/Otpsign' style={{ textDecoration: "none", color: 'white' }}>
                                                <Button variant="contained" className='btn-primary' fullWidth href="#contained-buttons">
                                                    <Typography variant='h6'>Next</Typography>
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item textAlign="center" mt={.5}>
                                            <Typography fontSize={'medium'} >Already have account? <Link to='/' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}> Login</Link></Typography>
                                            <Typography fontSize={'medium'}>Have Registration? <Link to='/Popup' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}>Check Status</Link></Typography>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer >
    )
}

export default Signup