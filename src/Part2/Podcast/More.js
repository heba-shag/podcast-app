import './pocastStyle.css';
import img1 from '../../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img2 from '../../media/79f237da92fdf400f628f5c625d1956a386b23e2.jpg';
import img3 from '../../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

export default function More(){
    const { t } = useTranslation();
    const cards = t('moreFromAuthor.cards', { returnObjects: true });
    const images = [img1, img2, img3];

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
        <div className="top-picks-section2 flex">
            <div className="header flex">
                <h2 className="title">{t('moreFromAuthor.title')}</h2>
            </div>
    
            <div className="cards-container flex">
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <div className="card flex">
                                <img src={images[index]} alt=""/>
                                <div className="text-container">
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}