import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import the eye icon
import { Step, StepContent, StepLabel, Stepper, StepConnector, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from "@mui/icons-material/Close";


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '35%',
//   height: '40vh',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 2,
//   overflowY: 'auto',
//   display: 'flex',
// };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  height: '47vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  overflowY: 'auto',
  display: 'flex',
};

export default function HistoryModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloses = () => setOpen(false);


  const stepss = [
    { label: 'Notification', value: '12' },
    { label: 'Date/Time', value: '2024-11-28T15:30' },
    { label: 'Well Number', value: 'Well-12345' },
    { label: 'Location', value: 'Site Alpha, Block B' },
    { label: 'Installation', value: 'Pump-450X' },
    { label: 'Description', value: 'Routine maintenance check required' },
    { label: 'Status', value: 'Pending [0 Days : 0 Hr : 0 min]' },
  ];

  const StepIcon = () => {
    return (
      <Box
        sx={{
          backgroundColor: 'green', // Orange background for the icon
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
      {/* <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Box sx={{ width: '100%', height: '80%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: 2, paddingLeft: 2 }}>
              <Box >
                <Typography variant='h4'> Notifications Details</Typography>
              </Box>
              <Box
                position="absolute"
                sx={{
                  top: '5%',
                  right: "-2.2%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <IconButton onClick={handleCloses} color=" solid black">
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ padding: 2, borderRadius: 2, width: '97%', height: '80%' }}>
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
                sx={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: 2,
                  padding: 2, // Adds padding for spacing
                  height: '100%'
                }}
              >
                <Step key="all-steps">
                  <StepLabel StepIconComponent={StepIcon}>
                    Step 1
                  </StepLabel>
                  <StepContent>
                    {stepss.map((step) => (
                      <div key={step.label} style={{ marginBottom: '3px', display: 'flex', alignItems: 'center' }}>
                        <Typography
                          sx={{
                            color: 'black',
                            fontSize: step.label === 'Notification' ? '1.8rem' : '1.3rem',
                            fontWeight: step.label === 'Notification' ? 'bold' : 'bold', // Adjust font weight here
                            marginRight: '10px',
                          }}
                        >
                          {step.label}:
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'black',
                            fontSize: step.value === '12' ? '1.8rem' : '1.3rem',
                            fontWeight: step.value === '12' ? 'bold' : '400', // Adjust font weight here
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {step.value}
                        </Typography>

                      </div>


                    ))}
                  </StepContent>
                </Step>

                

                {stepss.length > 2 && <Step sx={{ visibility: 'hidden' }} />}
                {stepss.length > 3 && <Step sx={{ visibility: 'hidden' }} />}
                {stepss.length > 4 && <Step sx={{ visibility: 'hidden' }} />}
                {stepss.length > 5 && <Step sx={{ visibility: 'hidden' }} />}
              </Stepper>
            </Box>
            <Box display={"flex"} justifyContent={"end"} mt={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green", 
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                  fontSize: "16px",
                }}

              >
                Cancel
              </Button>
            </Box>

          </Box>
        </Box>
      </Modal> */}
      <Modal keepMounted open={open} onClose={handleCloses}>
              <Box sx={style}>
                <Box sx={{ width: "100%", height: "77%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingRight: 2,
                      paddingLeft: 2,
                      pt: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="h4"> Notification History</Typography>
                    </Box>
                    <Box
                      position="absolute"
                      sx={{
                        top: "5%",
                        right: "-2.2%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <IconButton onClick={handleCloses} color=" solid black">
                        <CloseIcon fontSize="large" />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      padding: 2,
                      borderRadius: 2,
                      width: "95%",
                      height: "83%",
                    }}
                  >
                    <Stepper
                      activeStep={0} // Only the first step is active
                      orientation="vertical"
                      connector={
                        <StepConnector
                          sx={{
                            "& .MuiStepConnector-line": {
                              minHeight: "100%", // Ensures the connector spans the full height
                              borderColor: "#ccc", // Maintains the color
                            },
                          }}
                        />
                      }
                      sx={{
                        backgroundColor: "#f9f9f9",
                        borderRadius: 2,
                        padding: 2, // Adds padding for spacing
                        height: "100%",
                      }}
                    >
                      {/* First step with all content */}
                      <Step key="all-steps">
                        <StepLabel StepIconComponent={StepIcon}>
                          Step 1
                        </StepLabel>
                        <StepContent>
                          {stepss.map((step) => (
                            <div
                              key={step.label}
                              style={{
                                marginBottom: "3px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "black",
                                  fontSize:
                                    step.label === "Notification"
                                      ? "1.8rem"
                                      : "1.3rem",
                                  fontWeight:
                                    step.label === "Notification"
                                      ? "bold"
                                      : "bold", // Adjust font weight here
                                  marginRight: "10px",
                                }}
                              >
                                {step.label}:
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: "black",
                                  fontSize:
                                    step.value === "12" ? "1.8rem" : "1.3rem",
                                  fontWeight:
                                    step.value === "12" ? "bold" : "400", // Adjust font weight here
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {step.value}
                              </Typography>
                            </div>
                          ))}
                        </StepContent>
                      </Step>

                      {/* Additional steps, if any, can be left empty or hidden */}
                      {stepss.length > 2 && (
                        <Step sx={{ visibility: "hidden" }} />
                      )}
                      {stepss.length > 3 && (
                        <Step sx={{ visibility: "hidden" }} />
                      )}
                      {stepss.length > 4 && (
                        <Step sx={{ visibility: "hidden" }} />
                      )}
                      {stepss.length > 5 && (
                        <Step sx={{ visibility: "hidden" }} />
                      )}
                    </Stepper>
                  </Box>
                  <Box display={"flex"} justifyContent={"end"} p={3}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "green", // Change button color to green
                        "&:hover": {
                          backgroundColor: "darkgreen", // Optional: Change color on hover
                        },
                        fontSize: "16px",
                      }}
                      onClick={handleCloses}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Modal>
    </div>
  );
}