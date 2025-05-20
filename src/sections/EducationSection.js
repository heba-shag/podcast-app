import './sectionsStyle.css';

import img1 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img2 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';
import img3 from '../media/d0b20d3822e749a0dbd046982474baf2e85cb615.jpg';
import img4 from '../media/79f237da92fdf400f628f5c625d1956a386b23e2.jpg';
import img5 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img6 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img7 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img8 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img9 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img10 from '../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';

export default function EducationSection(){
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
        <div className="education-section section flex">
            <div className="header flex">
                <h2 className="title">Education</h2>
                <h3 className="more"><li className="fas fas fa-chevron-right"></li><span>More</span></h3>
            </div>
    
            <div className="cards-container flex">
                <Slider {...settings}>
                    <div className="card">
                        <img src={img1} alt=""/>
                        <h2>On Purpose</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
    
                    <div className="card">
                        <img src={img2} alt=""/>
                        <h2>It Gets Interesting</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img3} alt=""/>
                        <h2>The ADHD Adult Pod</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img4} alt=""/>
                        <h2>BlowBack</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img5} alt=""/>
                        <h2>Startalk</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img6} alt=""/>
                        <h2>Not alone</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img7} alt=""/>
                        <h2>Being HER </h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img8} alt=""/>
                        <h2>Self-Love Podcast</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img9} alt=""/>
                        <h2>Empowered Principal</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img10} alt=""/>
                        <h2>How to Build this</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>

                </Slider>
                
            </div>
        </div>
    )
}