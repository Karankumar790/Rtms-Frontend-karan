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
                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: "flex", flexDirection: "column" }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ border: "2px solid black", backgroundColor: "pink" }}>
                        <Grid item  >
                            <Grid item  spacing={2} sx={{ backgroundColor: "red" }} >
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

                </Grid>
            </Grid>

        </div>
    )
}

export default Signup
