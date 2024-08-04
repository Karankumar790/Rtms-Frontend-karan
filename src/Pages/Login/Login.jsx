import React from 'react'
import { Button, Grid, TextField, Typography, Box } from '@mui/material'
import PageContainer from '../../components/HOC/PageContainer'
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <PageContainer className='login-form-bg-image' showfooter showheader>
            <Grid container spacing={2} p={4} >
                <Grid item spacing={2} md={12} sm={12} xs={12}>
                    <Typography fontSize="xxx-large">
                        Welcome
                    </Typography>
                    <Typography fontSize="large" color='#800000'>
                        Real Time Well Monitoring System
                    </Typography>
                </Grid>
                <Grid item alignItems={'center'}>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item sx={{ display: 'flex', alignItems: 'flex-end' }} md={12} sm={12} lg={12} xs={12}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1 }} fontSize='large' />
                                <TextField className='custom-textfield' label="Username" variant="standard" fullWidth />
                            </Grid>
                            <Grid item sx={{ display: 'flex', alignItems: 'flex-end' }} md={12} sm={12} lg={12} xs={12}>
                                <HttpsIcon sx={{ color: 'action.active', mr: 1 }} fontSize='large' />
                                <TextField className='custom-textfield' label="Password" variant="standard" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} direction='column' py={2}>
                            <Grid item textAlign={'end'} >
                                <Link to="/forgot" style={{ textDecoration: "none" }}>
                                    Forgot Password
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/dashboard">
                                    <Button variant='contained' className='btn-primary' fullWidth type='submit'>Login</Button>
                                </Link>
                            </Grid>
                            <Grid item textAlign="center">
                                <Typography fontSize="small">Don't have an account?
                                    <Link to='/signup' style={{ textDecoration: "none" }}>Sign Up</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default Login
