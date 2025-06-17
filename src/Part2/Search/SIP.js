import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';
import img1 from '../../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img2 from '../../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img3 from '../../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img4 from '../../media/73a4e89e57aa99dc0fd08882597575401b3e192c.png';
import img5 from '../../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img6 from '../../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img7 from '../../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img8 from '../../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img9 from '../../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';
import '../part2-style.css';
import { useTranslation } from 'react-i18next';

export default function SIP() {
  const { t } = useTranslation();
  const images = [img7, img1, img2, img3, img4, img5, img1, img6, img7, img2];
  const audiobookImages = [img8, img9];
  const podcasts = t('sip.podcasts', { returnObjects: true });
  const audiobooks = t('sip.audiobooks', { returnObjects: true });

  return (
    <>
      <Navbar />
      <div className="library-container flex" style={{marginTop:"8rem"}}>
        <div className="category-cards flex">
          <div className="header flex">
            <h2 className="charts flex" style={{color: '#bbb',fontSize:'1.4rem'}}>
              <span style={{ color: '#111',fontSize:'1.6rem' }}>
                {t('sip.searchTitle')}
              </span> 
              {t('sip.searchTerm')}
            </h2>
          </div>

          <div className="cards-container flex">
            <h2 className='cards-title'>{t('sip.topResults')}</h2>
            <div style={{ flexWrap: 'wrap' }} className='cards flex'>
              {podcasts.map((podcast, index) => (
                <div key={index} className="card">
                  <img src={images[index]} alt="" />
                  <h2>{podcast.title}</h2>
                  <p>{podcast.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cards-container flex">
            <h2 className='cards-title'>{t('sip.favoriteAudiobooks')}</h2>
            <div className='cards flex'>
              {audiobooks.map((audiobook, index) => (
                <div key={index} className="card">
                  <img src={audiobookImages[index]} alt="" />
                  <h2>{audiobook.title}</h2>
                  <p>{audiobook.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}