import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <li id="logo-container">
              <a href="https://www.keyence.com.mx/"><img id="logo" src="https://res.cloudinary.com/davd4ynha/image/upload/v1540307121/logo.png"
                alt="Keyence Logo"></img>
              </a>
            </li>
            <li><a href="/showall">Lista de Ventas</a></li>
            <li><a href="/create">Agregar Venta</a></li>
            <li><a href="/line2017">Gráfica 2017</a></li>
            <li><a href="/line2018">Gráfica 2018</a></li>
            <li><a href="https://mapa-de-ventas.herokuapp.com/">Mapa de Ventas</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;