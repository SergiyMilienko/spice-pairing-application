/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };  

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        handleDropdownToggle();
      };

  return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <Link to="/" className="logo">
                    <strong>{t('nav.spice')}</strong>{t('nav.pairing')}
                </Link>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <Link to="/questions" className="nav-list__link">{t('nav.questions')}</Link>
                    </li>
                    <li className="nav-list__item drop" onClick={handleDropdownToggle}>
                        <div className="nav-list__link">{t('nav.language')}</div>
                        <button itemID="bottom-arrow">
                            <img className="choose" src="./img/right-arrow.svg" alt=""/>
                        </button>
                        {isDropdownOpen && (
                        <ul className="dropdown-menu languages">
                            <li onClick={() => changeLanguage('en')}> <img src="./img/english.jpg" alt=""/>{t('nav.english')}</li>
                            <li onClick={() => changeLanguage('uk')}> <img src="./img/ukrainian.jpg" alt=""/>{t('nav.ukrainian')}</li>
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