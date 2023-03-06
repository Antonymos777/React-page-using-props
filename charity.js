import React from 'react';
import './charity.css'
import  PropTypes  from 'prop-types';

export default function Charity({
    name,
    purpose,
    location,
    budget,
    feedback ,
    additional,
    img,
    ShowAddit
    }) {
        Charity.propTypes={
            additional:PropTypes.shape({
                notes:PropTypes.string
            }),
            purpose:PropTypes.string.isRequired,
            location:PropTypes.string.isRequired,
            budget:PropTypes.number.isRequired,
            feedback:PropTypes.number.isRequired,
            ShowAddit:PropTypes.func.isRequired,
          
        }
  return (
    <div className='charity-wrapper'>
    <h2>{name}</h2>
    <h3>{purpose}</h3>
    <h4>{location}</h4>
    <h5>бюджет{budget}$</h5>
    <h3>+{feedback}</h3>
    <div className='Photocard'>
        <img src={img} alt={name}/>
        </div>
    
        <button className='charity-wrapper button' onClick={()=>ShowAddit(additional)}>More info</button>   
    </div>
   

  );
}