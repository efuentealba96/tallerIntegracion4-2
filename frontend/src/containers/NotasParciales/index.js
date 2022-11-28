import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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


function createData(
    Descripcion: string,
    fecha: string,
    porcentaje: number,
    Nota: number,
    TipoEvaluacion: string,
  ) {
    return {Descripcion, fecha, porcentaje, Nota, TipoEvaluacion };
  }
  
  const rows = [
    createData('INFO-1147',"15/16/2022",20,50,'Prueba')
    
   
  ];
  function createData2(
    Nclases: number,
    fecha2: Date,
    HoraInicio: number,
    asistencia: number,
    
  ) {
    return {Nclases,fecha2,HoraInicio,asistencia };
  }
  
  const rows2 = [
    createData2()
    
   
  ];

export default function SimpleAccordion() {
    const [Carrera, setCarrera] = React.useState('');
    const[Semestre,setSemestre]=React.useState('');
    const[Curso,setCurso]=React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setCarrera(event.target.value);
        setSemestre(event.target.value);
        setCurso(event.target.value);
    };
  
    return(
        <div>
            <Accordion style={{float:"scroll"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{color:"black" , backgroundColor:"#1EA6C8 "}}
                >
                <Typography >Notas Parciales</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <h1>Seleccion de Carrera:</h1><br/>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Carrera</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Carrera}
                    label="Carrera"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>plan2 Ingeneria Civl Informatica</MenuItem>
                    
                </Select>
                </FormControl>
                <br/>
                <br/><h1>Seleccion de Semestre: </h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Semestre</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Semestre}
                    label="Semestre"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Primer Semestre</MenuItem>
                    <MenuItem value={20}>Segundo Semestre</MenuItem>
                    
                </Select>
                </FormControl>
                
                <br/>
                <br/><h1>Seleccion de Curso: </h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Curso</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Curso}
                    label="Curso"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>teoria de grafos</MenuItem>
                    <MenuItem value={20}>arquitectura de hardware</MenuItem>
                    
                </Select>
                </FormControl>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        
                        <StyledTableCell align="center" >Descripcion</StyledTableCell>
                        <StyledTableCell align="center">fecha</StyledTableCell>
                        <StyledTableCell align="center">Nota</StyledTableCell>
                        <StyledTableCell align="center">porcentaje</StyledTableCell>
                        <StyledTableCell align="center">Tipo de evaluacion</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        <TableCell align="center" >{row.Descripcion}</TableCell>
                        <TableCell align="center">{row.fecha}</TableCell>
                        <TableCell align="center">{row.Nota}</TableCell>
                        <TableCell align="center">{row.porcentaje}</TableCell>
                        <TableCell align="center">{row.TipoEvaluacion}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{color:"black" , backgroundColor:"#1EA6C8 "}}
                >
                <Typography >Asistencia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Carrera</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Carrera}
                    label="Carrera"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>plan2 Ingeneria Civl Informatica</MenuItem>
                    
                </Select>
                </FormControl>
                <br/>
                <br/><h1>Seleccion de Semestre: </h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Semestre</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Semestre}
                    label="Semestre"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Primer Semestre</MenuItem>
                    <MenuItem value={20}>Segundo Semestre</MenuItem>
                    
                </Select>
                </FormControl>
                
                <br/>
                <br/><h1>Seleccion de Curso: </h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Curso</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Curso}
                    label="Curso"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>teoria de grafos</MenuItem>
                    <MenuItem value={20}>arquitectura de hardware</MenuItem>
                    
                </Select>
                </FormControl>

                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        
                        <StyledTableCell align="center">N° clases</StyledTableCell>
                        <StyledTableCell align="center">fecha</StyledTableCell>
                        <StyledTableCell align="center">Hora Inicio</StyledTableCell>
                        <StyledTableCell align="center">Asistencia</StyledTableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    Docente no ha ingresado al sistema de Calificaciones
                    {rows.map((rows2) => (
                        <TableRow
                        key={rows2.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        <TableCell align="center">{rows2.Nclases}</TableCell>
                        <TableCell align="center">{rows2.fecha2}</TableCell>
                        <TableCell align="center">{rows2.HoraInicio}</TableCell>
                        <TableCell align="center">{rows2.asistencia}</TableCell>
                       
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}