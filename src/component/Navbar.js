import { useState } from 'react';
import { BiLibrary, BiSearch } from 'react-icons/bi';
import './components-style.css';
import { SiDiscover } from 'react-icons/si';
import { CgCommunity, CgProfile } from 'react-icons/cg';

import logo from '../media/Logo.png';
import user from '../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // هنا يمكنك إضافة منطق البحث
        console.log('Searching for:', searchQuery);
        setShowSearch(false);
    };

    return (
        <div className="navbar flex">
            <div className="logo flex">
                <img src={logo} alt=""/>
            </div>
    
            <div className="links flex">
                <li className="link flex"><SiDiscover className='icon'/><a href="">Discover</a></li>
                <li className="link flex"><CgCommunity className='icon'/><a href="">Community</a></li>
                <li className="link flex"><BiLibrary className='icon'/><a href="">Library</a></li>
                <li className="link flex profile"><CgProfile className='icon'/><a href="">Profile</a></li>
                <li className="link flex about"><a href="">About</a></li>
                <li className="link flex contact"><a href="">Contact</a></li>    
            </div>
    
            <div className="search flex">
                {showSearch ? (
                    <form onSubmit={handleSearch} className="search-form flex">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus
                        />
                        <button type="submit">
                            <BiSearch style={{color:"black"}} className='icon' />
                        </button>
                    </form>
                ) : (
                    <BiSearch className='icon' onClick={toggleSearch} />
                )}
                <h2 className="user-name">Anna Liebert</h2>
                <img src={user} alt=""/>
            </div>
        </div>
    )
}