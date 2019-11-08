import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card.js'

class App extends React.Component {

  state = {
    titulo: "Mi trabajo de MCGA"
  }

  componentWillMount=() => {
    console.log('se está por montar dibujar el componente')
  }

  componentDidMount=() => {
    console.log('Ya se dibujó el componente')
  }

render(){
  console.log('se está dibujando el componente')
  return(
    <div>

    <button onClick={
      () => {
      this.setState({titulo : "Nuevo Título"})
      }

        }>
          Cambiar título
    </button>
    <Card text = {this.state.titulo}></Card>

    </div>
  )
}

componentWillReceiveProps(nextProps, nextState) {
console.log('Ya se actualizó el componente')
console.log(nextState)
}

shouldComponentUpdate(nextProps, nextState) {
console.log(nextState)
return false
}

}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
