import React, { useState } from 'react'
import './style.css'
import spicesData from '../../data/spicesData'
import { useTranslation } from 'react-i18next';

const SpiceTwo = ( { selectedSpiceIndexOne, onSelectSpice }) => {
  
  const [currentSpiceIndexTwo, setCurrentSpiceIndexTwo] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const switchSpicesRight = () => {
    let nextIndex = (currentSpiceIndexTwo + 1) % spicesData.length;
    while (nextIndex === selectedSpiceIndexOne) {
      nextIndex = (nextIndex + 1) % spicesData.length;
    }
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexTwo(nextIndex)
  }

  const switchSpicesLeft = () => {
    let nextIndex = (currentSpiceIndexTwo - 1 + spicesData.length) % spicesData.length;
      while (nextIndex === selectedSpiceIndexOne) {
        nextIndex = (nextIndex - 1 + spicesData.length) % spicesData.length;
      }
      onSelectSpice(nextIndex)
      setCurrentSpiceIndexTwo(nextIndex)
    }

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (id) => {
    onSelectSpice(id);
    setCurrentSpiceIndexTwo(id);
    handleDropdownToggle();
  }

  return (
    <div className="spice">
      <button onClick={switchSpicesLeft} className="left-arrow">
        <img className="left-arrow" src="./img/right-arrow.svg" alt=""/>
      </button>
      <div className="content-container">
        <div className="image-box">
          <img src={spicesData[currentSpiceIndexTwo].image} alt={spicesData[currentSpiceIndexTwo].name} />
        </div>
        <div className="spice-name">
        <span>{t(`spices.${spicesData[currentSpiceIndexTwo].name.toLowerCase()}`)}</span>
          <button onClick={handleDropdownToggle} id="bottom-arrow">
            <img className="choose" src="./img/right-arrow.svg" alt=""/>
          </button>
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            {spicesData
            .filter((spice, id) => id !== currentSpiceIndexTwo && id !== selectedSpiceIndexOne)
            .map((spice) => (
              <li key={spice.id} onClick={() => handleDropdownItemClick(spice.id)}>
                {t(`spices.${spicesData[spice.id].name.toLowerCase()}`)}
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