import React, {Component} from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super()
      this.state ={
        name: '',
        date: '',
        time: '',
        number: ''

      }
  }

handleChange =(e)=> {
  this.setState({[e.target.name]: e.target.value})
}

submitReso =(e)=> {
  e.preventDefault()
  const addedReso = {...this.state, id: Date.now()}
  this.props.addReso(addedReso)
}

render() {
  console.log(this.state)
  return (
    <form className='form'>
    <label htmlFor="name">Name</label>
    <input type='text' name='name'value={this.state.title} onChange={this.handleChange}></input>
    <label htmlFor="date">Date</label>
    <input type='date' name='date' value={this.state.date} onChange={this.handleChange}></input>
    <label htmlFor="time">Time</label>
    <input type='time' name='time' value={this.state.time} onChange={this.handleChange}></input>
    <label htmlFor="number">Number</label>
    <input type='text' name='number' value={this.state.number} onChange={this.handleChange}></input>
    <button onClick={this.submitReso}>Submit Reservation</button>
    </form>
  )
}
}

export default Form;




