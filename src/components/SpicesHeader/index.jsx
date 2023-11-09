import React from 'react'
import "./style.css"
import SpiceTwo from '../SpiceTwo'
import SpiceOne from '../SpiceOne'
import SpiceNameOne from '../SpiceNameOne'
import SpiceNameTwo from '../SpiceNameTwo'
import CheckResult from '../CheckResult'

const SpicesHeader = () => {
  return (
    <main>
        <div class="header">
        <div className="spice-box">
            <SpiceOne/>
            <SpiceNameOne/>
        </div>
        <div className="spice-box">
            <SpiceTwo/>
            <SpiceNameTwo/>
        </div>
        </div>
        <CheckResult/>
    </main>
  )
}

export default SpicesHeader
