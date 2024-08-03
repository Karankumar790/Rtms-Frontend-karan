import { Grid, Typography, TextField, Box, Button } from '@mui/material'
// import { ThemeProvider } from "@material-ui/styles";
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';

import CallIcon from '@mui/icons-material/Call';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';
// import wifi from '../../../public/assets/wifi.png'
import './Signup.css'
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <div>

            <Grid container className='s-form'  >
                <Grid item ml={3} mt={5} >
                    <Grid item>
                        <Typography variant='h2'>Registration</Typography>
                        <Typography variant='h5' color='#800000'>Create a New RTMS Account</Typography>
                    </Grid>
                    <Grid item >
                        <form>
                            <Grid item gap='9px' style={{ display: 'flex', flexDirection: 'column' }}>
                                <Grid item >
                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                        {/* <TextField id="input-with-sx" label="Username" variant="outlined" fullWidth sx={{
                                              "& .MuiOutlinedInput-root": {
                                                color: "green",
                                                fontFamily: "Arial",
                                                fontWeight: "bold",
                                                Class for the border around the input field
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                  borderColor: "black",
                                                  borderWidth: "2px",
                                                },
                                                "&.Mui-focused": {
                                                    color: "secondary.main",
                                                    fontWeight: "bold",
                                                  }
                                              } 
                                        }} />*/}


                                        <TextField
                                            className='custom_textfield'
                                            label="Username"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                        />



                                    </Box>


                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}


                                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                        {/* <TextField id="input-with-sx" label="Email" variant="standard" fullWidth /> */}

                                        <TextField
                                            label="Email"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                            className='custom_textfield'
                                        />
                                    </Box>

                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                        <CallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                        {/* <TextField id="input-with-sx" label="Contact number" variant="standard" fullWidth /> */}

                                        <TextField
                                            label="Contact number"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                            className='custom_textfield'
                                        />
                                    </Box>

                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                        {/* <TextField id="input-with-sx" label="ONGC Employee Id" variant="standard" fullWidth /> */}

                                        <TextField
                                            label="ONGC employee Id"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                            className='custom_textfield'
                                        />
                                    </Box>

                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                        {/* <TextField id="input-with-sx" label="Asset Name" variant="standard" fullWidth /> */}

                                        <TextField
                                            label="Asset Name"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                            className='custom_textfield'
                                        />
                                    </Box>

                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                        {/* <TextField id="input-with-sx" label="Department" variant="standard" fullWidth /> */}

                                        <TextField
                                            label="Department"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                            className='custom_textfield'
                                        />
                                    </Box>

                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                        {/* <TextField id="input-with-sx" label="Role in RTMS" variant="standard" fullWidth /> */}

                                        <TextField
                                            label="Role in RTMS"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                            className='custom_textfield'
                                        />

                                    </Box>

                                    <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                        <CameraAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                        {/* <RaisedButton
                                            containerElement='label' // <-- Just add me!
                                            label='My Label'>
                                            <input type="file" />
                                        </RaisedButton> */}

                                        <Button
                                            variant="outlined"
                                            component="label"
                                            style={{ minWidth: "80px" }}

                                            sx={{ backgroundColor: "white", border: "black", height: "30px", p: "4px", lineHeight: "1" }}
                                        >
                                            Choose file
                                            <input
                                                type="file"
                                                hidden
                                            />
                                        </Button>
                                        {/* <TextField id="input-with-sx" label="Role in RTMS" variant="standard" sx={{ width: "80%" }}></TextField> */}

                                        <TextField
                                            label="No File Choosen"
                                            variant="standard"
                                            color="info"
                                            fullWidth
                                            className='custom_textfield'
                                        />

                                    </Box>

                                </Grid>


                                <Grid item>
                                    <Button variant="contained" fullWidth href="#contained-buttons" sx={{ backgroundColor: "black", }}>
                                        <Typography variant='h6'>Next</Typography>
                                    </Button>
                                </Grid>
                                <Grid item textAlign="left" mt={1.5}>
                                    <Typography variant='h6'>Already have account? <Link to='/Login' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}>Login</Link></Typography>
                                    <Typography variant='h6'>Already have Registration? <Link to='/Login' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}>Check Status</Link></Typography>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>


            </Grid>

        </div>
    )
}

export default Signup
