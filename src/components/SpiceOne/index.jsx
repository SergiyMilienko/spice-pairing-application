import React from 'react'
import './style.css'

const SpiceOne = () => {
  return (
    <div class="spice">
      <button className="left-arrow">
        <img src="./img/left-arrow.svg" alt=""/>
      </button>
      <div className="image-box">
        <img src="./img/clove.png" alt="" />
      </div>
      <button className="right-arrow">
        <img src="./img/right-arrow.svg" alt=""/>
      </button>
    </div>
  )
}

export default SpiceOne