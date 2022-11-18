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
export default function Cuerpo() {
  const certificadoAlumnoRegular = async () => {
    await axios
      .post(
        `${endpoint}/documento-alumno-regular`,
        { rut: 201577306, asunto: CertificadoRegular.toString() },
        { responseType: "blob" }
      )
      .then((response) => {
        const file = new Blob([response.data], { type: "application/pdf" });
        const fileURl = URL.createObjectURL(file);
        window.open(fileURl, "_blank");
      });
  };

  const certificadoConducta = async () => {
    await axios
      .post(
        `${endpoint}/documento-conducta`,
        { rut: 201577306 },
        { responseType: "blob" }
      )
      .then((response) => {
        const file = new Blob([response.data], { type: "application/pdf" });
        const fileURl = URL.createObjectURL(file);
        window.open(fileURl, "_blank");
      });
  };

  const certificadoPrestaciones = async () => {
    await axios
      .post(
        `${endpoint}/documento-conducta`,
        { rut: 201577306 },
        { responseType: "blob" }
      )
      .then((response) => {
        const file = new Blob([response.data], { type: "application/pdf" });
        const fileURl = URL.createObjectURL(file);
        window.open(fileURl, "_blank");
      });
  };
  const [Carrera, setCarrera] = React.useState("");
  const [CertificadoRegular, setCertificadoRegular] = React.useState("");
  const [CertificadoAcademico, setCertificadoAcademico] = React.useState("");
  const [Año, setAño] = React.useState("");
  const [Semestre, setSemestre] = React.useState("");
  const [CertificadoConducta, setCertificadoConducta] = React.useState("");
  const [CertificadoPermanencia, setCertificadoPermanencia] =
    React.useState("");
  const [ConvenioServicios, setConvenioServicios] = React.useState("");
  const [ApelacionCausal, setApelacionCausal] = React.useState("");

  function handleChange(event: SelectChangeEvent) {
    setCarrera(event.target.value);
    setSemestre(event.target.value);
    setCertificadoRegular(event.target.value);
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
            Certificado Alumno Regular{" "}
          </Typography>
          <spam>
            {" "}
            <small style={{ float: "right" }}>
              puedes generar 2 Certificados gratuitos
            </small>
          </spam>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>semestre/Año</h1>
            <h2 style={{ float: "right" }}>
              Selecciona para que fines requieres este certificado
            </h2>
            <h1>2/2022</h1>

            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
              <InputLabel id="demo-select-small">
                Certificado Regular
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={CertificadoRegular}
                label="Certificadoregular"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Fines Varios"> Fines Varios</MenuItem>
                <MenuItem value="Beneficios Estudiantiles">
                  Beneficios Estudiantiles{" "}
                </MenuItem>
                <MenuItem value="Seguro Escolar">Seguro Escolar</MenuItem>
                <MenuItem value="Asignacion Familiar">
                  Asignacion Familiar
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              style={{ float: "right" }}
              onClick={certificadoAlumnoRegular}
            >
              generar certificado
            </Button>
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
            Certificado Academico{" "}
          </Typography>
          <spam>
            {" "}
            <small style={{ float: "right" }}>
              puedes generar 1 Certificado gratuito para Historia y para Notas
              por periodo
            </small>
          </spam>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Selecciona</h2>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <FormControlLabel
                label="Historia academica"
                control={<Checkbox />}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <FormControlLabel label="Notas Periodo" control={<Checkbox />} />
            </Box>

            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              size="small"
              style={{ float: "right", top: "-95px" }}
            >
              <InputLabel id="demo-select-small">
                Certificado Academico
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={CertificadoAcademico}
                label="CertificadoAcademico"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Aprobados"> Aprobados</MenuItem>
                <MenuItem value="Todos los cursos">Todos los cursos </MenuItem>
                <MenuItem value="Cursos con Notas">Cursos con Notas</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              size="small"
              style={{ float: "right", top: "-50px", left: "215px" }}
            >
              <InputLabel id="demo-select-small">Selccion Año</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={Año}
                label="Año"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={2019}>2019</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ m: 1, minWidth: 200 }}
              size="small"
              style={{ float: "right", top: "-50px", left: "215px" }}
            >
              <InputLabel id="demo-select-small">Semestre</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={Semestre}
                label="Año"
                onChange={handleChange}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Primer Semestre">Primer Semestre</MenuItem>
                <MenuItem value="Segundo Semestre">Segundo Semestre</MenuItem>
                <MenuItem value="Ambos">Ambos</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              style={{ float: "right", top: "5px", left: "270px" }}
            >
              Descargar Certificado Academico
            </Button>

            <br />
            <br />
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
            Certificado de Conducta{" "}
          </Typography>
          <spam>
            <small style={{ float: "right" }}>
              puedes generar 1 Certificado gratuito{" "}
            </small>
          </spam>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <tr>
              <td>
                <div>Sanciones:</div>
              </td>
              <td id="certificadoConductaSanciones">
                <div style={{ marginleft: "60px" }} id="">
                  Durante su permanencia el(la) estudiante no tuvo sanciones
                  disciplinarias por contravención al Reglamento de
                  Investigaciones Sumarias y Sumarios que instruyen a los
                  Estudiantes de la Universidad Católica de Temuco.
                </div>
              </td>
            </tr>
            <tr>
              <td>Observación:</td>
              <td id="certificadoConductaObservaciones">
                <div style={{ marginleft: "60px" }} id="">
                  Sin Observaciones
                </div>
              </td>
            </tr>
            <br />
            <Button
              variant="contained"
              style={{ float: "right", top: "-40px", left: "-385px" }}
              onClick={certificadoConducta}
            >
              Descargar Certificado Conducta
            </Button>
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
            Certificado de Permanencia{" "}
          </Typography>
          <spam>
            <small style={{ float: "right" }}>
              puedes generar 1 Certificado gratuito{" "}
            </small>
          </spam>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="sancionEstudiante">
              Durante su permanencia el(la) estudiante no tuvo impedimentos
              académicos ni sanciones disciplinarias por contravenir el
              Reglamento del Alumno Regular de la Universidad.
            </div>
            <br />
            <br />
            <Button
              variant="contained"
              style={{ float: "right", top: "-40px", left: "-360px" }}
            >
              Descargar Certificado Permanencia
            </Button>
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
            Certificado Prestacion de Servicios{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Descarga Convenio Prestacion de servicios</h2>
            <br />
            <Button
              variant="contained"
              style={{ float: "right", top: "-40px", left: "-485px" }}
              onClick={certificadoPrestaciones}
            >
              Descargar Convenio
            </Button>
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
            Formulario apelacion para Causal de eliminacion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p style={{ fontSize: "13px;" }}>
              El formulario debe ser completado y entregado impreso en tu
              carrera.{" "}
            </p>
            <a href="https://estudiantes.uct.cl/certificados_firmas_digitales/documentos/formulario_apelacion.pdf">
              {" "}
              Pincha aquí para descargar el formulario
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
