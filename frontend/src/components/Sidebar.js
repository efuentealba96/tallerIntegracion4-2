import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Outlet } from 'react-router-dom';
import pic from "./../logo.png"

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Bienvenido %Usuario%
            <img alt='logo' src={pic} className='logoU'/>
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Solicitud" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Solicitud Nota P</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Inscripcion" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Inscripcion de Cursos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/InformacionAcad" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Información Académica</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/InfoPe" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Información Personal</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Docs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Documentos</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/Contactos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Contactos</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className='cuerpo'>
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Sidebar;