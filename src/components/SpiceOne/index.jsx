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

  const handleDropdownItemClick = (index) => {
    onSelectSpice(index);
    setCurrentSpiceIndexOne(index);
    handleDropdownToggle();
  }

  return (
    <div className="spice">
      <button onClick={switchSpicesLeft} className="left-arrow">
        <img className="left-arrow" src="./img/right-arrow.svg" alt=""/>
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
          <ul className="dropdown-menu">
            {spicesData
            .filter((spice, index) => index !== currentSpiceIndexOne && index !== selectedSpiceIndexTwo)
            .map((spice, index) => (
              <li key={index} onClick={() => handleDropdownItemClick(index)}>
                {spice.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={switchSpicesRight} className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
      
    </div>
  )
}

export default SpiceOne