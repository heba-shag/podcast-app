import { useState } from 'react';
import { BiSearch, BiMenu, BiX } from 'react-icons/bi';
import './components-style.css';
import logo from '../media/Logo.png';
import user from '../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const loggedin = useAuth().isLoggedIn;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('i18nextLng', e.target.value);
    };

    return (
        <div className="navbar flex">
            <div className="mobile-menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? <BiX className='icon' /> : <BiMenu className='icon' />}
            </div>

            <div className="logo flex">
                <img src={logo} alt={t('navbar.logo_alt')}/>
            </div>

            <div className={`links flex ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                <Link to='/home-page' className="link flex">{t('navbar.discover')}</Link>
                <Link to='/community' className="link flex">{t('navbar.community')}</Link>
                <Link to='/library' className="link flex">{t('navbar.library')}</Link>
                <Link to='/about-us' className="link flex">{t('navbar.about')}</Link>
                <Link to='/contact' className="link flex">{t('navbar.contact')}</Link>    
            </div>
    
            <div className="search flex">
                {loggedin === true && (
                    <>
                        <Link to='/search'><BiSearch className='icon' /></Link>
                        <Link className='user-details flex' style={{cursor:'pointer'}} to='/profile-information'>
                            <h2 className="user-name">{t('navbar.user_name')}</h2>
                            <img src={user} alt={t('navbar.user_alt')}/>
                        </Link>
                    </>
                )}
                {loggedin === false && (
                    <Link to='/welcome-page' className="btn">{t('navbar.login')}</Link>
                )}
            </div>
            
            <select 
                value={i18n.language}
                onChange={handleLanguageChange}
                className="language-selector"
            >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="fr">Français</option>
            </select>
        </div>
    )
}