import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

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

  function createData(
    Nombre: string,
    Rut: number,
    registro: number,
    Carrera: string,
    plan: number,
    Mención: string,
    
  ) {
    return {Nombre, Rut, registro, Carrera, plan ,Mención };
  }
  
  const rows = [
    createData('@UserData', 10000000,21000000,'Ing Civil Informatica',3,'Sin Mención')
    
   
  ];

  export default function tableNotaP () {
    return(
        <div>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    
                    <TableRow>
                        
                        <StyledTableCell align="center">Estudiante</StyledTableCell>
                        <StyledTableCell align="center">Rut</StyledTableCell>
                        <StyledTableCell align="center">Registro</StyledTableCell>
                        <StyledTableCell align="center">Carrera</StyledTableCell>
                        <StyledTableCell align="center">Plan</StyledTableCell>
                        <StyledTableCell align="center">Mención</StyledTableCell>
                        
                        
                    </TableRow>
                    
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        
                        <TableCell align="center">{row.Nombre}</TableCell>
                        <TableCell align="center">{row.Rut}</TableCell>
                        <TableCell align="center">{row.registro}</TableCell>
                        <TableCell align="center">{row.Carrera}</TableCell>
                        <TableCell align="center">{row.plan}</TableCell>
                        <TableCell align="center">{row.Mención}</TableCell>
                       
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <br/>
                <h2>SOLICITUDES REALIZADAS</h2>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    

                </Table>
                </TableContainer>
               




        </div>



    )



}