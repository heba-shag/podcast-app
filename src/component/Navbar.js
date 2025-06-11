import { useState } from 'react';
import { BiSearch, BiMenu, BiX } from 'react-icons/bi';
import './components-style.css';
import logo from '../media/Logo.png';
import user from '../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context';

export default function Navbar() {
    let loggedin=useAuth().isLoggedIn;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar flex">

            <div className="mobile-menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? <BiX className='icon' /> : <BiMenu className='icon' />}
            </div>

            <div className="logo flex">
                <img src={logo} alt=""/>
            </div>

            <div className={`links flex ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
                <Link to='/home-page' className="link flex">Discover</Link>
                <Link to='/community' className="link flex">Community</Link>
                <Link to='/library' className="link flex">Library</Link>
                <Link to='/about-us' className="link flex">About</Link>
                <Link to='/contact' className="link flex">Contact</Link>    
            </div>
    
            <div className="search flex">
                {loggedin===true&&<>
                    <Link to='/search'><BiSearch className='icon' /></Link>
                    <Link className='user-details flex' style={{cursor:'pointer'}} to='/profile-information'>
                        <h2 className="user-name">Anna Liebert</h2>
                        <img src={user} alt=""/>
                    </Link>
                </>}
                {loggedin===false&&<Link to='/welcome-page' class="btn" >Log in</Link>}
            </div>
            
            
        </div>
    )
}