import { BiCategoryAlt } from "react-icons/bi";
import { FcAudioFile } from "react-icons/fc";
import { GrNetwork } from "react-icons/gr";
import './components-style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { useTranslation } from 'react-i18next';
import '../I18n';

import homePic1 from '../media/9b30f2ea61a29ad6f18170d64f31f6136c8ca0cb.png';
import homePic2 from '../media/8c09b0fb9b075b963e1260dce9f38dc2dbf1519e.jpg';
import homePic3 from '../media/55960bb9fef0219677b7f7729e9614e79d782940.png';
import homePic4 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import homePic5 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';

import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header(){
   const { t, i18n } = useTranslation();
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 2000, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };
    useEffect(() => {
      document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    return(
        <div className="home-section section">
            <div className="welcome-section">
                <Slider {...settings}>
                    <div className="slider-item">
                        <div className="description flex">
                            <div className="img">
                                <img src={homePic1} alt=""/>
                            </div>
                            <div className="text-description">
                                <h1>{t('header.slides.0.title')}</h1>
                                <p>{t('header.slides.0.description')}<br/>
                                {t('header.slides.0.lorem')}</p>
                                <div className="list flex">
                                    <p>{t('header.categories.educational')}</p>
                                    <p>{t('header.categories.entertainment')}</p>
                                    <p>{t('header.categories.slice_of_life')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item">
                        <div className="description flex">
                            <div className="img">
                                <img src={homePic2} alt=""/>
                            </div>
                            <div className="text-description">
                                <h1>{t('header.slides.1.title')}</h1>
                                <p>{t('header.slides.1.description')}<br/>
                                {t('header.slides.1.lorem')}</p>
                                <div className="list flex">
                                    <p>{t('header.categories.slice_of_life')}</p>
                                    <p>{t('header.categories.entertainment')}</p>
                                    <p>{t('header.categories.educational')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item">
                        <div className="description flex">
                            <div className="img">
                                <img src={homePic3} alt=""/>
                            </div>
                            <div className="text-description">
                                <h1>{t('header.slides.2.title')}</h1>
                                <p>{t('header.slides.2.description')}<br/>
                                {t('header.slides.2.lorem')}</p>
                                <div className="list flex">
                                    <p>{t('header.categories.entertainment')}</p>
                                    <p>{t('header.categories.educational')}</p>
                                    <p>{t('header.categories.slice_of_life')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item">
                        <div className="description flex">
                            <div className="img">
                                <img src={homePic4} alt=""/>
                            </div>
                            <div className="text-description">
                                <h1>{t('header.slides.3.title')}</h1>
                                <p>{t('header.slides.3.description')}<br/>
                                {t('header.slides.3.lorem')}</p>
                                <div className="list flex">
                                    <p>{t('header.categories.educational')}</p>
                                    <p>{t('header.categories.slice_of_life')}</p>
                                    <p>{t('header.categories.entertainment')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item">
                        <div className="description flex">
                            <div className="img">
                                <img src={homePic5} alt=""/>
                            </div>
                            <div className="text-description">
                                <h1>{t('header.slides.4.title')}</h1>
                                <p>{t('header.slides.4.description')}<br/>
                                {t('header.slides.4.lorem')}</p>
                                <div className="list flex">
                                    <p>{t('header.categories.educational')}</p>
                                    <p>{t('header.categories.slice_of_life')}</p>
                                    <p>{t('header.categories.entertainment')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
    
            <div className="quick-links-container flex">
                <div className="quick-links flex">
                    <div className="link-container flex"><BiCategoryAlt className="icon"/><span>{t('header.quick_links.categories')}</span></div>
                    <div className="link-container flex"><FcAudioFile className="icon"/><span>{t('header.quick_links.audiobook')}</span></div>
                    <Link style={{color:'white'}} to='/community' className="link-container flex"><GrNetwork className="icon"/><span>{t('header.quick_links.network')}</span></Link>
                </div>
            </div>
        </div>
    )
}