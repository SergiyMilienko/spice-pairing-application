/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./style.css"

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="#" className="logo">
                    <strong>Spice</strong>Pairing
                </a>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <a href="#spice-guide " className="nav-list__link">Spice Guide</a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#faqs" className="nav-list__link">FAQs</a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#language" className="nav-list__link">Language</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar