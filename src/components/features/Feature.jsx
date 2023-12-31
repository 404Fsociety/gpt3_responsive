import React from 'react';
import './Feature.css';


const Features = ({title , text}) => (
  <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
        
      </div>
    </div>
);

export default Features;
