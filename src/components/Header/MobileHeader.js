import React, { useState } from "react";
import { Link } from "react-router";
import "./MobileHeader.css";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='mobile-header'>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className='fullscreen-menu'>
          <nav className='menu-content'>
            <ul>
              <li>
                <Link to='/' onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/schedule' onClick={closeMenu}>
                  Horario
                </Link>
              </li>
              <li>
                <Link to='/registry' onClick={closeMenu}>
                  Registo
                </Link>
              </li>
              <li>
                <Link to='/photos' onClick={closeMenu}>
                  Fotos
                </Link>
              </li>
              <li>
                <Link to='/contacts' onClick={closeMenu}>
                  Contactos
                </Link>
              </li>
            </ul>
          </nav>
          <div className='overlay-bg' onClick={closeMenu}></div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
