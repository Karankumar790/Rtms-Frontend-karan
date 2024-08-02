// import React from 'react'
// import Header from '../components/Header/Header';
// // import Footer from '../components/Footer/Footer';
// // import '../Stylesheet/Login.css'

// // import Signup from '../Signup/Signup'
// // import './Login.css'
// import { Link } from "react-router-dom";
// // import Footer from '../Footer/Footer';
// // import Styles from './login.module.css'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import HttpsIcon from '@mui/icons-material/Https';
// import { FormControl, Input, InputAdornment, InputLabel,TextField,Data } from '@mui/material';
// import { AccountCircle } from '@mui/icons-material';
// import { useState } from 'react';
// function Login() {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => {
//         setShowPassword(!showPassword);
//     };
//     return (
        

//         <>
//         <Header/>
//         <FormControl fullWidth variant={'outlined'} sx={{ mt: 1 }}>
//                                 {/* <InputLabel htmlFor="filled-adornment-password">Password</InputLabel> */}
//                                 <TextField
//                                     type={showPassword ? 'text' : 'password'}
//                                     label="Password"
//                                     name='password'
//                                     value={data?.password}
//                                     onChange={inputHandle}
//                                     required={true}
//                                     InputProps={{
//                                         endAdornment: (
//                                             <InputAdornment position="end">
//                                                 <IconButton
//                                                     aria-label="toggle password visibility"
//                                                     onClick={handleClickShowPassword}
//                                                     edge="end"
//                                                 >
//                                                     {showPassword ? <Visibility /> : <VisibilityOff />}
//                                                 </IconButton>
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                     fullWidth
//                                 />
//                             </FormControl>
//         </>
//     )
// }

// export default Login
