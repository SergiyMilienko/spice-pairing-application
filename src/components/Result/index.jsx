import React from 'react'
import "./style.css"

const Result = ({ pairingResult }) => {
    
    const determineClass = () => {
      switch (pairingResult) {
        case 'Good Pairing':
          return 'good-pairing';
        case 'Neutral Pairing':
          return 'neutral-pairing';
        case 'Bad Pairing':
            return 'bad-pairing';
        default:
          return 'result'
      }}

  return (
    <div className={`result ${determineClass()}`}>
        {pairingResult}
    </div>
  )
}

export default Result
