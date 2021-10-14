import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card' style={props.style}>
      <div className='card-name'>
        {props.name}
      </div>
      <div className='card-description'>
        {props.description}
      </div>
      <div className='card-image'>
        <img
          alt=''
          src={props.img}
        />
      </div>
      <div className='card-price'>
        Price
        <div className='val'>
          {props.price}
        </div>
      </div>
    </div>
  );
}
