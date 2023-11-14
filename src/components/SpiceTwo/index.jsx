import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'

const SpiceTwo = ( { selectedSpiceIndexOne, onSelectSpice }) => {
  
  const [currentSpiceIndexTwo, setCurrentSpiceIndexTwo] = useState(1);

  const switchSpicesRight = () => {
    let nextIndex = (currentSpiceIndexTwo + 1) % spicesData.length;
    if (nextIndex !== selectedSpiceIndexOne) {
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexTwo(nextIndex)
    } else {
      nextIndex = (currentSpiceIndexTwo + 2) % spicesData.length;
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexTwo(nextIndex);
    }
  }

  const switchSpicesLeft = () => {
    let nextIndex = (currentSpiceIndexTwo - 1 + spicesData.length) % spicesData.length;
    if (nextIndex !== selectedSpiceIndexOne) {
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexTwo(nextIndex)
    } else {
      nextIndex = (currentSpiceIndexTwo - 2) % spicesData.length;
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexTwo(nextIndex);
    }
    
  }

  return (
    <div class="spice">
      <button onClick={switchSpicesLeft} className="left-arrow">
        <img src="./img/left-arrow.svg" alt=""/>
      </button>
      <div className="content-container">
        <div className="image-box">
          <img src={spicesData[currentSpiceIndexTwo].image} alt={spicesData[currentSpiceIndexTwo].name} />
        </div>
        <div className="spice-name">
          {spicesData[currentSpiceIndexTwo].name}
        </div>
      </div>
      <button onClick={switchSpicesRight} className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
    </div>
  )
}

export default SpiceTwo