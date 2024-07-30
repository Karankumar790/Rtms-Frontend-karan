import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../Stylesheet/Login.css'

// import Signup from '../Signup/Signup'
// import './Login.css'
import { Link } from "react-router-dom";
// import Footer from '../Footer/Footer';
// import Styles from './login.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
function Login() {
    return (

        <>

            <Header/>
            <div className="login-form " >
                <div className="form">
                    <form className="form-content" action="/submit" method="POST">
                        <h1 className="form-title">Welcome</h1>
                        <h4 className="form-subtitle">Real-Time Well Monitoring System</h4>
                        <div className="form-div form-div-one">
                            <div className="form-icon">
                                <i className='bx bx-user-circle'>
                                    <AccountCircleIcon />
                                </i>
                            </div>
                            <div className="form-div-input">
                                <label for="form-input" className="form-label"></label>
                                {/* <input type="text" className="form-input"> */}
                                <input type="text" placeholder='Username' className='form-input' />
                            </div>
                        </div>/
                        <div className="form-div form-div-second" style={{marginTop:"-35px"}}>
                            <div className="form-icon">
                                <i className='bx bx-lock'>
                                    <HttpsIcon />
                                </i>
                            </div>
                            <div className="form-div-input">
                                <label for="form-input" className="form-label"></label>
                                {/* <input type="password" className="form-input"> */}
                                <input type="password" placeholder='Password' className='form-input' />
                            </div>
                        </div>
                        <a href="/forget" className="form-forgot">Forgot Password?</a>
                        {/* <input type="submit" className="form-button" value="Login"> */}
                        <input type="submit" className='form-button' value='Login' />
                        <div className="form-dont"><h4>Don't have an account?</h4></div>
                        {/* <a href="/Signup" className="signup">Sign Up</a> */}
                        <Link to="/Signup" className='signup'>Sign Up</Link>

                    </form>
                </div>
                <Footer  />
            </div>
        </>
    )
}

export default Login
