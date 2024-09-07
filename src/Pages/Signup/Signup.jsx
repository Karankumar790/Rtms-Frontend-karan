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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

function Signup() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [IdCard, setIdCard] = useState(null);
    const navigate = useNavigate()
    const [inputValues, setInputValues] = useState({
        username: '',
        email: '',
        contactNumber: '',
        employeeID: '',
        assetName: '',
        department: '',
        roleInRTMS: '',
        idCardPhoto: null,
        passportPhoto: null,
        emailOtp: '',
        contactOtp: '',
    });


    const handleUsernameChange = (e) => {
        const { name, value, files, type } = e.target;
        setInputValues((pre) => ({ ...pre, [name]: type === 'file' ? files[0] : value }));
        console.log(value)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("====Submit========", inputValues)
        // const formData = new FormData();
        // formData.append('username', inputValues.username);
        // formData.append('email', inputValues.email);
        // formData.append('contactNumber', inputValues.contactNumber);
        // formData.append('employeeID', inputValues.employeeID);
        // formData.append('assetName', inputValues.assetName);
        // formData.append('department', inputValues.department);
        // formData.append('roleInRTMS', inputValues.roleInRTMS);
        // formData.append('idCardPhoto', inputValues.idCardPhoto);
        // formData.append('passportPhoto', inputValues.passportPhoto);
        // formData.append('emailOtp', inputValues.emailOtp);
        // formData.append('contactOtp', inputValues.contactOtp);
        try {
            // Send the formData using Axios
            const response = await axios.post('https://rtms-backend.onrender.com/api/v1/users/send-otp-register', inputValues,
                // {
                //     headers: {
                //         'Content-Type': 'multipart/form-data',  // Important for file upload
                //     },
                // }
            );
            // Handle success response
            const { message } = response.data;
            console.log('Success:', response.data);
            toast?.success(message)
            navigate('/otpsign')

        } catch (error) {
            // Handle error
            console.error('Error uploading file:', error);
        }

    }

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
                                                    fullWidth
                                                    className='custom-textfield'
                                                    label="Username"
                                                    variant="standard"
                                                    color="info"
                                                    name="username"
                                                    value={inputValues?.username}
                                                    onChange={handleUsernameChange}
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
                                                    value={inputValues?.email}
                                                    onChange={handleUsernameChange}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <CallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    fullWidth
                                                    label=" Mobile"
                                                    name="contactNumber"
                                                    variant="standard"
                                                    color="info"
                                                    className='custom-textfield'
                                                    value={inputValues?.contactNumber}
                                                    onChange={handleUsernameChange}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Employee ID"
                                                    name="employeeID"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues?.employeeID}
                                                    onChange={handleUsernameChange}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Organization"
                                                    name="assetName"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues?.assetName}
                                                    onChange={handleUsernameChange}
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
                                                    value={inputValues?.department}
                                                    onChange={handleUsernameChange}
                                                />
                                            </Box>

                                            <Box mt={.5} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Role in RTMS"
                                                    name="roleInRTMS"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                    value={inputValues?.roleInRTMS}
                                                    onChange={handleUsernameChange}
                                                />

                                            </Box>


                                            <Box mt={.5} sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <CameraAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                    <Button variant="outlined" sx={{ minWidth: "80px", backgroundColor: "#D3D3D3", marginRight: "2px", border: "black", height: "30px", padding: "4px", width: "100%", cursor: "pointer", overflow: "scroll" }} component="label" >
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            name='passportPhoto'
                                                            onChange={handleUsernameChange}
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
                                                            hidden
                                                            type="file"
                                                            accept="image/*"
                                                            name='idCardPhoto'
                                                            onChange={handleUsernameChange}
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
                                            <Link style={{ textDecoration: "none", color: 'white' }}>
                                                <Button variant="contained" className='btn-primary' fullWidth href="#contained-buttons" onClick={handleSubmit}>
                                                    <Typography variant='h6'>Next</Typography>
                                                </Button>
                                            </Link>
                                        </Grid>

                                    </Grid>
                                </form>
                                <Grid item textAlign="center" mt={.5}>
                                    <Typography fontSize={'medium'} >Already have account? <Link to='/' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}> Login</Link></Typography>
                                    <Typography fontSize={'medium'}>Have Registration? <Link to='/Popup' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}>Check Status</Link></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer >
    )
}

export default Signup