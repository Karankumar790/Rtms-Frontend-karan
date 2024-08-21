import { Grid, Typography, TextField, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PageContainer from '../../components/HOC/PageContainer';
import CallIcon from '@mui/icons-material/Call';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Link } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';




function Signup() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [IdCard, setIdCard] = useState(null);


    return (
        <PageContainer className='bgImg' showheader showfooter display={'flex'} justifyContent={'start'} alignItems={'center'}>
            <Grid container >
                <Grid item padding={2} width={600} >
                    <Card>
                        <CardContent orientation="vertical">
                            <Grid item pt={1} sx={{ textAlign: "center" }}>
                                <Typography variant='h2'>Registration</Typography>
                                <Typography variant='h5' color='#800000'>Create a New RTMS Account</Typography>
                            </Grid>
                            <Grid item alignItems={'center'}>
                                <form>
                                    <Grid item gap='9px' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Grid item pt={2} pb={4} pl={5} pr={5}>
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
                                                    label="Contact Number"
                                                    variant="standard"
                                                    color="info"
                                                    fullWidth
                                                    className='custom-textfield'
                                                />
                                            </Box>

                                            <Box mt={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize='large' />
                                                <TextField
                                                    label="Employee ID"
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
                                                <Button variant="outlined" sx={{ minWidth: "80px", backgroundColor: "#D3D3D3", marginRight: "2px", border: "black", height: "30px", padding: "4px", width: "100%", cursor: "pointer", overflow: "scroll" }} component="label" >
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => setSelectedPhoto(e.target.files[0])}
                                                        hidden
                                                    />
                                                    {selectedPhoto ? (
                                                        <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                            {selectedPhoto.name}
                                                        </Typography>
                                                    ) : (
                                                        <Typography>Upload Photo</Typography>
                                                    )}
                                                </Button>


                                                <Button variant="outlined" sx={{ minWidth: "80px", backgroundColor: "#D3D3D3", marginRight: "2px", border: "black", height: "30px", padding: "4px", width: "100%", cursor: "pointer", overflow: "scroll" }} component="label" >
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => setIdCard(e.target.files[0])}
                                                        hidden
                                                    />
                                                    {IdCard ? (
                                                        <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                            {IdCard.name}
                                                        </Typography>
                                                    ) : (
                                                        <Typography>Upload ID Card</Typography>
                                                    )}
                                                </Button>
                                            </Box>
                                        </Grid>

                                        <Grid item>
                                            <Link to='/Otpsign' style={{ textDecoration: "none", color: 'white' }}>
                                                <Button variant="contained" className='btn-primary' fullWidth href="#contained-buttons">
                                                    <Typography variant='h6'>Next</Typography>
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item textAlign="center" mt={1.5}>
                                            <Typography fontSize={'medium'} >Already have account? <Link to='/' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}> Login</Link></Typography>
                                            <Typography fontSize={'medium'}>Already have Registration? <Link to='/CheckStatus' fontWeight={500} fontSize={20} style={{ textDecoration: "none", color: "#3707B0" }}>Check Status</Link></Typography>
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