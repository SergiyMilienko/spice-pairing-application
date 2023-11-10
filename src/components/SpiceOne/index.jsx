import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'
import SpiceNameOne from '../SpiceNameOne';

const SpiceOne = () => {

  const [currentSpiceIndex1, setCurrentSpiceIndex1] = useState(0);

  const switchSpices = () => {
    setCurrentSpiceIndex1((prevIndex) => (prevIndex + 1) % spicesData.length);
  }

  return (
    <div class="spice">
      <button className="left-arrow">
        <img src="./img/left-arrow.svg" alt=""/>
      </button>
      <div className="content-container">
        <div className="image-box">
          <img src={spicesData[currentSpiceIndex1].image} alt={spicesData[currentSpiceIndex1].name} />
        </div>
        <SpiceNameOne name={spicesData[currentSpiceIndex1].name}/>
      </div>
      <button  onClick={switchSpices} className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
      
    </div>
  )
}

export default SpiceOne