import './sectionsStyle.css';
import { useTranslation } from 'react-i18next';

import img1 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img2 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img3 from '../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img4 from '../media/73a4e89e57aa99dc0fd08882597575401b3e192c.png';
import img5 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img6 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img7 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img8 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img9 from '../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';
import img10 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';


export default function TrendySection(){
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };
    return(
        <div className="trendy-section section flex">
            <div className="header flex">
                <h2 className="title">{t('trendy.title')}</h2>
                <h3 className="more"><IoIosArrowForward className='icon' /><span>{t('trendy.more')}</span></h3>
            </div>
    
            <div className="cards-container flex">
                <Slider {...settings}>
                    <Link to='/podcast-details' className="card">
                        <img src={img1} alt={t('trendy.podcast_alt')}/>
                        <h2>Not alone</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img2} alt={t('trendy.podcast_alt')}/>
                        <h2>MM&M</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img3} alt={t('trendy.podcast_alt')}/>
                        <h2>The SIP</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img4} alt={t('trendy.podcast_alt')}/>
                        <h2>Family Business</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img5} alt={t('trendy.podcast_alt')}/>
                        <h2>On Purpose</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img6} alt={t('trendy.podcast_alt')}/>
                        <h2>Shane Dawson Pod </h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img7} alt={t('trendy.podcast_alt')}/>
                        <h2>Startalk</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img8} alt={t('trendy.podcast_alt')}/>
                        <h2>The Album Years</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img9} alt={t('trendy.podcast_alt')}/>
                        <h2>Ear Hustle</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
        
                    <Link to='/podcast-details' className="card">
                        <img src={img10} alt={t('trendy.podcast_alt')}/>
                        <h2>That Sounds Fun</h2>
                        <p>{t('trendy.podcast_description')}</p>
                    </Link>
                </Slider>
            </div>
        </div>
    )
}