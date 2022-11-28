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
    Correo: string,
    Sexo: string,
    NombreAdicional: string,
    NivelEducacion: string,
    CodigoPostal: number,
    numerotelefonico: number,
    empresa: string,
    cargo : string,
    departamento: string,
  ) {
    return {Nombre, Correo, Sexo, NombreAdicional, NivelEducacion , CodigoPostal , numerotelefonico , empresa , cargo , departamento};
  }
  
  const rows = [
    createData('@UserData','user@alu.uct.cl','@sexo','@adicionalName','instituto de estudios superiores','00000000' , '569000000','uct','cargo','departamento')
    
   
  ];

export default function table () {
    return(
        <div>
            <h2 bb-translate="">Información básica</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        
                        <StyledTableCell align="center">Nombre</StyledTableCell>
                        <StyledTableCell align="center">Correo</StyledTableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        <TableCell align="center">{row.Nombre}</TableCell>
                        <TableCell align="center">{row.Correo}</TableCell>
                       
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <hr/><br/>
                <h2 bb-translate="">Información Adicional</h2>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        
                        <StyledTableCell align="center">Direccion Postal</StyledTableCell>
                        <StyledTableCell align="center">Numero Telefonico</StyledTableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        <TableCell align="center">{row.CodigoPostal}</TableCell>
                        <TableCell align="center">{row.numerotelefonico}</TableCell>
                       
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <hr/><br/>
                <h2 bb-translate="">Información Laboral</h2>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        
                        <StyledTableCell align="center">Empresa</StyledTableCell>
                        <StyledTableCell align="center">Cargo</StyledTableCell>
                        <StyledTableCell align="center">Departamento</StyledTableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        <TableCell align="center">{row.empresa}</TableCell>
                        <TableCell align="center">{row.cargo}</TableCell>
                        <TableCell align="center">{row.departamento}</TableCell>
                       
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>




        </div>



    )



}