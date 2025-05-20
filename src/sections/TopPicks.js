import './sectionsStyle.css';

import img1 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img2 from '../media/79f237da92fdf400f628f5c625d1956a386b23e2.jpg';
import img3 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';

export default function TopPicks(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return(
        <div className="top-picks-section section flex">
            <div className="header flex">
                <h2 className="title">Top Picks</h2>
                <h3 className="more"><li className="fas fas fa-chevron-right"></li><span>More</span></h3>
            </div>
    
            <div className="cards-container flex">
                <Slider {...settings}>
                    <div>
                        <div className="card flex">
                            <img src={img1} alt=""/>
                            <div className="text-container">
                                <h2>Want to be irresistible?</h2>
                                <p>Becoming Her is a refreshing, empowering podcast for women on the journey of growth and self-discovery. </p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="card flex">
                            <img src={img2} alt=""/>
                            <div className="text-container">
                                <h2>Enrich your history knowledge</h2>
                                <p>Taking a look at the origins of the United States' relationship with Iraq before and during the Cold War</p>
                            </div>
                        </div>

                    </div>

                    <div>

                        <div className="card flex">
                            <img src={img3} alt=""/>
                            <div className="text-container">
                                <h2>How To Change your life??</h2>
                                <p>Discover practical steps and inspiring insights to transform your life--one decision at atime.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
                
            </div>
        </div>
    )
}