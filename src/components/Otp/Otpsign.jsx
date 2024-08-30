import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
import PageContainer from "../HOC/PageContainer";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Input as BaseInput } from '@mui/base/Input';


export default function Otpsign({ separator, length, value, onChange }) {
  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case 'Delete':
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });

        break;
      case 'Backspace':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split('');
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join('');
    });
    if (currentValue !== '') {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes('text/plain')) {
      let pastedText = clipboardData.getData('text/plain');
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split('');

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? ' ';
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(''));
    }
  };
  
  return (
    <PageContainer
      showheader='true'
      showfooter='true'
      className='bgImg'
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
    
      <Paper sx={{ borderRadius: "20px", px:"5px" }} >
        <Grid item p={4}>
          <form>
          <Grid item mt={2}>
              <Typography fontSize={"x-large"} sx={{ color: "#0c1352" }}>
                Please Enter OTP To Verify Mobile
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Typography variant="h6" textAlign="center">
                OTP has been sent to your registered Mobile
              </Typography>
            </Grid>
            {/* <Grid item mt={2}>
              <Typography fontSize={"xx-large"} sx={{ color: "#0c1352" }}>
                Enter OTP From Mobile
              </Typography>
            </Grid> */}
            {/* <Grid item mt={2}>
              <Typography variant="h5" textAlign="center">
                OTP has been sent to your registered Mobile
              </Typography>
            </Grid> */}
            {/* Input otp value  */}
            <Grid item mt={3} display="flex" gap={2} justifyContent="center" justifyItems="center">
              {/* < input type="number" inputProps={{ maxLength: 5 }}  style={{textAlign:"center"}}></input> */}
              <input type="text" className="otp-style"maxLength={1} style={{ textAlign:"center", height:"40px", width:"40px"}} />
              <input type="text" className="otp-style"maxLength={1} style={{textAlign:"center",  height:"40px", width:"40px"}} />
              <input type="text" className="otp-style"maxLength={1} style={{textAlign:"center", height:"40px", width:"40px"}} />
              <input type="text" className="otp-style"maxLength={1} style={{ textAlign:"center", height:"40px", width:"40px"}} />
              <input type="text" className="otp-style"maxLength={1} style={{ textAlign:"center", height:"40px", width:"40px"}} />
              <input type="text" className="otp-style"maxLength={1} style={{ textAlign:"center", height:"40px", width:"40px"}} />
              
            </Grid>
            <Grid
              item
              mt={3}
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >   
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ bgcolor: "#0c113b" }}
                >
                  <Link to='/OtpSignup' style={{textDecoration:'none', color:'white'}}><Typography variant="h6">Submit</Typography></Link>
                </Button>
            </Grid>
            <Grid item mt={2} textAlign="center">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Resend One-Time Password
                </Typography>
              </Link>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </PageContainer>
  );
}
