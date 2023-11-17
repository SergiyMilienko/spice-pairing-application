import React from 'react'
import './style.css'

const CheckResult = ({ onClick }) => {

  return (
    <button onClick={onClick} className="check">
        Check
    </button>
  )
}

export default CheckResult