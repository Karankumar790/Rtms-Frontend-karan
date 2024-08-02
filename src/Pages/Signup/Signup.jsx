import { Grid, Typography, TextField, Box } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
// import Header from '../components/Header/Header';
// import Footer from '../components/Footer/Footer';
import wifi from '../../../public/assets/wifi.png'
import './Signup.css'


function Signup() {
    return (
        <div>

            <Grid container  >
                <Grid item  xs={12} sm={12} md={12} lg={12} sx={{ display: "flex", flexDirection: "column" }}>

                    <Grid item  xs={6} sm={6} md={6} lg={6}  sx={{ border: "2px solid black" , backgroundColor:"pink"}}>

                        <Grid item  >
                            <Grid item xs={10} sm={10} md={10} lg={10} spacing={2} sx={{ backgroundColor: "red" }} >
                                <Grid item  >
                                    <Typography variant='h2'>Registration</Typography>
                                    <Typography variant='h5'>Create New RTMS Account</Typography>
                                </Grid>
                                <Grid>
                                    <form>
                                        <Grid item   >
                                            <Grid item ml={5}>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                    <TextField id="input-with-sx" label="Username" variant="standard" />
                                                </Box>
                                            </Grid>
                                            <Grid>

                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}


                                                    <HttpsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                                    <TextField id="input-with-sx" label="Password" variant="standard" />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>

                        </Grid>


                        <Grid item sx={{ backgroundColor: "pink" }}  >
                            <Grid item sx={{ backgroundColor: "red" }} >
                                <Grid item  >
                                    <Typography variant='h2'>Registration</Typography>
                                    <Typography variant='h5'>Create New RTMS Account</Typography>
                                </Grid>
                                <Grid>
                                    <form>
                                        <Grid item mt={5} gap='9px' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Grid >
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                    <TextField id="input-with-sx" label="Username" variant="standard" />
                                                </Box>
                                            </Grid>
                                            <Grid>

                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}


                                                    <HttpsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                                    <TextField id="input-with-sx" label="Password" variant="standard" />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: "2px solid black", backgroundColor: "yellow" }} >
                        <Grid className='.l-form'></Grid>
                    </Grid>
                    {/* <Grid item xs={4} sm={4} md={4} lg={4} className='.l-form' sx={{border:"2px solid black"}} >
                        <Grid className='.l-form'></Grid>
                    </Grid> */}

                </Grid>

                <Grid container spacing={2}>

                    <Grid container mt={'85px'}>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ justifyContent: 'center', pl: '200px' }} >
                            <img src={wifi} alt="" height={'100px'} />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pl: '102px' }}>

                            <img src={wifi} alt="" height={'100px'} />
                            <img src={wifi} alt="" height={'100px'} />
                            <img src={wifi} alt="" height={'100px'} />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ pl: '200px' }}>
                            <img src={wifi} alt="" height={'100px'} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}

export default Signup
