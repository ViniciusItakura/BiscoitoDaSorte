import React, { Component } from 'react';
import '../src/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4', 'Frase 5'];
  }

  quebraBiscoito() {
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[randomNumber] + ' "';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className='img'></img>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;