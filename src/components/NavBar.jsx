import React from 'react'
import CartWidget from "./CartWidget.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo3 from '../imagenes/logo3.jpg';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-green">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo3} alt="Logo" width="100" height="75" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Conocenos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">servicios</a>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        productos
                    </a>
                        <ul className="dropdown-menu text-center dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Flores</a></li>
                        <li><a className="dropdown-item" href="#">Plantas</a></li>
                        <li><a className="dropdown-item" href="#">Semillas </a></li>
                    </ul>
                </li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </div>
            </div>
        </nav>
        );
  }
  
  
export default NavBar;