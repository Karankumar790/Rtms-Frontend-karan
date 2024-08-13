import { Grid, Typography, TextField, Box, Button } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PageContainer from '../../components/HOC/PageContainer';
import CallIcon from '@mui/icons-material/Call';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Link } from 'react-router-dom';


import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';


function Signup() {
    return (
        <PageContainer className='bgImg' showheader showfooter>
            <Grid container  display={'flex'} justifyContent={'start'}  alignContent={'center'}>
                <Grid item padding={2} width={600} >
                    <Card>
                        <CardContent orientation="vertical">
                            <Grid item pt={1} sx={{ textAlign: "center" }}>
                                <Typography variant='h2'>Registration</Typography>
                                <Typography variant='h5' color='#800000'>Create a New RTMS Account</Typography>
                            </Grid>
                            <Grid item alignItems={'center'}>
                                <form>
                                    <Grid item gap='6px' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Grid item padding={5}>
                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    className='custom-textfield'
                                                    label="Username"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                />
                                            </Box>
                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Email"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                />
                                            </Box>

                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <CallIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Contact number"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                />
                                            </Box>

                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="ONGC employee Id"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                />
                                            </Box>

                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Asset Name"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                />
                                            </Box>

                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />


                                                <TextField
                                                    label="Department"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                />
                                            </Box>

                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />


                                                <TextField
                                                    label="Role in RTMS"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                />

                                            </Box>

                                            <Box mt={2} sx={{ display: 'flex', alignItems: 'flex-end' }}>


                                                <CameraAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />

                                                <Button
                                                    variant="outlined"
                                                    component="label"
                                                    style={{ minWidth: "80px" }}

                                                    sx={{ backgroundColor: "#D3D3D3", border: "black", height: "30px", p: "4px", lineHeight: "1",width:"100%" }}
                                                >
                                                    Choose file
                                                    <input
                                                        type="file"
                                                        hidden
                                                    />
                                                </Button>

                                               
                                            </Box>

                                        </Grid>


                                        <Grid item>
                                            <Button variant="contained" className='btn-primary' fullWidth href="#contained-buttons">
                                                <Typography variant='h6'>Next</Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item textAlign="center" mt={1.5}>
                                            <Typography fontSize={'medium'} >Already have account? <Link to='/' fontWeight={500} fontSize={20}  style={{ textDecoration: "none", color: "#3707B0" }}> Login</Link></Typography>
                                            <Typography fontSize={'medium'}>Already have Registration? <Link to='/' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}>Check Status</Link></Typography>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </PageContainer>
    )
}

export default Signup