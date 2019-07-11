import React, {Component} from 'react';


class Form extends Component {
  constructor(){
    super(
      this.state ={
        name: '',
        date: '',
        time: '',
        number: ''

      }
    )
  }

handleChange =(e)=> {
  this.setState({[e.target.name]: e.target.value})
}

submitReso =()=> {
  
}

render() {
  return (
    <form className='form'>
    <label htmlFor="name">Name</label>
    <input type='text' name='name' value='this.state.title' onChange={()=>this.handleChange}></input>
    <label htmlFor="date">Name</label>
    <input type='text' name='date' value='this.state.date' onChange={()=>this.handleChange}></input>
    <label htmlFor="time">Name</label>
    <input type='text' name='time' value='this.state.time' onChange={()=>this.handleChange}></input>
    <label htmlFor="number">Name</label>
    <input type='text' name='number' value='this.state.number' onChange={()=>this.handleChange}></input>
    <button>Submit Reservation</button>
    </form>
  )
}




}