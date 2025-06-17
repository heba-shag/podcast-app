import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';
import '../part2-style.css';
import { FaFireAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Search() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="search-container flex">
        <div className="category-cards flex">
          <div className="header flex">
            <h2 className="charts flex" style={{color: '#bbb',fontSize:'1.4rem'}}>
              <span style={{ color: '#111',fontSize:'1.6rem' }}>
                {t('search.title')}
              </span>
              <input 
                type='text' 
                placeholder={t('search.placeholder')} 
              /> 
            </h2>
          </div>

          <div className="cards-container flex">
            <h2 className='cards-title'>{t('search.commonSearches')}</h2>
            <div className='cards flex'>
              {t('search.popularQueries', { returnObjects: true }).map((query, index) => (
                index === 1 ? (
                  <Link 
                    key={index} 
                    to={`/search/${query.replace('the ', '').replace(' ', '')}`} 
                    className="card flex"
                  >
                    <FaFireAlt className='icon' />
                    <p>{query}</p>
                  </Link>
                ) : (
                  <div key={index} className="card flex">
                    <FaFireAlt className='icon' />
                    <p>{query}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}