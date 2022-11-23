import React from 'react';
import { ReportWidgetWrapper } from './ReportWidget.styles';
import logo from './../../../assets/images/image2vector.svg'
export default function({ label, details, children }) {
  return (
    <ReportWidgetWrapper className="isoReportsWidget">
      <h3 className="isoWidgetLabel">Nuevo Portal</h3>

      <div className="isoReportsWidgetBar">Hola Comunidad Uct Nuestro primer aviso como NUEVO Portal del estudiante.</div>

      <p className="isoDescription"><img src={logo} style={{width:"200px",height:"200px"}} alt=""></img></p>
    </ReportWidgetWrapper>
  );
}
