import { Button, Grid, TextField, Typography, Box } from '@mui/material'
import Layout from '../../components/HOC/Layout'
import React from 'react'
import './Login.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Layout  className='login-form'>
            <Grid container >
                <Grid container md={5} mt={5} mb={5} p={4} >
                    <Grid item m={2} >
                        <Grid item mt={1.5}>
                            <Typography variant='h2'>
                                Welcome
                            </Typography>
                            <Typography variant='h5' color='#800000'>
                                Real Time Well Monitoring System
                            </Typography>
                        </Grid>
                        <Grid item mt={5}>
                            <form >
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
                                <Grid item mt={5} >

                            
                                    <Grid item textAlign={'end'} >
                                        <Link to="/Forgot" style={{ textDecoration: "none" }}>
                                            Forgot Password
                                        </Link>
                                    </Grid>
                                    <Grid item mt={3}>
                                        <Link to="/Dasboard"><Button variant='contained' color='primary' fullWidth type='submit'>Login</Button></Link>
                                    </Grid>
                                    <Grid item textAlign="center" mt={1.5}>
                                        <Typography variant='h6'>Don't have an account? <Link to='/Signup' style={{ textDecoration: "none" }}>Sign Up</Link></Typography>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            {/* <Footer/> */}
        </Layout>
    )
}

export default Login
