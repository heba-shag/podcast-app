import { useState } from 'react';
import { BiLibrary, BiSearch } from 'react-icons/bi';
import './components-style.css';
import { SiDiscover } from 'react-icons/si';
import { CgCommunity, CgProfile } from 'react-icons/cg';

import logo from '../media/Logo.png';
import user from '../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div className="navbar flex">
            <div className="logo flex">
                <img src={logo} alt=""/>
            </div>
    
            <div className="links flex">
                <Link to='/home-page' className="link flex">Discover</Link>
                <Link to='/community' className="link flex">Community</Link>
                <Link to='/library' className="link flex">Library</Link>
                <Link to='/about-us' className="link flex">About</Link>
                <Link to='/contact' className="link flex">Contact</Link>    
            </div>
    
            <div className="search flex">
                
                <Link to='/search'><BiSearch className='icon' /></Link>
                <Link className='flex' style={{cursor:'pointer'}} to='/profile-information'>
                    <h2 className="user-name">Anna Liebert</h2>
                    <img src={user} alt=""/>
                </Link>
                
            </div>
        </div>
    )
}