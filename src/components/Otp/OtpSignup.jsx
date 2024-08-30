import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
import PageContainer from "../HOC/PageContainer";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';


const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
};

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled(Button)(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `
);


export default function OtpSignup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <PageContainer
      showheader='true'
      showfooter='true'
      className='bgImg'
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper sx={{ borderRadius: "20px", px: "5px" }} >
        <Grid item p={4}>
          <form>
          <Grid item mt={2}>
              <Typography fontSize={"x-large"} sx={{ color: "#0c1352" }}>
                Please Enter OTP To Verify E-Mail
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Typography variant="h6" textAlign="center">
                OTP has been sent to your registered Email
              </Typography>
            </Grid>
            {/* <Grid item mt={2}>
              <Typography fontSize={"xx-large"} sx={{ color: "#0c1352" }}>
                Enter OTP From E-Mail
              </Typography>
            </Grid> */}
            {/* <Grid item mt={2}>
              <Typography variant="h5" textAlign="center">
                OTP has been sent to your registered E-mail
              </Typography>
            </Grid> */}
            {/* Input otp value  */}
            <Grid item mt={3} display="flex" gap={2} justifyContent="center" justifyItems="center">
              {/* < input type="number" inputProps={{ maxLength: 5 }}  style={{textAlign:"center"}}></input> */}
              <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
              <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
              <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
              <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
              <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />
              <input type="text" className="otp-style" maxLength={1} style={{ textAlign: "center", height: "40px", width: "40px" }} />

            </Grid>
            <Grid item mt={3} justifyContent="center" sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ bgcolor: "#0c113b" }}
                onClick={handleOpen}
              >
                <Typography variant="h6">Submit</Typography>
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <ModalContent sx={style}>
            <h3 id="transition-modal-title" className="modal-title" style={{ color: "green", textAlign: 'center' }} >
              Your Registration Have Been Submitted Successfully. Registration Number Has Been Sent To Your Registered E-mail.
            </h3>
              <Box  display='flex' justifyContent='center'>
            <Link to='/signup'>
                <Button
                  variant="contained"
                  color="primary"
                  // fullWidth
                  size="medium"
                  sx={{ bgcolor: "#0c113b" }}
                >
                 Ok
                </Button>
            </Link>
              </Box>
          </ModalContent>
        </Fade>
      </Modal>
    </PageContainer>
  );
}