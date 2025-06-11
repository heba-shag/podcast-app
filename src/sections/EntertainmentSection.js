import './sectionsStyle.css';

import img1 from '../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img2 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img3 from '../media/55960bb9fef0219677b7f7729e9614e79d782940.png';
import img4 from '../media/c98dc4b5db80e29d60e60ccb3c28f9b1ceb522b6.png';
import img5 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img6 from '../media/e0801007307ca2b94fd7bc82597a401c1811272d.jpg';
import img7 from '../media/8c09b0fb9b075b963e1260dce9f38dc2dbf1519e.jpg';
import img8 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img9 from '../media/d0b20d3822e749a0dbd046982474baf2e85cb615.jpg';
import img10 from '../media/b18b5d1e4552b034214cafd41d6452d4fee6b12e.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from 'react-slick';
import { IoIosArrowForward } from 'react-icons/io';


export default function EntertainmentSection(){
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
        <div className="entertainment-section section flex">
            <div className="header flex">
                <h2 className="title">Entertainment</h2>
                <h3 className="more"><IoIosArrowForward className='icon' /><span>More</span></h3>
            </div>
    
            <div className="cards-container flex">

                <Slider {...settings}>
                    <div className="card">
                        <img src={img1} alt=""/>
                        <h2>The SIP</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img2} alt=""/>
                        <h2>MMM Podcast </h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img3} alt=""/>
                        <h2>The rest is Entert...</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img4} alt=""/>
                        <h2>Cest la Tea!</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img5} alt=""/>
                        <h2>Shane Dawson Pod</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img6} alt=""/>
                        <h2>Album Podcast</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img7} alt=""/>
                        <h2>Call Her Daddy</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img8} alt=""/>
                        <h2>Music years</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img9} alt=""/>
                        <h2>Fun Dad Dean</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>
        
                    <div className="card">
                        <img src={img10} alt=""/>
                        <h2>Party Fun</h2>
                        <p>Podcast Description Lorem ipsum dolor sit amet</p>
                    </div>

                </Slider>
                
            </div>
        </div>
    )
}