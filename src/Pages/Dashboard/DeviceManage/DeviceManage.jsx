import React from 'react'
import { Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import well from '/assets/WELL.png'
import manage from '../../../../public/assets/Oil.webp'
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1'),
    createData('2'),
    createData('3'),
    createData('4'),
    createData('5'),
    createData('3'),
    createData('4'),
    createData('5'),
    createData('3'),
    createData('4'),
    createData('5'),
];



function DeviceManage() {
    return (
        <div>
            <Grid container>
                <Typography variant='h4'>Device Manager</Typography>
            </Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} p={2}>
                <Grid item p={1}>
                    <Box sx={{ height: '100px', width: '100px' }}>
                        <img src={manage} alt='img' height={'100px'} width={'100px'} />
                    </Box>
                </Grid>
                <Grid item p={4}>
                    <Link to='/dashboard/AddDevice'>
                        <Button variant='contained' 
                          sx={{
                            backgroundColor: 'green',   // Change button color to green
                            '&:hover': {
                                backgroundColor: 'darkgreen', // Optional: Change color on hover
                            },
                            fontSize: '16px',
                            }}>
                            Add Device +
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            {/* ------------------Table--------------------------------- */}
            <Grid container>
                <TableContainer component={Paper}  sx={{ maxHeight: 620, overflow: 'auto' }}>
                    <Table aria-label="customized table" stickyHeader>
                        <TableHead >
                            <TableRow  >
                                <StyledTableCell sx={{fontSize:'18px'}}> Well Number</StyledTableCell>
                                <StyledTableCell sx={{fontSize:'18px'}} align="left">Well Location</StyledTableCell>
                                <StyledTableCell sx={{fontSize:'18px'}} align="left">Well Installation</StyledTableCell>
                                <StyledTableCell sx={{fontSize:'18px'}} align="left">Lattitude</StyledTableCell>
                                <StyledTableCell sx={{fontSize:'18px'}} align="left">Longitude</StyledTableCell>
                                <StyledTableCell sx={{fontSize:'18px'}} align="left">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">11.171.01.1 </StyledTableCell>
                                    <StyledTableCell align="left">5/6/2024</StyledTableCell>
                                    <StyledTableCell align="left">5886</StyledTableCell>
                                    <StyledTableCell align="left">12254</StyledTableCell>
                                    <StyledTableCell align='left'> 
                                        <IconButton  sx={{ color: 'red', '&:hover': { color: 'darkred' }, marginRight:'5px' }}>
                                        <DeleteForeverIcon/>
                                        </IconButton>
                                        <IconButton sx={{ color: 'darkblue', '&:hover': { color: 'black'}}}>
                                         <EditIcon/>
                                         </IconButton> 
                                         </StyledTableCell>


                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </div>
    )
}

export default DeviceManage
