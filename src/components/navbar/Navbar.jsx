"use client";
import {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import "./Navbar-estilo.css"

export function Navbarr(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (<>
    <div className="navbar-mobile">
      <Navbar style={{backgroundColor:"#101518"}}>
        <NavbarToggler style={{ backgroundColor: 'white', padding:"3px" }} onClick={toggleNavbar} className="me-2" />
        <Collapse className='nav-toggle-fondo' isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink className='nav-item' href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-item' href="C:\react\projects\nombre\src\pages\especialidades\especialidades.jsx">Especialidades</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-item' href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Galeria</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-item' href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Inscripciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className='nav-item'href="C:\react\projects\nombre\src\pages\inicio\Inicio.jsx">Contacto</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    <div className="navbar-pc">

        <ul className="navbar-pc-ul">
          <li className='navbar-pc-li'><a className='navbar-a' href="">Inicio</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Especialidades</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Galeria</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Inscripciones</a></li>
          <li className='navbar-pc-li'><a className='navbar-a' href="">Contacto</a></li>
        </ul>

    </div>


    </>
  );
}
