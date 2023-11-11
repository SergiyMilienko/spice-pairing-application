import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'

const SpiceOne = () => {

  const [currentSpiceIndex1, setCurrentSpiceIndex1] = useState(0);

  const switchSpicesRight = () => {
    setCurrentSpiceIndex1((prevIndex) => (prevIndex + 1) % spicesData.length);
  }

  const switchSpicesLeft = () => {
    setCurrentSpiceIndex1((prevIndex) => (prevIndex - 1 + spicesData.length) % spicesData.length);
  }

  return (
    <div class="spice">
      <button onClick={switchSpicesLeft} className="left-arrow">
        <img src="./img/left-arrow.svg" alt=""/>
      </button>
      <div className="content-container">
        <div className="image-box">
          <img src={spicesData[currentSpiceIndex1].image} alt={spicesData[currentSpiceIndex1].name} />
        </div>
        <div className="spice-name">
          {spicesData[currentSpiceIndex1].name}
        </div>
      </div>
      <button onClick={switchSpicesRight} className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
      
    </div>
  )
}

export default SpiceOne