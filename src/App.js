import React, { Component } from 'react';
import './App.css';
import Container from './Container.js'

class App extends Component {
constructor() {
  super()
  this.state = {
    reservations: [],
    error: ''
  }
}

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response=>response.json())
    .then(reservations => this.setState({reservations: reservations}))
    .catch(error => this.setState({error}))
  }


  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
            {this.state.error && <p>{this.state.erro}</p>}
            <Container resos={this.state.reservations} />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
