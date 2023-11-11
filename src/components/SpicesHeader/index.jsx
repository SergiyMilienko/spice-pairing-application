import React from 'react'
import "./style.css"
import SpiceTwo from '../SpiceTwo'
import SpiceOne from '../SpiceOne'
import CheckResult from '../CheckResult'

const SpicesHeader = () => {

  return (
    <main>
        <div class="header">
        <div className="spice-box">
            <SpiceOne/>
        </div>
        <div className="spice-box">
            <SpiceTwo/>
        </div>
        </div>
        <CheckResult/>
    </main>
  )
}

export default SpicesHeader
