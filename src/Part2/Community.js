import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import spotify from '../media/97b39bf0216d4f2925bf4734dd51e22475db34f8.png';
import pic1 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import pic2 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';
import pic3 from '../media/e5994c8c12e659f134a1923bcc69c1abd12eaa7e.jpg';
import pic4 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import logo from '../media/Logo.png';
import profile1 from '../media/b734229040265dd4a19da4578cd9ecc07e5dbd1d.jpg';
import profile2 from '../media/62f2371fc43e7be5bd51f6cec2a1e655a3d0f520.jpg';
import './part2-style.css';
import { useTranslation } from 'react-i18next';

export default function Community() {
  const { t } = useTranslation();
  
  return (
    <>
      <Navbar/> 
      <div className="community-container flex">
        <div className="header-pic flex">
            <img src={spotify} alt=''/>
        </div>

        <div className='grid-section flex'>
            <div className='right-side flex'>
                <h3 className='title flex'>{t('community.news')}</h3>
                <div className='cards-container flex'>
                    <div className='card flex'>
                        <div className='img'>
                            <img className='flex' src={pic1} alt=''/>
                        </div>

                        <div className='about flex'>
                            <h2 className='card-title flex'>{t('community.topPicks')}</h2>
                            <p className='text flex'>{t('community.topPicksDesc')}</p>
                        </div>
                        <p className='btn flex'>{t('community.learnMore')}</p>
                    </div>

                    <div className='card flex'>
                        <div className='img'>
                            <img src={pic2} alt=''/>
                        </div>
                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>{t('community.shockingRevelation')}</h2>
                            <p className='text flex'>{t('community.shockingRevelationDesc')}</p>
                        </div>
                        <p className='btn flex'>{t('community.learnMore')}</p>
                    </div>

                    <div style={{border:'none'}} className='card flex'>
                        <div className='about flex'>
                            <h2 className='card-title flex'>{t('community.shaneDawson')}</h2>
                            <p className='text flex'>{t('community.shaneDawsonDesc')}</p>
                        </div>
                        <p className='btn flex'>{t('community.learnMore')}</p>
                    </div>
                </div>
            </div>


            <div className='middle flex'>
                <h3 className='title flex'>{t('community.announcements')}</h3>
                <div className='cards-container flex'>
                    <div className='main-card flex'>
                        <div className='img'>
                            <img src={pic4} alt=''/>
                        </div>
                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>{t('community.beingHer')}</h2>
                            <p className='text '>{t('community.beingHerDesc')} <span>hjgajsxcv.hcsjcv</span></p>
                        </div>
                    </div>

                    <div style={{border:'none'}} className='comments-card flex'>
                        <div className='header flex'>
                            <h2>{t('community.comments')}</h2>
                            <p>{t('community.showMore')}</p>
                        </div>
                        <div className='comments-container flex'>
                            <div className='comments flex'>
                                <div className='img'>
                                    <img src={profile1} alt=''/>
                                </div>
                                
                                <div className='comment flex'>
                                    <h2 className='name flex'>Jessica Maxville</h2>
                                    <p className='text flex'>{t('community.jessicaComment')}</p>
                                </div>
                            </div>

                            <div className='comments flex'>
                                <div className='img'>
                                    <img src={profile2} alt=''/>
                                </div>

                                <input type='text' placeholder={t('community.addComment')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='left-side flex'>
                <h3 className='title flex'>{t('community.features')}</h3>
                <div className='cards-container flex'>
                    <div className='card flex'>
                        <div className='img'>
                            <img src={pic3} alt=''/>
                        </div>
                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>{t('community.spotifyFeatures')}</h2>
                            <p className='text flex'>{t('community.spotifyFeaturesDesc')}</p>
                        </div>
                        <p className='btn flex'>{t('community.learnMore')}</p>
                    </div>

                    <div className='card flex'>
                        <div className='img'>
                            <img src={logo} alt=''/>
                        </div>
                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>{t('community.wantMore')}</h2>
                            <p className='text flex'>{t('community.wantMoreDesc')}</p>
                        </div>
                        <p className='btn flex'>{t('community.learnMore')}</p>
                    </div>

                    <div style={{border:'none'}} className='card flex'>
                        <div className='about flex'>
                            <h2 className='card-title flex'>{t('community.whatsNew')}</h2>
                            <p className='text flex'>{t('community.whatsNewDesc')}</p>
                        </div>
                        
                        <p className='btn flex'>{t('community.learnMore')}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}