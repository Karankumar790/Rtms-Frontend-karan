import React from 'react'

function Configuration() {
  return (
    <div>
       {/* ----------------------------------Table and Inputs Field-------------------------------- */}
       <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* ------------------------------Table--------------------------------------------- */}
                <Grid item lg={4.5} md={6} sm={6} xs={12}>
                    <Typography variant='h4'>New Born</Typography>
                    <TableContainer component={Paper} sx={{ maxHeight: 620, overflow: 'auto' }}>
                        <Table aria-label="customized table" stickyHeader>
                            <TableHead >
                                <TableRow  >
                                    <StyleTableCell sx={{ fontSize: '18px' }} align="center">Sim No.</StyleTableCell>
                                    <StyleTableCell sx={{ fontSize: '18px' }} align="center">Geo Location</StyleTableCell>
                                    <StyleTableCell sx={{ fontSize: '18px' }} align="center">Configuration</StyleTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row.map((row) => (
                                    <StyleTableRow key={row.name}>
                                        <StyleTableCell align="center">
                                            011
                                        </StyleTableCell>
                                        <StyleTableCell align="center">001</StyleTableCell>
                                        <StyleTableCell align="center"></StyleTableCell>
                                    </StyleTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                {/* ------------------------------Inputs-------------------------------------------- */}
                <Grid item lg={7} md={6} sm={6} xs={12}>
                    <Typography variant='h4'>Configuration</Typography>
                    <Grid container  p={3} spacing={2} mt={0.2} sx={{ border: '1px solid black' }} >
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Typography variant="h6">Sim No.</Typography>
                            <TextField variant="outlined" size="small" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Typography variant="h6">UID</Typography>
                            <TextField variant="outlined" size="small" fullWidth value={""} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Typography variant="h6">Location</Typography>
                            <TextField variant="outlined" size="small" fullWidth value={""} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Typography variant="h6">Installation</Typography>
                            <TextField variant="outlined" size="small" fullWidth value={""} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <Typography variant="h6">Password</Typography>
                            <TextField variant="outlined" size="small" fullWidth value={""} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4}>
                            <FormControl fullWidth size="small">
                                <Typography variant="h6">Protocol</Typography>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-large"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>UP</MenuItem>
                                    <MenuItem value={20}>MP</MenuItem>
                                    <MenuItem value={30}>WB</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* --------------------------------Button--------------------------------------------- */}
            <Grid container mt={2} display={"flex"} justifyContent={"end"} gap={1} flexDirection={{ xs: 'row' }} >
                <Box >
                    <Button variant='contained'
                        sx={{
                            backgroundColor: 'green',   // Change button color to green
                            '&:hover': {
                                backgroundColor: 'darkgreen', // Optional: Change color on hover
                            },
                            fontSize: '16px',
                            width: '150px',
                        }}>
                        Add Device
                    </Button>
                </Box>
                <Box>
                    <Button variant='contained'
                        sx={{
                            backgroundColor: 'green',   // Change button color to green
                            '&:hover': {
                                backgroundColor: 'darkgreen', // Optional: Change color on hover
                            },
                            fontSize: '16px',
                            width: '150px',

                        }}>
                        Cancel
                    </Button>
                </Box>
            </Grid>

    </div>
  )
}

export default Configuration
