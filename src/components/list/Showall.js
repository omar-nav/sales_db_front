import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Showall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sales: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/showall')
      .then(res => {
        this.setState({ sales: res.data });
        console.log(this.state.sales);
      });
  }

  render() {
    return (
      <div className="container">
        <div >
          <div >
            <h3 >
              Listado de ventas
            </h3>
          </div>
          <div className="showall">
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>mes</th>
                  <th>año</th>
                  <th>vendedor</th>
                  <th>monto</th>
                  <th>cantidad</th>
                  <th>equipo</th>
                  <th>alcadia</th>
                </tr>
              </thead>
              <tbody>
                {this.state.sales.map(sale =>
                  <tr>
                    <td><Link to={`/show/${sale._id}`}> mostrar fila &nbsp;&nbsp;</Link></td>
                    <td>{sale.mes}</td>
                    <td>{sale.año}</td>
                    <td>{sale.vendedor}</td>
                    <td>{sale.monto}</td>
                    <td>{sale.cantidad}</td>
                    <td>{sale.equipo}</td>
                    <td>{sale.alcadia}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Showall;
