import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";

import img1 from '../../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img2 from '../../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img3 from '../../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img4 from '../../media/73a4e89e57aa99dc0fd08882597575401b3e192c.png';
import img5 from '../../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img6 from '../../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img7 from '../../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img8 from '../../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img9 from '../../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';

export default function ListeningHistory(){
    return(
        <>
            <Navbar/>
            <div className="listining-history-container flex">
                <Sidebar/>
                <div className="section flex">
                    <div  className="cards-container flex">
                        <h2 className='cards-title'>Top Results</h2>
                        <div style={{ flexWrap: 'wrap' }} className='cards flex'>

                            <div className="card">
                                <img src={img7} alt="" />
                                <h2>Startalk</h2>
                                <p>Podcast Description Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="card">
                                <img src={img1} alt="" />
                                <h2>Not alone</h2>
                                <p>Podcast Description Lorem ipsum dolor sit amet</p>
                            </div>

                            <div className="card">
                                <img src={img2} alt="" />
                                <h2>MM&M</h2>
                                <p>Podcast Description Lorem ipsum dolor sit amet</p>
                            </div>

                            <div className="card">
                                <img src={img3} alt="" />
                                <h2>The SIP</h2>
                                <p>Podcast Description Lorem ipsum dolor sit amet</p>
                            </div>

                            <div className="card">
                                <img src={img4} alt="" />
                                <h2>Family Business</h2>
                                <p>Podcast Description Lorem ipsum dolor sit amet</p>
                            </div>

                           
                            <h3 style={{color:'#f57f41',fontSize:'.8rem'}} className='cards-title'>Show more</h3>


                        </div>
                    </div>

                    <div className="cards-container flex">
                        <h2 className='cards-title'>Favorite audiobooks</h2>
                        <div className='cards flex'>
                        

                        <div className="card">
                            <img src={img8} alt="" />
                            <h2>The Album Years</h2>
                            <p>Podcast Description Lorem ipsum dolor sit amet</p>
                        </div>

                        <div className="card">
                            <img src={img9} alt="" />
                            <h2>Ear Hustle</h2>
                            <p>Podcast Description Lorem ipsum dolor sit amet</p>
                        </div>
                        </div>

                        <h3 style={{color:'#f57f41',fontSize:'.8rem'}} className='cards-title'>Show more</h3>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
        
    )
}