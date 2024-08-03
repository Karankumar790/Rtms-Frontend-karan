import { Grid, Paper, Typography, TextField, Button, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Forgot() {
    return (
        <>
            <Box  bgcolor="#8590AD" display="flex" justifyContent= 'center' alignItems='center' 
                  height={window?.innerHeight - 128 + 'px'}>
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
            </Box>
        </>
    )
}