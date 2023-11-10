import React from 'react'
import './style.css'

const SpiceNameOne = ( { name }) => {
  console.log('SpiceNameOne - Received name:', name);
  
  return (
    <p>{name}</p>
  )
}

export default SpiceNameOne