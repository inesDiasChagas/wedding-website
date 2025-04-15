import React from "react";
import { Link } from "react-router";

import "./DesktopHeader.css";

const DesktopHeader = () => {
  return (
    <nav className='navigation-container'>
      <ul>
        <li>
          <Link to={"/"}>{"Início"}</Link>
        </li>
        <li>
          <Link to={"/schedule"}>{"Horário"}</Link>
        </li>
        <li>
          <Link to={"/registry"}>{"Registro"}</Link>
        </li>
        <li>
          <Link to={"/photos"}>{"Fotos"}</Link>
        </li>
        <li>
          <Link to={"/contacts"}>{"Contatos"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopHeader;
