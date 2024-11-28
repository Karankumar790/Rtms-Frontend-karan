import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import the eye icon
import { Step, StepContent, StepLabel, Stepper, Paper, TextField, StepConnector } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { display } from '@mui/system';
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '70vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  display: 'flex',
};


const CustomConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderWidth: '2px', // Increased thickness
    height:'40%' // Line color
  },
}));

export default function HistoryModal() {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);



  // Dummy steps (no content inside)
  const steps = ['', '', '', '', ''];



  // Local array of step data
  const steps1 = [
    { label: 'Notification', value: '12' },
    { label: 'Date/Time', value: '2024-11-28T15:30' },
    { label: 'Well Number', value: 'Well-12345' },
    { label: 'Location', value: 'Site Alpha, Block B' },
    { label: 'Installation', value: 'Pump-450X' },
    { label: 'Description', value: 'Routine maintenance check required' },
    { label: 'Status', value: 'Pending' },
  ];


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      {/* Icon button with eye icon */}
      <IconButton
        sx={{
          color: 'grey',
          '&:hover': { color: 'darkred' },
          marginRight: '5px',
        }}
        onClick={handleOpen}
      >
        <VisibilityIcon fontSize="large" />
      </IconButton>

      {/* Modal with Stepper */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} >

          <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3, width: '100%', display: 'flex' }}>

          <Box sx={{ padding: 2 }}>
      {/* Stepper Section */}
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<CustomConnector />} // Use the custom connector here
        sx={{
          width: '100%',
          height: '90%',
          padding: '10px',
        }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                fontSize: '6.5rem', // Increase font size of labels
                fontWeight: 'bold',
                color: '#1976d2',
                padding: '36px',
              }}
            >
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
            <Box sx={{ width: '100%' }}>
              {/* Title Section */}
              <Box sx={{ fontWeight: 'bold', fontSize: 24, color: '#1976d2', marginBottom: 3 }}>
                Notifications
              </Box>

              {/* Step Data Section */}
              <Box sx={{ padding: 3, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 2 }}>
                {steps1.map((step, index) => (
                  <Box key={index} sx={{ marginBottom: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: '600', color: '#333' }}>
                      <strong>{step.label}:</strong>
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#555' }}>
                      {step.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

        </Box>
      </Modal>
    </div>
  );
}
