import './sectionsStyle.css';

import img1 from '../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img2 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img3 from '../media/73a4e89e57aa99dc0fd08882597575401b3e192c.png';
import img4 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img5 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img6 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img7 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img8 from '../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';
import img9 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img10 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import { IoIosArrowForward } from 'react-icons/io';

export default function BusinessSection(){

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
        <div className="business-section section flex">
            <div className="header flex">
                <h2 className="title">Business</h2>
                <h3 className="more"><IoIosArrowForward className='icon' /><span>More</span></h3>
            </div>
    
            <div className="cards-container flex">
                <Slider {...settings}>
                    <div className="card">
                        <img src={img1} alt=""/>
                        <h2>Womans Business</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img2} alt=""/>
                        <h2>The Edie Podcast</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img3} alt=""/>
                        <h2>Destress Ur Business</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img4} alt=""/>
                        <h2>Business Noodles</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img5} alt=""/>
                        <h2>Business Wars</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img6} alt=""/>
                        <h2>My First Million</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img7} alt=""/>
                        <h2>We Study Billionaires</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img8} alt=""/>
                        <h2>Family Business</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img9} alt=""/>
                        <h2>Sales Logic Podcast</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img10} alt=""/>
                        <h2>Good Business</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}