import { Button, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
// import map from '../../../../public/assets/map2.png';
import { Box } from '@mui/system';



const data = [
  {
    employeeId: '01',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Description: '',
    Parameter: 'GIP',
    Condition1: '',
    Description: '',

  },
  {
    employeeId: '02',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Description: '',
    Parameter: 'CHP',
    Condition1: '',
    Description: '',

  },
  {
    employeeId: '03',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Description: '',
    Parameter: 'THP',
    Condition1: '',
    Description: '',

  },
  {
    employeeId: '04',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Description: '',
    Parameter: 'Battery %',
    Condition1: '',
    Description: '',

  },
  {
    employeeId: '05',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Description: '',
    Parameter: 'Solar Power',
    Condition1: '',
    Description: '',

  },
  {
    employeeId: '06',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Description: '',
    Parameter: 'Communication',
    Condition1: '',
    Description: '',

  },
  {
    employeeId: '07',
    NormalAlert: '',
    CriticalAlert: '',
    Condition: '',
    Description: '',
    Parameter: 'CPU Temperature',
    Condition1: '',
    Description: '',

  },
]

function AddWell() {
  const [employeeData, setEmployeeData] = useState(data)

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target
    console.log('name', name)
    console.log('value', value)
    console.log('employeeId', employeeId)

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    )

    console.log('editData', editData)

    setEmployeeData(editData)
  }

  return (
    <div>
      <Paper>
        <Typography variant='h4'> Add New Well</Typography>
        <Grid container p={1} sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Well Number" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Well Location" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Well Installation" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Latitude" variant="outlined" /></Grid>
          <Grid item sm={6} md={3} xs={12} lg={2}><TextField fullWidth label="Longitude" variant="outlined" /></Grid>
        </Grid>

      </Paper>
      <Paper>
        <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', }} mt={1} p={1} >
          <Typography variant='h4'>Notification Setting</Typography>
          <Grid item>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Parameter</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Normal Alert</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Condition</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Description</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Critical Alert</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Condition</TableCell>
                  <TableCell sx={{ fontSize: '1.5rem' }}>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeData?.map(({ employeeId, Parameter, NormalAlert, CriticalAlert, Condition, Condition1,Description }) => (
                  <TableRow key={employeeId}>
                    <TableCell>
                      <Typography>{Parameter}</Typography>
                    </TableCell>

                    <TableCell>
                      <TextField
                        name="NormalAlert"
                        value={NormalAlert}
                        onChange={(e) => onChangeInput(e, employeeId)}
                        variant="outlined"
                        size="small"
                        style={{ width: '90px' }}
                      />
                    </TableCell>
                    <TableCell>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <Select
                          labelId={`condition-label-${employeeId}`}
                          name="Condition1"
                          value={Condition1}
                          onChange={(e) => onChangeInput(e, employeeId)}
                          size="small"
                          style={{ width: '90px' }}
                        >
                          <MenuItem value="High">High</MenuItem>
                          <MenuItem value="Low">Low</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>

                    <TableCell>
                      <TextField
                        name="Description"
                        value={Description}
                        onChange={(e) => onChangeInput(e, employeeId)}
                        variant="outlined"
                        size="small"
                        style={{ width: '450px' }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="CriticalAlert"
                        value={CriticalAlert}
                        onChange={(e) => onChangeInput(e, employeeId)}
                        variant="outlined"
                        size="small"
                        style={{ width: '90px' }}
                      />
                    </TableCell>
                    <TableCell>
                      <FormControl variant="outlined" size="small" fullWidth>
                        <Select
                          labelId={`condition-label-${employeeId}`}
                          name="Condition"
                          value={Condition}
                          onChange={(e) => onChangeInput(e, employeeId)}
                          size="small"
                          style={{ width: '90px' }}
                        >
                          <MenuItem value="High">High</MenuItem>
                          <MenuItem value="Low">Low</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="Description"
                        value={Description}
                        onChange={(e) => onChangeInput(e, employeeId)}
                        variant="outlined"
                        size="small"
                        style={{ width: '450px' }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item p={2} sx={{ display: 'flex', justifyContent: 'flex-end' }} gap={2}>
            <Button variant='contained'
              sx={{
                backgroundColor: 'green',   // Change button color to green
                '&:hover': {
                  backgroundColor: 'darkgreen', // Optional: Change color on hover
                },
                fontSize: '16px',
              }}> Add Well</Button>
            <Button variant='contained'
              sx={{
                backgroundColor: 'green',   // Change button color to green
                '&:hover': {
                  backgroundColor: 'darkgreen', // Optional: Change color on hover
                },
                fontSize: '16px',
              }}>Cancel</Button>
            {/* <Button variant='contained'
              sx={{
                backgroundColor: 'green',   // Change button color to green
                '&:hover': {
                  backgroundColor: 'darkgreen', // Optional: Change color on hover
                },
                fontSize: '16px',
              }}> Delete</Button> */}
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}

export default AddWell
