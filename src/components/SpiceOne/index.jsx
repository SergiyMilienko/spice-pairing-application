import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'

const SpiceOne = ( { selectedSpiceIndexTwo, onSelectSpice }) => {

  const [currentSpiceIndexOne, setCurrentSpiceIndexOne] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const switchSpicesRight = () => {
    let nextIndex = (currentSpiceIndexOne + 1) % spicesData.length;
    if (nextIndex !== selectedSpiceIndexTwo) {
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexOne(nextIndex);
    } else {
      nextIndex = (currentSpiceIndexOne + 2) % spicesData.length;
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexOne(nextIndex);
    }
  }

  const switchSpicesLeft = () => {
    let nextIndex = (currentSpiceIndexOne - 1 + spicesData.length) % spicesData.length;
    if (nextIndex !== selectedSpiceIndexTwo) {
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexOne(nextIndex);
    } else {
      nextIndex = (currentSpiceIndexOne - 2 + spicesData.length) % spicesData.length;
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexOne(nextIndex);
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
          <img src={spicesData[currentSpiceIndexOne].image} alt={spicesData[currentSpiceIndexOne].name} />
        </div>
        <div className="spice-name">
          <span>{spicesData[currentSpiceIndexOne].name}</span>
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

export default SpiceOne