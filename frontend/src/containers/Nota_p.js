import React, { Component } from "react";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import LayoutContent from "@iso/components/utility/layoutContent";
import "./estiloNota.css";
import ChatBot from "./chatbots/index"

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <div>
            <div className="t"><b>Solicitud Nota P</b></div>
            <p>La "Nota P" es la calificación utilizada en una determinada asignatura cuando no ha sido posible cumplir con la evaluación final del curso dentro de los plazos establecidos en el Calendario Académico.</p>
            <p>La “Nota P” sólo podrá ser solicitada si se ha cumplido con al menos el 60% de las actividades y evaluaciones del curso.</p>
            <p>Es responsabilidad de el o la estudiante que ha solicitado la “Nota P” completar la o las evaluaciones no rendidas, lo que permitirá reemplazar la “Nota P” por la calificación correspondiente. Si el o la estudiante no cumple dichas exigencias será calificado con nota uno (1,0).</p>
            <p>El plazo máximo para mantener una “Nota P” será de un año.</p>
            <p>Para mayor información puedes solicitar el reglamento de Nota P del alumno de pregrado a <b>dara@uct.cl</b> o bien descargarlo del sitio web: <a href="https://dara.uct.cl/">https://dara.uct.cl</a></p>
          </div>
          <br></br>
          <div className="s1">
            <div className="heading">Realizar Solicitud</div>
            <br></br>
            <div className="rojo1">
            <h5>Selecciona la carrera: </h5>
            <select>
              <option value="0">Lista de carreras...</option>
            </select>
            </div>
            <div>
              <br></br>
              <div className="rojo">
              <h5>Selecciona la acción: </h5>
              <select>
                <option value="0"> Seleccionar acción</option>
                <option value="1"> NUEVA SOLICITUD</option>
                <option value="2"> PRÓRROGA</option>
              </select>
              </div>
            </div>
            <div id="cargas"></div>
          </div>
          <br></br>
          <div className="s2">
            <div className="heading">Solicitudes realizadas y resultados</div>
            <center>
              <h3> Información del Estudiante</h3>
            </center>
            <table className="r">
              <tbody className="ro">
                <tr className="muevete">
                  <th>RUT</th>
                  <th>NOMBRE</th>
                </tr>
              </tbody>
            </table>
            <div>
              <br></br>
              <div className="azol">
              <h5>Selecciona la carrera: </h5>
              <select>
                <option value="0">Lista de carreras...</option>
              </select>
              <div id="cargas2"></div>
              </div>
            </div>
          </div>
          <ChatBot/>
        </LayoutContent>
      </LayoutContentWrapper>

    );
  }
}
