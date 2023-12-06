import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <img src={require('./assets/biscoito.png')}></img>
      </div>
    );
  }
}

export default App;