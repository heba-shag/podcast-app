import './sectionsStyle.css';
import { useTranslation } from 'react-i18next';

import img1 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img2 from '../media/c98dc4b5db80e29d60e60ccb3c28f9b1ceb522b6.png';
import img3 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';
import img4 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img5 from '../media/55960bb9fef0219677b7f7729e9614e79d782940.png';
import img6 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img7 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img8 from '../media/b18b5d1e4552b034214cafd41d6452d4fee6b12e.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export default function AudioBooks() {
    const { t } = useTranslation();
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
         responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="audiobooks-section section flex">
            <div className="header flex">
                <h2 className="title">{t('audiobooks.title')}</h2>
                <h3 className="more"><span>{t('audiobooks.more')}</span></h3>
            </div>

            <div className="cards-container flex">
                <div className="row1 flex">
                    
                    <Slider {...settings}>
                        <div>
                            <div className="card flex">
                                <img src={img1} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book1.title')}</h2>
                                    <p>{t('audiobooks.book1.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book1.genre1')}</li>
                                        <li>{t('audiobooks.book1.genre2')}</li>
                                        <li>{t('audiobooks.book1.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeartFill className='icon' />
                            </div>
                        </div>

                        <div>
                            <div className="card flex">
                                <img src={img2} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book2.title')}</h2>
                                    <p>{t('audiobooks.book2.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book2.genre1')}</li>
                                        <li>{t('audiobooks.book2.genre2')}</li>
                                        <li>{t('audiobooks.book2.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeartFill className='icon' />
                            </div>
                        </div>

                        <div>
                            <div className="card flex">
                                <img src={img3} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book3.title')}</h2>
                                    <p>{t('audiobooks.book3.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book3.genre1')}</li>
                                        <li>{t('audiobooks.book3.genre2')}</li>
                                        <li>{t('audiobooks.book3.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeartFill className='icon' />
                            </div>
                        </div>

                        <div>
                            <div className="card flex">
                                <img src={img4} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book4.title')}</h2>
                                    <p>{t('audiobooks.book4.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book4.genre1')}</li>
                                        <li>{t('audiobooks.book4.genre2')}</li>
                                        <li>{t('audiobooks.book4.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeartFill className='icon' />
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="row2 flex">
                    <Slider {...settings}>
                        <div>
                            <div className="card flex">
                                <img src={img5} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book5.title')}</h2>
                                    <p>{t('audiobooks.book5.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book5.genre1')}</li>
                                        <li>{t('audiobooks.book5.genre2')}</li>
                                        <li>{t('audiobooks.book5.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeart className='icon' />
                            </div>
                        </div>
                            
                        <div>
                            <div className="card flex">
                                <img src={img6} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book6.title')}</h2>
                                    <p>{t('audiobooks.book6.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book6.genre1')}</li>
                                        <li>{t('audiobooks.book6.genre2')}</li>
                                        <li>{t('audiobooks.book6.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeart className='icon' />
                            </div>
                        </div>
                        
                        <div>
                            <div className="card flex">
                                <img src={img7} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book7.title')}</h2>
                                    <p>{t('audiobooks.book7.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book7.genre1')}</li>
                                        <li>{t('audiobooks.book7.genre2')}</li>
                                        <li>{t('audiobooks.book7.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeart className='icon' />
                            </div>
                        </div>

                        <div>
                            <div className="card flex">
                                <img src={img8} alt={t('audiobooks.alt')} />
                                <div className="text-container">
                                    <h2>{t('audiobooks.book8.title')}</h2>
                                    <p>{t('audiobooks.book8.description')}</p>
                                    <ul>
                                        <li>{t('audiobooks.book8.genre1')}</li>
                                        <li>{t('audiobooks.book8.genre2')}</li>
                                        <li>{t('audiobooks.book8.genre3')}</li>
                                    </ul>
                                </div>
                                <BsHeart className='icon' />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}