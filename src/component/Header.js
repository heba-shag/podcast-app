import { BiCategoryAlt } from "react-icons/bi";
import { FcAudioFile } from "react-icons/fc";
import { GrNetwork } from "react-icons/gr";
import './components-style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import homePic1 from '../media/9b30f2ea61a29ad6f18170d64f31f6136c8ca0cb.png';
import homePic2 from '../media/8c09b0fb9b075b963e1260dce9f38dc2dbf1519e.jpg';
import homePic3 from '../media/55960bb9fef0219677b7f7729e9614e79d782940.png';
import homePic4 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import homePic5 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';

import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Header(){
     const settings = {
        dots: true, 
        infinite: true, 
        speed: 2000, // عدلت السرعة لتصبح منطقية أكثر
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        
    };

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
                                <h1>John Doe Experience</h1>
                                <p>Podcast Description<br/>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                                <div className="list flex">
                                    <p>Educational</p>
                                    <p>Entertainment</p>
                                    <p>Slice of Live</p>
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
                                <h1>Here Experience</h1>
                                <p>Podcast Description<br/>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                                <div className="list flex">
                                    <p>Slice of Live</p>
                                    <p>Entertainment</p>
                                    <p>Educational</p>
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
                                <h1>another Experience</h1>
                                <p>Podcast Description<br/>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                                <div className="list flex">
                                    <p>Entertainment</p>
                                    <p>Educational</p>
                                    <p>Slice of Live</p>
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
                                <h1>Alone Experience</h1>
                                <p>Podcast Description<br/>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                                <div className="list flex">
                                    <p>Educational</p>
                                    <p>Slice of Live</p>
                                    <p>Entertainment</p>
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
                                <h1>On purpose</h1>
                                <p>Podcast Description<br/>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                                <div className="list flex">
                                    <p>Educational</p>
                                    <p>Slice of Live</p>
                                    <p>Entertainment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
    
    
            <div className="quick-links-container flex">
                <div className="quick-links flex">
                    <div   className="link-container flex"><BiCategoryAlt className="icon"/><span>Categories</span></div>
                    <div className="link-container flex"><FcAudioFile className="icon"/><span>Audiobook</span></div>
                    <Link style={{color:'white'}} to='/community' className="link-container flex"><GrNetwork className="icon"/><span>Network</span></Link>
                </div>
            </div>
        </div>
    )
}