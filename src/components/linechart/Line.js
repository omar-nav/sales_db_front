import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
import axios from 'axios';

// define global variables for value population
let meses = null;
let anyos = null;
let vendedores = null;
let montos = null;
let cantidades = null;
let equipos = null;
let alcadia = null;
// variables para sumar los montos de cada mes
let montoDeEnero = 0;
let montoDeFebrero = 0;
let montoDeMarzo = 0;
let montoDeAbril = 0;
let montoDeMayo = 0;
let montoDeJunio = 0;
let montoDeJulio = 0;
let montoDeAgosto = 0;
let montoDeSeptiembre = 0;
let montoDeOctubre = 0;
let montoDeNoviembre = 0;
let montoDeDiciembre = 0;


class Line extends Component {

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
        // an array of objects
        meses = this.state.sales.map(sale => sale.mes);
        anyos = this.state.sales.map(sale => sale.año);
        vendedores = this.state.sales.map(sale => sale.cantidad);
        montos = this.state.sales.map(sale => sale.monto);
        cantidades = this.state.sales.map(sale => sale.cantidad);
        equipos = this.state.sales.map(sale => sale.equipo);
        alcadia = this.state.sales.map(sale => sale.alcadia);

        console.log(meses)
        console.log(anyos)

        //sumar el monto de todos los meses
        function sumarElMontoPorMes(meses, montos) {
          //si es enero agregar el valor a la variable
          for (let i = 0; i < meses.length; i++) {
            if (meses[i] === "enero" && anyos[i] === "2017") {
              montoDeEnero += parseFloat(montos[i])
            }
            else if (meses[i] === "febrero" && anyos[i] === "2017") {
              montoDeFebrero += parseFloat(montos[i])
            }
            else if (meses[i] === "marzo" && anyos[i] === "2017") {
              montoDeMarzo += parseFloat(montos[i])
            }
            else if (meses[i] === "abril" && anyos[i] === "2017") {
              montoDeAbril += parseFloat(montos[i])
            }
            else if (meses[i] === "mayo" && anyos[i] === "2017") {
              montoDeMayo += parseFloat(montos[i])
            }
            else if (meses[i] === "junio" && anyos[i] === "2017") {
              montoDeJunio += parseFloat(montos[i])
            }
            else if (meses[i] === "julio" && anyos[i] === "2017") {
              montoDeJulio += parseFloat(montos[i])
            }
            else if (meses[i] === "agosto" && anyos[i] === "2017") {
              montoDeAgosto += parseFloat(montos[i])
            }
            else if (meses[i] === "septiembre" && anyos[i] === "2017") {
              montoDeSeptiembre += parseFloat(montos[i])
            }
            else if (meses[i] === "octubre" && anyos[i] === "2017") {
              montoDeOctubre += parseFloat(montos[i])
            }
            else if (meses[i] === "noviembre" && anyos[i] === "2017") {
              montoDeNoviembre += parseFloat(montos[i])
            }
            else if (meses[i] === "diciembre" && anyos[i] === "2017") {
              montoDeDiciembre += parseFloat(montos[i])
            }
            // include null validation
            else {
              montoDeDiciembre += 0;
            }
          }
        }
        sumarElMontoPorMes(meses, montos);
        console.log(montoDeAbril)
      });
  }

  render() {
    const data = [
      {
        color: "steelblue",
        points: [{ x: 1, y: montoDeEnero }, { x: 2, y: montoDeFebrero }, { x: 3, y: montoDeMarzo }, { x: 4, y: montoDeAbril },
        { x: 5, y: montoDeMayo }, { x: 6, y: montoDeJunio }, { x: 7, y: montoDeJulio }, { x: 8, y: montoDeAgosto },
        { x: 9, y: montoDeSeptiembre }, { x: 10, y: montoDeOctubre }, { x: 11, y: montoDeNoviembre }, { x: 12, y: montoDeDiciembre }]
      }
    ];
    return (

      <div>
        <div className="App">
          <h1>Ventas por mes durante 2017</h1>
          <LineChart
            width={600}
            height={400}
            data={data}
          />
        </div>

      </div>

    );
  }
}

export default Line;


