import React from "react";
import { Link } from "react-router";

import "./DesktopHeader.css";

const DesktopHeader = () => {
  return (
    <nav className='navigation-container'>
      <ul>
        <li>
          <Link to={"/"}>{"Inicio"}</Link>
        </li>
        <li>
          <Link to={"/schedule"}>{"Horario"}</Link>
        </li>
        <li>
          <Link to={"/registry"}>{"Registo"}</Link>
        </li>
        <li>
          <Link to={"/photos"}>{"Fotos"}</Link>
        </li>
        <li>
          <Link to={"/contacts"}>{"Contactos"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopHeader;
