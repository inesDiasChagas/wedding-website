import React from "react";
import { Link } from "react-router";

import "./DesktopHeader.css";

const DesktopHeader = () => {
  return (
    <nav className='navigation-container'>
      <ul>
        <li>
          <Link to={"/"}>{"Inicio"}</Link>
          <Link to={"/schedule"}>{"Horario"}</Link>
          <Link to={"/registry"}>{"Registo"}</Link>
          <Link to={"/photos"}>{"Fotos"}</Link>
          <Link to={"/contacts"}>{"Contactos"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopHeader;
