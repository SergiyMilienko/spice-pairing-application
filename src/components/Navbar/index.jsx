/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import "./style.css"

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };  

  return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="# " className="logo">
                    <strong>Spice</strong>Pairing
                </a>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <a href="#faqs" className="nav-list__link">FAQs</a>
                    </li>
                    <li className="nav-list__item" onClick={handleDropdownToggle}>
                        <a href="#language" className="nav-list__link">Language</a>
                        <button itemID="bottom-arrow">
                            <img className="choose" src="./img/right-arrow.svg" alt=""/>
                        </button>
                        {isDropdownOpen && (
                        <ul className="dropdown-menu languages">
                            <li> <img src="./img/english.jpg" alt=""/>English</li>
                            <li> <img src="./img/ukrainian.jpg" alt=""/>Ukrainian</li>
                        </ul>
                    )}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar