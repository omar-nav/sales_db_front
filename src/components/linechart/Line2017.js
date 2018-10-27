import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
import axios from 'axios';

// define global variables for value population
let meses = null;
let anyos = null;
let montos = null;
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


class Line2017 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      sales: []
    };
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
      sales: []
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3000/showall')
      .then(res => {
        this.setState({ sales: res.data });
        // an array of objects
        meses = this.state.sales.map(sale => sale.mes);
        anyos = this.state.sales.map(sale => sale.año);
        montos = this.state.sales.map(sale => sale.monto);
        //sumar el monto de todos los meses
        function sumarElMontoPorMes(meses, montos) {
          //si es enero agregar el valor a la variable
          for (let i = 0; i < meses.length; i++) {
            if (meses[i] === "enero" && anyos[i] === "2017") {
              montoDeEnero += parseInt(montos[i]);
            }
            else if (meses[i] === "febrero" && anyos[i] === "2017") {
              montoDeFebrero += parseInt(montos[i]);
            }
            else if (meses[i] === "marzo" && anyos[i] === "2017") {
              montoDeMarzo += parseInt(montos[i]);
            }
            else if (meses[i] === "abril" && anyos[i] === "2017") {
              montoDeAbril += parseInt(montos[i]);
            }
            else if (meses[i] === "mayo" && anyos[i] === "2017") {
              montoDeMayo += parseInt(montos[i]);
            }
            else if (meses[i] === "junio" && anyos[i] === "2017") {
              montoDeJunio += parseInt(montos[i]);
            }
            else if (meses[i] === "julio" && anyos[i] === "2017") {
              montoDeJulio += parseInt(montos[i]);
            }
            else if (meses[i] === "agosto" && anyos[i] === "2017") {
              montoDeAgosto += parseInt(montos[i]);
            }
            else if (meses[i] === "septiembre" && anyos[i] === "2017") {
              montoDeSeptiembre += parseInt(montos[i]);
            }
            else if (meses[i] === "octubre" && anyos[i] === "2017") {
              montoDeOctubre += parseInt(montos[i]);
            }
            else if (meses[i] === "noviembre" && anyos[i] === "2017") {
              montoDeNoviembre += parseInt(montos[i]);
            }
            else if (meses[i] === "diciembre" && anyos[i] === "2017") {
              montoDeDiciembre += parseInt(montos[i]);
            }
            // include null validation
            else {
              montoDeDiciembre += parseInt(0);
            }
          }
        }
        sumarElMontoPorMes(meses, montos);
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
          <h1 className="lineChartTitle">Ventas por mes durante 2017</h1>

          <button className="displayChart" onClick={this.toggleHidden.bind(this)} >
            Mostrar gráfica
        </button>
          <div>
            {this.state.isHidden &&
              <img className="loadingImage" src="https://res.cloudinary.com/davd4ynha/image/upload/v1540342369/loading.gif" alt="Loading"
                width={300} height={300}></img>
            }
            {!this.state.isHidden && <LineChart
              width={600}
              height={400}
              data={data}
              xLabel="Mes"
              yLabel="$ MXN"
              hideYLabel="true"
              onPointHover={(obj) => `mes: ${obj.x}<br />monto: ${obj.y}`}
            />}
          </div>
        </div>
      </div>
    );
  }
}

export default Line2017;