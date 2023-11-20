import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'

const SpiceTwo = ( { selectedSpiceIndexOne, onSelectSpice }) => {
  
  const [currentSpiceIndexTwo, setCurrentSpiceIndexTwo] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          <span>{spicesData[currentSpiceIndexTwo].name}</span>
          <button onClick={handleDropdownToggle} itemID="bottom-arrow">
            <img className="choose" src="./img/right-arrow.svg" alt=""/>
          </button>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {spicesData.map((spice, index) => (
              <p key={index} onClick={() => onSelectSpice(index)}>
                {spice.name}
              </p>
            ))}
          </div>
        )}
      </div>
      <button onClick={switchSpicesRight} className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
    </div>
  )
}

export default SpiceTwo