import React from 'react';
import './Card.css'


const Card= ({id, name, date, time, number}) => {

  return (
    <div className='card'>
      <h3>Name:{name}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Guests: {number}</p>
    </div>
  )
}

export default Card;