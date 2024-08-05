import React from 'react'
import { Button, Grid, TextField, Typography, Box } from '@mui/material'
import PageContainer from '../../components/HOC/PageContainer'
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <PageContainer className='login-form-bg-image' showfooter showheader>
            <Grid container spacing={2} md={5} p={4} >
                <Grid item spacing={2}>
                    <Typography variant='h2'>
                        Welcome
                    </Typography>
                    <Typography variant='h5' color='#800000'>
                        Real Time Well Monitoring System
                    </Typography>
                </Grid>
                <Grid item >
                    <form>
                        <Grid container spacing={2}>
                            <Grid item sx={{ display: 'flex', alignItems: 'flex-end' }} md={12} sm={12} lg={12} xs={12}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1 }} fontSize='large' />
                                <TextField id="input-with-sx" label="Username" variant="standard" fullWidth />
                            </Grid>
                            <Grid item sx={{ display: 'flex', alignItems: 'flex-end' }} md={12} sm={12} lg={12} xs={12}>
                                <HttpsIcon sx={{ color: 'action.active', mr: 1 }} fontSize='large' />
                                <TextField id="input-with-sx" label="Password" variant="standard" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction='column' py={2}>
                            <Grid item textAlign={'end'} >
                                <Link to="/Forgot" style={{ textDecoration: "none" }}>
                                    Forgot Password
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/Dasboard"><Button variant='contained' color='primary' fullWidth type='submit'>Login</Button></Link>
                            </Grid>
                            <Grid item textAlign="center">
                                <Typography variant='h6'>Don't have an account? <Link to='/Signup' style={{ textDecoration: "none" }}>Sign Up</Link></Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default Login
