import React from 'react'
import PageContainer from '../../components/HOC/PageContainer'
import { Button, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import map from '../../../public/assets/map.jpg';

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





function WellMaster() {
    return (
        <PageContainer>
            <Grid container sx={{display:'flex',justifyContent:'space-between'}} p={2}>
                <Grid item p={1}>
                    <Box sx={{ height:'100px' ,width:'100px',border:"2px solid black"}}>
                        <img src={map}  alt='img' height={'100px'} width={'100px'}/>
                    </Box>
                </Grid>
                <Grid item p={4}>
                    <Button variant='contained'>
                        Add New well +
                    </Button>
                </Grid>
            </Grid>
            {/* ------------------Table--------------------------------- */}
            <Grid container>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead >
                            <TableRow  >
                                <StyledTableCell>Well Number</StyledTableCell>
                                <StyledTableCell align="left">Well Location</StyledTableCell>
                                <StyledTableCell align="left">Well Installation</StyledTableCell>
                                <StyledTableCell align="left">Latitude</StyledTableCell>
                                <StyledTableCell align="left">Longitude</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">1</StyledTableCell>
                                    <StyledTableCell align="left">5/6/2024</StyledTableCell>
                                    <StyledTableCell align="left">gbz</StyledTableCell>
                                    <StyledTableCell align="left">yes</StyledTableCell>
                                    {/* <StyledTableCell align="left">1</StyledTableCell> */}


                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </PageContainer>
    )
}

export default WellMaster
