import React, {useState} from 'react'
import "./style.css"
import SpiceTwo from '../SpiceTwo'
import SpiceOne from '../SpiceOne'
import SpiceNameOne from '../SpiceNameOne'
import SpiceNameTwo from '../SpiceNameTwo'
import CheckResult from '../CheckResult'

const SpicesHeader = () => {

  const [selectedSpiceNameOne, setSelectedSpiceNameOne] = useState('');
  const [selectedSpiceNameTwo, setSelectedSpiceNameTwo] = useState('');

  const handleSpiceChange = (spiceName, spiceType) => {
    if (spiceType === 'one') {
      setSelectedSpiceNameOne(spiceName);
    } else if (spiceType === 'two') {
      setSelectedSpiceNameTwo(spiceName);
    }
  };
  
  return (
    <main>
        <div class="header">
        <div className="spice-box">
            <SpiceOne onSpiceChange={(name) => handleSpiceChange(name, 'one')}/>
            <SpiceNameOne name={selectedSpiceNameOne}/>
        </div>
        <div className="spice-box">
            <SpiceTwo/>
            <SpiceNameTwo onSpiceChange={(name) => handleSpiceChange(name, 'two')} name={selectedSpiceNameTwo}/>
        </div>
        </div>
        <CheckResult/>
    </main>
  )
}

export default SpicesHeader
