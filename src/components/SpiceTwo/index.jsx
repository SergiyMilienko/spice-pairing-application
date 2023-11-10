import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'
import SpiceNameTwo from '../SpiceNameTwo';

const SpiceTwo = () => {
  
  const [currentSpiceIndex2, setCurrentSpiceIndex2] = useState(1);

  const switchSpices = () => {
    setCurrentSpiceIndex2((prevIndex) => (prevIndex + 1) % spicesData.length);
  }

  return (
    <div class="spice">
      <button className="left-arrow">
        <img src="./img/left-arrow.svg" alt=""/>
      </button>
      <div className="content-container">
        <div className="image-box">
          <img src={spicesData[currentSpiceIndex2].image} alt={spicesData[currentSpiceIndex2].name} />
        </div>
        <SpiceNameTwo name={spicesData[currentSpiceIndex2].name}/>
      </div>
      <button onClick={switchSpices} className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
    </div>
  )
}

export default SpiceTwo