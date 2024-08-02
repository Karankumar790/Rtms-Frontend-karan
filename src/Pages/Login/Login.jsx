import { Button, Grid, TextField, Typography, Box } from '@mui/material'
import React from 'react'
// import Footer from '../../components/Footer/Footer'
import './Login.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <Grid className='login-form'>
                <Grid item mt={30} lg={12} md={12} sm={12}>
                    <Grid>
                        <Grid m='30px'>
                            <Typography variant='h2'>
                                Welcome
                            </Typography>
                            <Typography variant='h5' color='#800000'>
                                Real Time Well Monitoring System
                            </Typography>
                        </Grid>
                        <form >
                            <Grid lg={4} md={4} width='30vw' m='30px' gap='9px' style={{ display: 'flex', flexDirection: 'column' }}>
                                <Grid >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                        <TextField id="input-with-sx" label="Username" variant="standard" />
                                    </Box>
                                </Grid>
                                <Grid>

                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        {/* <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}

                                        
                                            <HttpsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>
                                        
                                        <TextField id="input-with-sx" label="Password" variant="standard"  />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item lg={4} md={4} >

                                {/* <Typography variant='contained' color='primary' fullWidth sx={{ placeItems: 'end' }}>Forget Password

                                </Typography> */}
                                <Grid item textAlign={'end'} width='19vw' mt={2} xs={2} sm={4}>
                                    <Link to="" style={{ textDecoration: "none" }}>
                                        Forgot Password
                                    </Link>
                                </Grid>
                                <Grid item lg={4} md={4} width='18vw' m='30px'>
                                    <Button variant='contained' color='primary' fullWidth type='submit'>Login</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>

            </Grid>
            {/* <Footer/> */}
        </>
    )
}

export default Login
