
import React from 'react';
import UCTlogo from './../img/UCT_logo.ico'

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink,Outlet} from 'react-router-dom';



export default function Sidebar ()  {
  return (
    
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#0640a5">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/Home" className="text-decoration-none" style={{ color: 'inherit' }}>
            Bienvenido User
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Solicitud"  activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Solicitud Nota P</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Inscripcion" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-plus">Incripcion de Curso</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Documentos" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Documentos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/InfoPersonal" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Informacion Personal</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/InfoAcademica" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-info">Informacion Academica</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Contactos"  activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="fa-solid fa-address-book">Contactos</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
          
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
            <img src={UCTlogo} alt="" style={{heigth :"200px", width:"200px"}}></img>
          </div>
          
        </CDBSidebarFooter>
        
      </CDBSidebar>
      
      <div>
      
    </div> 
          <Outlet></Outlet>
    </div>
    
  )
}

