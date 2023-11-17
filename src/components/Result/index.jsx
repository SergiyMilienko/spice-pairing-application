import React from 'react'
import "./style.css"

const Result = ({ pairingResult }) => {
    console.log('Pairing Result:', pairingResult);
  return (
    <div class="result">
        {pairingResult}
    </div>
  )
}

export default Result