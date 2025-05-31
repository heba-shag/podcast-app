import './sectionsStyle.css';
import img1 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img2 from '../media/c98dc4b5db80e29d60e60ccb3c28f9b1ceb522b6.png';
import img3 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';
import img4 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img5 from '../media/55960bb9fef0219677b7f7729e9614e79d782940.png';
import img6 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img7 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img8 from '../media/b18b5d1e4552b034214cafd41d6452d4fee6b12e.png';
import Slider from 'react-slick';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
export default function AudioBooks() {
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
                breakpoint: 1024, // للشاشات المتوسطة (أيباد وغيرها)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, // للتابلات الصغيرة
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // للجوال
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
                <h2 className="title">Audiobooks</h2>
                <h3 className="more"><span>More</span></h3>
            </div>

            <div className="cards-container flex">
                <div className="row1 flex">
                    
                    <Slider {...settings}>
                        <div>
                            <div className="card flex">
                                <img src={img1} alt="" />
                                <div className="text-container">
                                    <h2>Broken Country</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Family Life</li>
                                        <li>Slice of Life</li>
                                        <li>Historical Fiction</li>
                                    </ul>
                                </div>
                                <BsHeartFill className='icon' />
                            </div>
                        </div>

                        <div>
                            <div className="card flex">
                                <img src={img2} alt="" />
                                <div className="text-container">
                                    <h2>Ayoade on Top</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Film</li>
                                        <li>Performing Arts</li>
                                        <li>Comedy</li>
                                    </ul>
                                </div>
                                <BsHeartFill className='icon' />
                            </div>
                        </div>

                        <div>
                            <div className="card flex">
                                <img src={img3} alt="" />
                                <div className="text-container">
                                    <h2>Atomic Habits</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Self-Help</li>
                                        <li>Personal Growth</li>
                                        <li>Psychology</li>
                                    </ul>
                                </div>
                                <BsHeartFill className='icon' />
                            </div>
                        </div>

                        <div>
                            <div className="card flex">
                                <img src={img4} alt="" />
                                <div className="text-container">
                                    <h2>The Women</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Historical Fiction</li>
                                        <li>Coming of age</li>
                                        <li>War</li>
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
                                <img src={img5} alt="" />
                                <div className="text-container">
                                    <h2>Where the Crawdads Sing</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Fiction</li>
                                        <li>Coming of Age</li>
                                        <li>Mystery</li>
                                    </ul>
                                </div>
                                <BsHeart className='icon' />
                            </div>

                        </div>
                            
                        <div>
                            <div className="card flex">
                                <img src={img6} alt="" />
                                <div className="text-container">
                                    <h2>I'm Glad My Mom Died</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Family</li>
                                        <li>Relationships</li>
                                        <li>Slice of Life</li>
                                    </ul>
                                </div>
                                <BsHeart className='icon' />
                            </div>
                            
                        </div>
                        

                        <div>
                            <div className="card flex">
                                <img src={img7} alt="" />
                                <div className="text-container">
                                    <h2>The Dutch House</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Family Life</li>
                                        <li>Coming of Age</li>
                                        <li>Historical Fiction</li>
                                    </ul>
                                </div>
                                <BsHeart className='icon' />
                            </div>
                            
                        </div>

                        

                        <div>
                            <div className="card flex">
                                <img src={img8} alt="" />
                                <div className="text-container">
                                    <h2>The Davenports</h2>
                                    <p>Audiobook Description Lorem ipsum dolor sit amet</p>
                                    <ul>
                                        <li>Romance</li>
                                        <li>Historical Fiction</li>
                                        <li>Young Adult</li>
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