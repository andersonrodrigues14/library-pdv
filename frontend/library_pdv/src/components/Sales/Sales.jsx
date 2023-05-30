import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useSales } from '../../hooks/pages/useSales';

function Sales(){
    const { listSales } = useSales();
    
    return(
        <>
        <Box height={100}>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight:'bold'}}>Nota Fiscal</TableCell>
                                <TableCell align="center" sx={{fontWeight:'bold'}}>Cliente</TableCell>
                                <TableCell align="center" sx={{fontWeight:'bold'}}>Vendedor</TableCell>
                                <TableCell align="center" sx={{fontWeight:'bold'}}>Data da Venda</TableCell>
                                <TableCell align="center" sx={{fontWeight:'bold'}}>Valor</TableCell>
                                <TableCell align="center" sx={{fontWeight:'bold'}}>Opções</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listSales.map((listSales) => (
                                <TableRow
                                key={listSales.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {listSales.note_number}
                                </TableCell>
                                <TableCell align="center">{listSales.client}</TableCell>
                                <TableCell align="center">{listSales.seller}</TableCell>
                                <TableCell align="center">{listSales.date}</TableCell>
                                <TableCell align="center">{listSales.protein}</TableCell>
                                <TableCell align="center">
                                    <Button variant="text">
                                         <img src='./icons/ver_itens.png'  alt="ver itens menu"/>
                                    </Button>
                                    <Button>
                                        <img src='./icons/edit.png'  alt="edit menu"/>
                                    </Button>
                                    <Button>
                                        <img src='./icons/delete.png'  alt="delete menu"/>
                                    </Button>
                                </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>   
            </div>
        </Box>
        </>
    );
}

export default Sales;