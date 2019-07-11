import React from 'react';
import './Card.css'


const Card= ({name, date, time, number}) => {

  return (
    <div className='card'>
      <p>Name:{name}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Guests: {number}</p>
      <button className='cancel-btn'>Cancel</button>
    </div>
  )
}

export default Card;