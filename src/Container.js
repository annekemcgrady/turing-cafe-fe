import React from 'react';
import Card from './Card.js';
import './Container.css';


const Container = resos => {
const resosToUse = resos.resos
const reservations = resosToUse.map(reso => {
  return <Card key={reso.id}
              name ={reso.name} 
              time={reso.time}
              number={reso.number}
              />

})



  return (
    <div className='container'>
        {reservations}
    </div>
  )
}
 

export default Container;