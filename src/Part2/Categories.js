import { useState, useRef, useEffect } from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

import img1 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img2 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img3 from '../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img4 from '../media/73a4e89e57aa99dc0fd08882597575401b3e192c.png';
import img5 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img6 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img7 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img8 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img9 from '../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';

import './part2-style.css';
import { FiFilter } from 'react-icons/fi';
import LogNav from '../component/LogNav';
import { useAuth } from '../Context/Auth-context';

export default function Categories() {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showAlphabetMenu, setShowAlphabetMenu] = useState(false);
  const filterRef = useRef(null);
  const alphabetRef = useRef(null);

    let loggedin=useAuth().isLoggedIn;
  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
    setShowAlphabetMenu(false);
  };

  const toggleAlphabetMenu = () => {
    setShowAlphabetMenu(!showAlphabetMenu);
    setShowFilterMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target) && 
          alphabetRef.current && !alphabetRef.current.contains(event.target)) {
        setShowFilterMenu(false);
        setShowAlphabetMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {loggedin===true&&(<Navbar/>)}
      {loggedin===false&&(<LogNav/>)}
      <div className="category-container flex">
        <div className="pricing-header flex">
          <h3 className="title">Browse</h3>
          <div className='filters flex'>
            <span ref={alphabetRef} onClick={toggleAlphabetMenu} className="filter-button">
              <BiCategoryAlt className='icon' />Alphabetical
              {showAlphabetMenu && (
                <>
                  <div className="overlay" onClick={() => setShowAlphabetMenu(false)} />
                  <div className="filter-menu">
                    <div className="filter-item">A - Z</div>
                    <div className="filter-item">Z - A</div>
                    <div className="filter-item">Custom Order</div>
                  </div>
                </>
              )}
            </span>
            <span ref={filterRef} onClick={toggleFilterMenu} className="filter-button">
              <FiFilter className='icon' />Filter
              {showFilterMenu && (
                <>
                  <div className="overlay" onClick={() => setShowFilterMenu(false)} />
                  <div className="filter-menu">
                    <div className="filter-item">Podcast</div>
                    <div className="filter-item">AudioBooks</div>
                  </div>
                </>
              )}
            </span>
          </div>
        </div>

        <div className="category-cards flex">
          <div className="header flex">
            <h2 className="charts flex"><span style={{ color: '#f57f41' }}>#</span> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h2>
          </div>

          <div className="cards-container flex">
            <h2 className='cards-title' style={{ color: '#f57f41' }}>#</h2>
            <div className='cards flex'>
              <div className="card">
                <img src={img1} alt="" />
                <h2>Not alone</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>

              <div className="card">
                <img src={img2} alt="" />
                <h2>MM&M</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="cards-container flex">
            <h2 className='cards-title'>A</h2>
            <div className='cards flex'>
              <div className="card">
                <img src={img3} alt="" />
                <h2>The SIP</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>

              <div className="card">
                <img src={img4} alt="" />
                <h2>Family Business</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>

              <div className="card">
                <img src={img5} alt="" />
                <h2>On Purpose</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="cards-container flex">
            <h2 className='cards-title'>B</h2>
            <div className='cards flex'>
              <div className="card">
                <img src={img6} alt="" />
                <h2>Shane Dawson Pod</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>

              <div className="card">
                <img src={img7} alt="" />
                <h2>Startalk</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>

              <div className="card">
                <img src={img8} alt="" />
                <h2>The Album Years</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>

              <div className="card">
                <img src={img9} alt="" />
                <h2>Ear Hustle</h2>
                <p>Podcast Description Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}