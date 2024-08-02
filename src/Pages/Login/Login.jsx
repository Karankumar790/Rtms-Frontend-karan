import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import './Login.css'


function Login() {
    return (
        <>
        <Grid className='login-form'>
            <Grid item mt={40} lg={12} md={12} sm={12}>
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
                        <Grid lg={4} md={4} width='30vw' m='30px' style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField variant='standard' size='small' label="E-mail" />
                            <TextField variant='standard' size='small' label="Password" />
                        </Grid>
                        <Grid lg={4} md={4} >
                            <Typography variant='contained' color='primary' sx={{ margin: '480px' }}>Forget Password</Typography>
                        </Grid>
                        <Grid lg={4} md={4} width='30vw' m='30px'>
                            <Button variant='contained' color='primary' fullWidth type='submit'>Login</Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
        </>
    )
}

export default Login
