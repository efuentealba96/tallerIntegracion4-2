import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function Cuerpo() {
    const [Carrera, setCarrera] = React.useState('');
    const [CertificadoRegular, setCertificadoRegular] = React.useState('');
    const [CertificadoAcademico, setCertificadoAcademico] = React.useState('');
    const [Año, setAño]=React.useState('');
    const [CertificadoConducta, setCertificadoConducta] = React.useState('');
    const [CertificadoPermanencia, setCertificadoPermanencia] = React.useState('');
    const [ConvenioServicios, setConvenioServicios] = React.useState('');
    const [ApelacionCausal, setApelacionCausal] = React.useState('');

    function handleChange(event: SelectChangeEvent) {
        setCarrera(event.target.value);
        setCertificadoRegular(event.target.value);
        setCertificadoAcademico(event.target.value);
        setCertificadoConducta(event.target.value);
        setCertificadoPermanencia(event.target.value);
        setConvenioServicios(event.target.value);
        setApelacionCausal(event.target.value);
        setAño(event.target.value);

    }
    return(
        <div>
        <div class="panel-heading">
            <h3 style={{color:"black" , backgroundColor:"#1EA6C8 "}}>Carrera </h3>
           
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
                <MenuItem value={10}> plan 1 $Carrera</MenuItem>
                <MenuItem value={20}>plan 2 $Carrera</MenuItem>
                
            </Select>
        </FormControl>
        </div>
        <div class="panel-heading">
            <h3 style={{color:"black" , backgroundColor:"#1EA6C8 "}}>Certificado alumno regular
                <spam > <small style={{float:"right"}}>puedes generar 2 Certificados gratuitos</small></spam>
            </h3>
            <h1>semestre/Año</h1><h2 style={{float:"right"}}>Selecciona para que fines requieres este certificado</h2>
            <h1>2/2022</h1>

        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Certificado Regular</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={CertificadoRegular}
                label="Certificadoregular"
                onChange={handleChange}
            >
                <MenuItem value="">
                
                </MenuItem>
                <MenuItem value={10}> Fines Varios</MenuItem>
                <MenuItem value={20}>Beneficios Estudiantiles </MenuItem>
                <MenuItem value={30}>Seguro Escolar</MenuItem>
                <MenuItem value={40}>Asignacion Familiar</MenuItem>
            </Select>
            
        </FormControl>
        <Button variant="contained" style={{float:"right"}}>generar certificado</Button>
        
        </div>
        
        
        <div class="panel-heading">
            <h3 style={{color:"black" , backgroundColor:"#1EA6C8 "}}>Certificado Academico
            <spam > <small style={{float:"right"}}>puedes generar 1 Certificado gratuito para Historia y para Notas por periodo</small></spam>
            </h3>
            <h2>Selecciona</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="Historia academica"
                    control={<Checkbox />}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                    label="Notas Periodo"
                    control={<Checkbox />}
                />
            </Box>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small" style ={{float :"right", top:"-95px"}}>
                <InputLabel id="demo-select-small">Certificado Academico</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={CertificadoAcademico}
                    label="CertificadoAcademico"
                    onChange={handleChange}
                >
                    
                    <MenuItem value="">
                    
                    </MenuItem>
                    <MenuItem value={10}> Aprobados</MenuItem>
                    <MenuItem value={20}>Todos los cursos </MenuItem>
                    <MenuItem value={30}>Cursos con Notas</MenuItem>
                    
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small" style ={{float :"right", top:"-50px", left:"215px"}}>
                <InputLabel id="demo-select-small">Selccion Año</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Año}
                    label="Año"
                    onChange={handleChange}
                >
                    
                    <MenuItem value="">
                    
                    </MenuItem>
                    <MenuItem value={10}>2019</MenuItem>
                    <MenuItem value={20}>2020</MenuItem>
                    <MenuItem value={30}>2021</MenuItem>
                    <MenuItem value={40}>2022</MenuItem>
                    
                </Select>
                
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small" style ={{float :"right", top:"-50px", left:"215px"}}>
            <InputLabel id="demo-select-small">Semestre</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={Año}
                    label="Año"
                    onChange={handleChange}
                >
                    
                    <MenuItem value="">
                    
                    </MenuItem>
                    <MenuItem value={10}>Primer Semestre</MenuItem>
                    <MenuItem value={20}>Segundo Semestre</MenuItem>
                    <MenuItem value={30}>Ambos</MenuItem>
                    
                    
                </Select>
            </FormControl>
            <Button variant="contained" style={{float:"right" ,top:"5px", left:"270px"}}>Descargar Certificado Academico</Button>
            <br/><br/>
        </div>
        <div class="panel-heading">
            <h3 style={{color:"black" , backgroundColor:"#1EA6C8 "}}>Certificado de Conducta
                <spam ><small style={{float:"right" }}>puedes generar 1 Certificado gratuito </small></spam>
            </h3>
                <tr>
                    <td><div>Sanciones:</div></td>
                            <td id="certificadoConductaSanciones"><div style={{marginleft:"60px"}} id="">Durante su permanencia el(la) estudiante no tuvo sanciones disciplinarias por contravención al Reglamento de Investigaciones Sumarias y Sumarios que instruyen a los Estudiantes de la Universidad Católica de Temuco.</div>
                    </td>
                </tr>
                <tr>
                    <td>Observación:</td>
                <td id="certificadoConductaObservaciones"><div style={{marginleft:"60px"}} id="">Sin Observaciones</div></td></tr>
                <br/>
                <Button variant="contained" style={{float:"right" ,top:"-40px",left:"-385px"}}>Descargar Certificado Conducta</Button>
        </div>
        <div class="panel-heading">
            <h3 style={{color:"black" , backgroundColor:"#1EA6C8 "}}>Certificado de Permanecia
            <spam ><small style={{float:"right" }}>puedes generar 1 Certificado gratuito </small></spam></h3>
            <div id="sancionEstudiante">Durante su permanencia el(la) estudiante no tuvo impedimentos académicos ni sanciones disciplinarias por contravenir el Reglamento del Alumno Regular de la Universidad.</div>
            <br/><br/>
            <Button variant="contained" style={{float:"right" ,top:"-40px",left:"-360px"}}>Descargar Certificado Permanencia</Button>
        </div>
        <div class="panel-heading">
            <h3 style={{color:"black" , backgroundColor:"#1EA6C8 "}}>Convenio prestacion de servicios</h3>
            <h2 >Descarga Convenio Prestacion de servicios</h2>
            <br/>
            <Button variant="contained" style={{float:"right" ,top:"-40px",left:"-485px"}}>Descargar Convenio</Button>
        </div>
        <div class="panel-heading">
            <h3 style={{color:"black" , backgroundColor:"#1EA6C8 "}}>Formulario apelacion para Causal de eliminacion</h3>
            <p style={{fontSize:"13px;"}}>El formulario debe ser completado y entregado impreso en tu carrera. </p>
            <a href="certificados_firmas_digitales/documentos/formulario_apelacion.pdf" target="_blank"> Pincha aquí para descargar el formulario</a>
        </div>
        </div>
    )

}