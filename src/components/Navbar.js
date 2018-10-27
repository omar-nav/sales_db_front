import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <li id="logo-container">
              <a href="https://www.keyence.com.mx/" target="_blank" rel="noopener noreferrer"><img id="logo" src="https://res.cloudinary.com/davd4ynha/image/upload/v1540307121/logo.png"
                alt="Keyence Logo"></img>
              </a>
            </li>
            <li><Link to={`/showall`}>Lista de Ventas</Link></li>
            <li><Link to={`/create`}>Agregar Venta</Link></li>
            <li><Link to={`/line2017`}>Gráfica 2017</Link></li>
            <li><Link to={`/line2018`}>Gráfica 2018</Link></li>
            <li><a href="https://mapa-de-ventas.herokuapp.com/">Mapa de Ventas</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;