import React from "react";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { endpoint, axios } from "../../services/http";
import Table from "./tablaNotap"
export default function Cuerpo() {
  

  
  
  const [Carrera, setCarrera] = React.useState("");
  const [Accion, setAccion] = React.useState("");
  const [CertificadoAcademico, setCertificadoAcademico] = React.useState("");
  const [Año, setAño] = React.useState("");
  const [Semestre, setSemestre] = React.useState("");
  const [CertificadoConducta, setCertificadoConducta] = React.useState("");
  const [CertificadoPermanencia, setCertificadoPermanencia] =React.useState("")
    React.useState("");
  const [ConvenioServicios, setConvenioServicios] = React.useState("");
  const [ApelacionCausal, setApelacionCausal] = React.useState("");

  function handleChange(event: SelectChangeEvent) {
    setCarrera(event.target.value);
    setSemestre(event.target.value);
    setAccion(event.target.value);
    setCertificadoAcademico(event.target.value);
    setCertificadoConducta(event.target.value);
    setCertificadoPermanencia(event.target.value);
    setConvenioServicios(event.target.value);
    setApelacionCausal(event.target.value);
    setAño(event.target.value);
  }
  return (
    <div>
      <Accordion style={{ float: "scroll" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ color: "black", backgroundColor: "#1EA6C8 " }}
        >
          <Typography style={{ fontWeight: "bold" }}>
            Realizar Solicitud{" "}
          </Typography> 
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">
                Seleccion Carrera
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={Carrera}
                label="Carrera"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Fines Varios"> Ingeneria Civil Informatica</MenuItem>
                
                
                
              </Select>
            </FormControl>
            
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">
                Seleccion Accion
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={Accion}
                label="Accion"
                onChange={handleChange}
              >
                <MenuItem value="Nueva Solicitud">Nueva Solicitud</MenuItem>
                <MenuItem value="Prórroga">Prórroga</MenuItem>
                
                
                
              </Select>
            </FormControl>
            
            
          </Typography>
        </AccordionDetails>
     </Accordion>
     <Accordion style={{ float: "scroll" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ color: "black", backgroundColor: "#1EA6C8 " }}
        >
          <Typography style={{ fontWeight: "bold" }}>
            Solicitudes realizadas y resultados {" "}
          </Typography> 
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">
                Seleccion Carrera
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={Carrera}
                label="Carrera"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Fines Varios"> Ingeneria Civil Informatica</MenuItem>
                
                
                
              </Select>
            </FormControl>
            
            <hr/>
            <h1>DATOS DE LA SOLICITUD</h1>
            <br/>
            <Table/>
            

          </Typography>
        </AccordionDetails>
     </Accordion>
    </div>
  )
}