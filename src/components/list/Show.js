import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sale: {}
    };
  }

  componentDidMount() {
    axios.get('https://sales-db-keyence.herokuapp.com/' + this.props.match.params.id)
      .then(res => {
        this.setState({ sale: res.data });
        console.log(this.state.sale);
      });
  }

  delete(id) {
    console.log(id);
    axios.delete('https://sales-db-keyence.herokuapp.com/' + id)
      .then((result) => {
        this.props.history.push("/showall")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              vendedor {this.state.sale.vendedor}
            </h3>
          </div>
          <div>
            <div className="row">
              <div className="show-individual">Mes</div>
              <p className="show-individual2"> {this.state.sale.mes}</p>
            </div>
            <div className="row">
              <div className="show-individual">Año</div>
              <p className="show-individual2"> {this.state.sale.año}</p>
            </div>

            <div className="row">
              <div className="show-individual">Vendedor </div>
              <p className="show-individual2">{this.state.sale.vendedor}</p>
            </div>
            <div className="row">
              <div className="show-individual">Monto</div>
              <p className="show-individual2">{this.state.sale.monto}</p>

            </div>
            <div className="row">
              <div className="show-individual">Cantidad </div>
              <p className="show-individual2">{this.state.sale.cantidad}</p>

            </div>
            <div className="row">
              <div className="show-individual">Equipo </div>
              <p className="show-individual2">{this.state.sale.equipo}</p>

            </div>
            <div className="row">
              <div className="show-individual">Alcadía </div>
              <p className="show-individual2">{this.state.sale.alcadia}</p>

            </div>
            <Link to={`/edit/${this.state.sale._id}`} className="btn btn-success">Editar</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.sale._id)}>Borrar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
