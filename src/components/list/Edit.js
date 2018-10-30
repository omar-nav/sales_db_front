import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {

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
      });
  }

  onChange = (e) => {
    const state = this.state.sale
    state[e.target.name] = e.target.value;
    this.setState({ sale: state });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { mes, año, vendedor, monto, cantidad, equipo, alcadia } = this.state.sale;

    axios.put('https://sales-db-keyence.herokuapp.com/' + this.props.match.params.id, { mes, año, vendedor, monto, cantidad, equipo, alcadia })
      .then((result) => {
        this.props.history.push("/show/" + this.props.match.params.id)
      });
  }

  render() {
    return (

      <div>
        <div>
          <h3>Agregar Venta</h3>
        </div>
        <div >
          <div className="container">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div class="col-25">
                  <label htmlFor="mes">Mes:</label>
                </div>
                <div className="col-75">
                  <select id="mes" name="mes" type="text" value={this.state.sale.mes} onChange={this.onChange} placeholder="octubre">
                    <option value="enero">enero</option>
                    <option value="febrero">febrero</option>
                    <option value="marzo">marzo</option>
                    <option value="abril">abril</option>
                    <option value="mayo">mayo</option>
                    <option value="junio">junio</option>
                    <option value="julio">julio</option>
                    <option value="agosto">agosto</option>
                    <option value="septiembre">septiembre</option>
                    <option value="octubre">octubre</option>
                    <option value="noviembre">noviembre</option>
                    <option value="diciembre">diciembre</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div class="col-25">
                  <label htmlFor="año">Año:</label>
                </div>
                <div className="col-75">
                  <select id="año" name="año" type="text" value={this.state.sale.año} onChange={this.onChange} placeholder="2018">
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div class="col-25">
                  <label htmlFor="vendedor">Vendedor:</label>
                </div>
                <div className="col-75">
                  <select id="vendedor" name="vendedor" type="text" value={this.state.sale.vendedor} onChange={this.onChange} placeholder="A">
                    <option value="A">A</option>
                    <option value="C">B</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="monto">Monto:</label>
                </div>
                <div class="col-75">
                  <input id="monto" name="monto" type="text" value={this.state.sale.monto} onChange={this.onChange} placeholder="777" />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="cantidad">Cantidad:</label>
                </div>
                <div class="col-75">
                  <input id="cantidad" name="cantidad" type="text" value={this.state.sale.cantidad} onChange={this.onChange} placeholder="33" />
                </div>
              </div>
              <div className="row">
                <div class="col-25">
                  <label htmlFor="equipo">Equipo:</label>
                </div>
                <div className="col-75">
                  <select id="equipo" name="equipo" type="text" value={this.state.sale.equipo} onChange={this.onChange} placeholder="1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div class="col-25">
                  <label htmlFor="alcadia">Alcadía:</label>
                </div>
                <div className="col-75">
                  <select id="alcadia" name="alcadia" type="text" value={this.state.sale.alcadia} onChange={this.onChange} placeholder="Benito Juárez">
                    <option value="Alvaro Obregón">Alvaro Obregón</option>
                    <option value="Azcapotzalco">Azcapotzalco</option>
                    <option value="Benito Juárez">Benito Juárez</option>
                    <option value="Coyoacán">Coyoacán</option>
                    <option value="Cuajimalpa de Morelo">Cuajimalpa de Morelo</option>
                    <option value="Cuahtémoc">Cuahtémoc</option>
                    <option value="Gustavo A Madero">Gustavo A Madero</option>
                    <option value="Iztacalco">Iztacalco</option>
                    <option value="Iztapalapa">Iztapalapa</option>
                    <option value="Magdalena Contreras">Magdalena Contreras</option>
                    <option value="Miguel Hidalgo">Miguel Hidalgo</option>
                    <option value="Milpa Alta">Milpa Alta</option>
                    <option value="Tláhuac">Tláhuac</option>
                    <option value="Tlalpan">Tlalpan</option>
                    <option value="Venustiano Carranza">Venustiano Carranza</option>
                    <option value="Xochimilco">Xochimilco</option>
                  </select>
                </div>
              </div>
              <button onHover="submit" type="submit">Guardar cambios</button>
            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default Edit;
