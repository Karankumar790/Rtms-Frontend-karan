import React from 'react'
import PageContainer from '../components/HOC/PageContainer'

import {Paper, Typography, TextField, Button, Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom';

function PopUp() {
  return (
    <PageContainer
            showheader
            showfooter
            display="flex"  alignItems='center' className='bgImg' >
            <Grid container  justifyContent='center'>
                <Paper sx={{ borderRadius: '20px', width: '50rem' }}>
                    <Grid item p={3} >
                        <form>
                            <Grid item mt={2}>
                                <Typography variant='h5' fontSize='x-large' textAlign="center">Enter Your Registration Number</Typography>
                            </Grid>
    
                            <Grid item mt={3} sx={{display:"flex",justifyContent:"center"}}>
                                <TextField justifyContent="center" label="Enter Registration Number"  variant="outlined" size='small' sx={{width:500}} />
                            </Grid>
                            <Grid item mt={3} sx={{display:"flex",justifyContent:"center"}} >
                                <Link to="/CheckStatus"><Button variant='contained' color='primary' type='submit'>Check Status</Button></Link>
                            </Grid>
                            {/* <Grid item mt={2} textAlign='center'>
                                <Link to="/" style={{ textDecoration: "none" }}>Back to SignUp</Link>
                            </Grid> */}
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </PageContainer>
  )
}

export default PopUp
