import React, {useState, useEffect} from 'react'
import "./style.css"
import SpiceTwo from '../SpiceTwo'
import SpiceOne from '../SpiceOne'
import Result from '../Result'
import spicesData from '../../data/spicesData'
import { goodPairings, neutralPairings, badPairings } from '../../data/pairingsData';

const SpicesHeader = () => {

  const [selectedSpiceIndexOne, setSelectedSpiceIndexOne] = useState(0);
  const [selectedSpiceIndexTwo, setSelectedSpiceIndexTwo] = useState(1);
  const [pairingResult, setPairingResult] = useState(null);

  const handleSelectSpiceOne = (index) => {
    if (index !== selectedSpiceIndexTwo) {
      setSelectedSpiceIndexOne(index);
    }
  };

  const handleSelectSpiceTwo = (index) => {
    if (index !== selectedSpiceIndexOne) {
      setSelectedSpiceIndexTwo(index);
    }
  };

  

  useEffect(() => {
    const checkPairing = () => {
      const spiceOneName = spicesData[selectedSpiceIndexOne].name;
      const spiceTwoName = spicesData[selectedSpiceIndexTwo].name;
  
      const isGoodPairing = goodPairings.some(pair =>
        (pair[0] === spiceOneName && pair[1] === spiceTwoName) ||
        (pair[0] === spiceTwoName && pair[1] === spiceOneName)
      );
      
      const isNeutralPairing = neutralPairings.some(pair =>
        (pair[0] === spiceOneName && pair[1] === spiceTwoName) ||
        (pair[0] === spiceTwoName && pair[1] === spiceOneName)
        );
  
      const isBadPairing = badPairings.some(pair =>
        (pair[0] === spiceOneName && pair[1] === spiceTwoName) ||
        (pair[0] === spiceTwoName && pair[1] === spiceOneName)
        );
  
        if (isGoodPairing) {
          setPairingResult("Good")
        } else if (isBadPairing) {
          setPairingResult("Bad");
        } else if (isNeutralPairing) {
          setPairingResult("Neutral");
        } else {
          setPairingResult("Uknown");
        }
    }
    checkPairing();
  }, [selectedSpiceIndexOne, selectedSpiceIndexTwo])

  return (
    <main>
        <div className="header">
        <div className="spice-box">
            <SpiceOne selectedSpiceIndexTwo={selectedSpiceIndexTwo} onSelectSpice={handleSelectSpiceOne}/>
        </div>
        <div className="spice-box">
            <SpiceTwo selectedSpiceIndexOne={selectedSpiceIndexOne} onSelectSpice={handleSelectSpiceTwo}/>
        </div>
        </div>
        <Result pairingResult={pairingResult} selectedSpiceIndexOne={selectedSpiceIndexOne} selectedSpiceIndexTwo={selectedSpiceIndexTwo}/>
    </main>
  )
}

export default SpicesHeader
