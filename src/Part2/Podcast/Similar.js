import './pocastStyle.css';
import img1 from '../../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img2 from '../../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img3 from '../../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img4 from '../../media/73a4e89e57aa99dc0fd08882597575401b3e192c.png';
import img5 from '../../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img6 from '../../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img7 from '../../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img8 from '../../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img9 from '../../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';
import img10 from '../../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

export default function Similar(){
    const { t } = useTranslation();
    const podcasts = t('similarPodcasts.podcasts', { returnObjects: true });
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
        <div className="similar-section section flex">
            <div className="header2 flex">
                <span className="title flex">
                    <IoIosArrowBack className='icon' />
                    {t('similarPodcasts.navigation.previous')}
                </span>
                <span className="more flex">
                    {t('similarPodcasts.navigation.next')}
                    <IoIosArrowForward className='icon' />
                </span>
            </div>

            <div className="header flex">
                <h2 className="title">{t('similarPodcasts.title')}</h2>
                <h3 className="more">
                    <IoIosArrowForward className='icon' />
                    <span>{t('similarPodcasts.navigation.more')}</span>
                </h3>
            </div>
    
            <div className="cards-container flex">
                <Slider {...settings}>
                    {podcasts.map((podcast, index) => (
                        <Link key={index} to='/podcast-details' className="card">
                            <img src={images[index]} alt=""/>
                            <h2>{podcast.title}</h2>
                            <p>{podcast.description}</p>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    )
}