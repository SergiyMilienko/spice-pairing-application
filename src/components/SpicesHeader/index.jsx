import React, {useState} from 'react'
import "./style.css"
import SpiceTwo from '../SpiceTwo'
import SpiceOne from '../SpiceOne'
import CheckResult from '../CheckResult'

const SpicesHeader = () => {

  const [selectedSpiceIndexOne, setSelectedSpiceIndexOne] = useState(0);
  const [selectedSpiceIndexTwo, setSelectedSpiceIndexTwo] = useState(1);

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

  return (
    <main>
        <div class="header">
        <div className="spice-box">
            <SpiceOne selectedSpiceIndexTwo={selectedSpiceIndexTwo} onSelectSpice={handleSelectSpiceOne}/>
        </div>
        <div className="spice-box">
            <SpiceTwo selectedSpiceIndexOne={selectedSpiceIndexOne} onSelectSpice={handleSelectSpiceTwo}/>
        </div>
        </div>
        <CheckResult/>
    </main>
  )
}

export default SpicesHeader
