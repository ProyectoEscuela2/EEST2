import "./Navbar-estilo.css"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export function Navbarr(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="C:\react\projects\nombre\src\pages\especialidades\especialidades.jsx">Especialidades</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Galeria</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Inscripciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Historia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Contacto</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
