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

  const handleDropdownItemClick = (index) => {
    onSelectSpice(index);
    setCurrentSpiceIndexTwo(index);
    handleDropdownToggle();
  }

  return (
    <div className="spice">
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
          <ul className="dropdown-menu">
            {spicesData
            .filter((spice, index) => index !== currentSpiceIndexTwo && index !== selectedSpiceIndexOne)
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

export default SpiceTwo