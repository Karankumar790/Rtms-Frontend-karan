import { Grid, Paper, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Forgot() {
    return (
        <>
            <Grid container sx={{ backgroundColor: '#8590AD', height: '86.68vh' }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} >
                    <Paper sx={{borderRadius:'20px'}}>
                        <Grid item p={3} >
                            <form>

                                <Grid item mt={2}>
                                    <Typography variant='h4'>Forgot Your Password?</Typography>
                                </Grid>
                                <Grid item mt={2}>
                                    <Typography >Please enter the email address you`d like your password reset information sent to</Typography>
                                </Grid>
                                <Grid item mt={3}>
                                    <TextField label="Enter Email Address" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item mt={3} >
                                    <Button variant='contained' color='primary' fullWidth type='submit'>Request Reset Password</Button>
                                </Grid>
                                <Grid item mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography><Link to="/" style={{ textDecoration: "none" }}>Back to Login</Link></Typography>
                                </Grid>
                            </form>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>

        </>
    )
}