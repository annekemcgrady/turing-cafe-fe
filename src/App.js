import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';
import Form from './Form.js';

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

  addReso=(newReso)=> {
    console.log('APP', newReso)
    // this.setState({reservations : [...this.state.reservations, newReso]})
    this.postNewReso(newReso)
  }

  postNewReso =(newReso) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newReso)
    }

    fetch('http://localhost:3001/api/v1/reservations', options)
    .then(response => response.json())
    .then(res => fetch(`http://localhost:3001/api/v1/reservations/${res.id}`))
    .then(thisNewReso => this.setState({reservations: [...this.state.reservations, thisNewReso]}))
    .catch(error => this.setState({error}))
  }

deleteReso = (id)=> {
  const filteredResos = this.state.reservations.filter(reso=> reso.id !==id)
  this.setState({reservations: filteredResos})
}

  render() {
    console.log(this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
            {this.state.error && <p>{this.state.erro}</p>}
            <Form addReso={this.addReso} />
            <Container resos={this.state.reservations} deleteReso={this.deleteReso}/>
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
