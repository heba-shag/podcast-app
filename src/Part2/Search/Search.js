
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';

import '../part2-style.css';
import { FaFireAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Search() {


  return (
    <>
      <Navbar />
      <div className="search-container flex" >

        <div className="category-cards flex">
          <div className="header flex">
            <h2 className="charts flex" style={{color: '#bbb',fontSize:'1.4rem'}}><span style={{ color: '#111',fontSize:'1.6rem' }}>Search</span><input type='text' placeholder='genres, languages, podcasts and more...' /> </h2>
          </div>

          <div  className="cards-container flex">
            <h2 className='cards-title'>Common searches</h2>
            <div className='cards flex'>

                <div className="card flex">
                    <FaFireAlt className='icon' />
                    <p>Murder Mystery and Makeup</p>
                </div>

                <Link to='/search/SIP' className="card flex">
                    <FaFireAlt className='icon' />
                    <p>the SIP</p>
                </Link>

                <div className="card flex">
                    <FaFireAlt className='icon' />
                    <p>Being HER</p>
                </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}