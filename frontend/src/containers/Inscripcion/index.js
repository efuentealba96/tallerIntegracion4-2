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
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Inscripcion from './index3';


function createData(
    Curso: string,
    Seccion: string,
    Profesor: string,
    Sala: string,
    Horario: string,
  ) {
    return {Curso, Seccion, Profesor, Sala, Horario };
  }
  
  const rows = [
    createData('INFO-1147/Teoria de la Computacion','Sec2','Marcos Levano','Eb204','Lunes-8.30,Miecoles-11.40',)
    
   
  ];
  
export default function SimpleAccordion() {
    const [Carrera, setCarrera] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setCarrera(event.target.value);
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
                <Typography >Inscripcion de Ramos</Typography>
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

                <Inscripcion/>
                <button style={{float:"right" , backgroundColor:"#1EA6C8 "}}>Añadir Cursos</button>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Carrera </TableCell>
                        <TableCell align="right">Curso</TableCell>
                        <TableCell align="right">Seccion</TableCell>
                        <TableCell align="right">Profesor</TableCell>
                        <TableCell align="right">Sala</TableCell>
                        <TableCell align="right">Horario</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.Curso}</TableCell>
                        <TableCell align="right">{row.Seccion}</TableCell>
                        <TableCell align="right">{row.Profesor}</TableCell>
                        <TableCell align="right">{row.Sala}</TableCell>
                        <TableCell align="right">{row.Horario}</TableCell>
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