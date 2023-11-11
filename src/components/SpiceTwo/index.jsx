import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'

const SpiceTwo = () => {
  
  const [currentSpiceIndex2, setCurrentSpiceIndex2] = useState(1);

  const switchSpicesRight = () => {
    setCurrentSpiceIndex2((prevIndex) => (prevIndex + 1) % spicesData.length);
  }

  const switchSpicesLeft = () => {
    setCurrentSpiceIndex2((prevIndex) => (prevIndex - 1 + spicesData.length) % spicesData.length);
  }

  return (
    <div class="spice">
      <button onClick={switchSpicesLeft} className="left-arrow">
        <img src="./img/left-arrow.svg" alt=""/>
      </button>
      <div className="content-container">
        <div className="image-box">
          <img src={spicesData[currentSpiceIndex2].image} alt={spicesData[currentSpiceIndex2].name} />
        </div>
        <div className="spice-name">
          {spicesData[currentSpiceIndex2].name}
        </div>
      </div>
      <button onClick={switchSpicesRight} className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
    </div>
  )
}

export default SpiceTwo