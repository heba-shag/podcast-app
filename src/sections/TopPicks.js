import './sectionsStyle.css';
import { useTranslation } from 'react-i18next';

import img1 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img2 from '../media/79f237da92fdf400f628f5c625d1956a386b23e2.jpg';
import img3 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import { IoIosArrowForward } from 'react-icons/io';

export default function TopPicks(){
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div className="top-picks-section section flex">
            <div className="header flex">
                <h2 className="title">{t('topPicks.title')}</h2>
                <h3 className="more"><IoIosArrowForward className='icon' /><span>{t('topPicks.more')}</span></h3>
            </div>
    
            <div className="cards-container flex">
                <Slider {...settings}>
                    <div>
                        <div className="card flex">
                            <img src={img1} alt={t('topPicks.podcast_alt')}/>
                            <div className="text-container">
                                <h2>{t('topPicks.card1.title')}</h2>
                                <p>{t('topPicks.card1.description')}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card flex">
                            <img src={img2} alt={t('topPicks.podcast_alt')}/>
                            <div className="text-container">
                                <h2>{t('topPicks.card2.title')}</h2>
                                <p>{t('topPicks.card2.description')}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card flex">
                            <img src={img3} alt={t('topPicks.podcast_alt')}/>
                            <div className="text-container">
                                <h2>{t('topPicks.card3.title')}</h2>
                                <p>{t('topPicks.card3.description')}</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}