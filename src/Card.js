import React from 'react';
import './Card.css'


const Card = ({id,name, date, time, number, deleteReso}) => {

  return (
    <div className='card'>
      <p>Name:{name}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Guests: {number}</p>
      <button className='cancel-btn' onClick={()=> deleteReso({id})}>Cancel</button>
    </div>
  )
}

export default Card;