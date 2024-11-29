import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import the eye icon
import { Step, StepContent, StepLabel, Stepper, StepConnector } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '60vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  display: 'flex',
};

export default function HistoryModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const stepss = [
    { label: 'Notification', value: '12' },
    { label: 'Date/Time', value: '2024-11-28T15:30' },
    { label: 'Well Number', value: 'Well-12345' },
    { label: 'Location', value: 'Site Alpha, Block B' },
    { label: 'Installation', value: 'Pump-450X' },
    { label: 'Description', value: 'Routine maintenance check required' },
    { label: 'Status', value: 'Pending' },
  ];

  const StepIcon = () => {
    return (
      <Box
        sx={{
          backgroundColor: 'orange', // Orange background for the icon
          color: 'white', // White check icon
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
        }}
      >
        <CheckIcon />
      </Box>
    );
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
        <Box sx={style}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ padding: 2, backgroundColor: '#f9f9f9', borderRadius: 2, width: '100%', height: '100%' }}>
              <Stepper
                activeStep={0} // Only the first step is active
                orientation="vertical"
                connector={<StepConnector
                  sx={{
                    '& .MuiStepConnector-line': {
                      minHeight: '100%', // Ensures the connector spans the full height
                      borderColor: '#ccc', // Maintains the color
                    },
                  }}
                />}
                sx={{ width: '100%', height: '100%', backgroundColor: '#f9f9f9', borderRadius: 2 }}
              >
                {/* First step with all content */}
                <Step key="all-steps">
                  <StepLabel StepIconComponent={StepIcon}>
                    Notifications History
                  </StepLabel>
                  <StepContent>
                    {stepss.map((step) => (
                      <div key={step.label} style={{ marginBottom: '3px', display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ color: 'grey', fontSize: step.label === 'Notification' ? '2rem' : '1rem', fontWeight: '600', marginRight: '10px' }}>
                          {step.label}:
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'grey', fontSize: step.value === '12' ? '2rem' : '1rem', fontWeight: '600', display: 'flex', justifyContent: 'center' }}>
                          {step.value}
                        </Typography>
                      </div>


                    ))}
                  </StepContent>
                </Step>

                {/* Second step without content */}
                <Step key="empty-step">
                  <StepLabel StepIconComponent={StepIcon}>
                    Step 2 (No Content)
                  </StepLabel>
                  <StepContent>
                    {/* No content displayed here */}
                  </StepContent>
                </Step>

                {/* Additional steps, if any, can be left empty or hidden */}
                {stepss.length > 2 && <Step sx={{ visibility: 'hidden' }} />}
                {stepss.length > 3 && <Step sx={{ visibility: 'hidden' }} />}
                {stepss.length > 4 && <Step sx={{ visibility: 'hidden' }} />}
                {stepss.length > 5 && <Step sx={{ visibility: 'hidden' }} />}
              </Stepper>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
