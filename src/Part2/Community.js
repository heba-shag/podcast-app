import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

import spotify from '../media/97b39bf0216d4f2925bf4734dd51e22475db34f8.png';
import pic1 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import pic2 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';
import pic3 from '../media/e5994c8c12e659f134a1923bcc69c1abd12eaa7e.jpg';
import pic4 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import logo from '../media/Logo.png';
import profile1 from '../media/b734229040265dd4a19da4578cd9ecc07e5dbd1d.jpg';
import profile2 from '../media/62f2371fc43e7be5bd51f6cec2a1e655a3d0f520.jpg';

import './part2-style.css';

export default function Community() {
  
  return (
    <>
      <Navbar />
      <div className="community-container flex">
        <div className="header-pic flex">
            <img src={spotify} alt=''/>
        </div>

        <div className='grid-section flex'>
            <div className='right-side flex'>
                <h3 className='title flex'>News</h3>
                <div className='cards-container flex'>
                    <div className='card flex'>
                        <div className='img'>
                            <img className='flex' src={pic1} alt=''/>
                        </div>

                        <div className='about flex'>
                            <h2 className='card-title flex'>Top picks this month</h2>
                            <p className='text flex'>Accidental Tech won the hearts of listeners, many streamed the pod...</p>
                        </div>
                        <p className='btn flex'>Learn more</p>
                    </div>

                    <div className='card flex'>
                        <div className='img'>
                            <img src={pic2} alt=''/>
                        </div>
                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>Shocking revelation</h2>
                            <p className='text flex'>People were shocked upon hearing what Margot has said about her life...</p>
                        </div>
                        <p className='btn flex'>Learn more</p>
                    </div>

                    <div style={{border:'none'}} className='card flex'>
                        <div className='about flex'>
                            <h2 className='card-title flex'>Shane Dawson under fire</h2>
                            <p className='text flex'>Drama outbursts on the set of the Shane Dawson podcast because of a misunderstanding that occurred between Rayland and Chris...</p>
                        </div>
                        <p className='btn flex'>Learn more</p>
                    </div>
                </div>
            </div>


            <div className='middle flex'>
                <h3 className='title flex'>Announcements</h3>
                <div className='cards-container flex'>
                    <div className='main-card flex'>
                        <div className='img'>
                            <img src={pic4} alt=''/>
                        </div>
                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>Being HER is coming back with a new season!</h2>
                            <p className='text '>Our beloved Margarita is coming back with new aesthetics and spicier content to make women be the dream women that they aspire to be, understand the psyche of a man, and how to be in happy relationships that last a long time. See the original picture here: <span>hjgajsxcv.hcsjcv</span></p>
                        </div>
                    </div>

                    <div style={{border:'none'}} className='comments-card flex'>
                        <div className='header flex'>
                            <h2>Comments</h2>
                            <p>Show more</p>
                        </div>
                        <div className='comments-container flex'>
                            <div className='comments flex'>
                                <div className='img'>
                                    <img src={profile1} alt=''/>
                                </div>
                                
                                <div className='comment flex'>
                                    <h2 className='name flex'>Jessica Maxville</h2>
                                    <p className='text flex'>I absolutely love this woman!!! she makes me feel more confident.Can’t wait to learn more from her on this new season!</p>
                                </div>
                            </div>

                            <div className='comments flex'>
                                <div className='img'>
                                    <img src={profile2} alt=''/>
                                </div>

                                <input type='text' placeholder='Add a comment'/>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            


            <div className='left-side flex'>
                <h3 className='title flex'>Features</h3>
                <div className='cards-container flex'>
                    <div className='card flex'>
                        <div className='img'>
                            <img src={pic3} alt=''/>
                        </div>

                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>Spotify Features</h2>
                            <p className='text flex'>New features show that Spotify is continuously staying ahead of competitors and remains the most used app for streaming audio...</p>
                        </div>
                        <p className='btn flex'>Learn more</p>
                    </div>

                    <div className='card flex'>
                        <div className='img'>
                            <img src={logo} alt=''/>
                        </div>
                        
                        <div className='about flex'>
                            <h2 className='card-title flex'>Want more of us?</h2>
                            <p className='text flex'>You can subscribe for more premium content and seamless experience.You can also work for us. We have...</p>
                        </div>
                        <p className='btn flex'>Learn more</p>
                    </div>

                    <div style={{border:'none'}} className='card flex'>
                        <div className='about flex'>
                            <h2 className='card-title flex'>What s new</h2>
                            <p className='text flex'>You can now engage with others, share your likes and interests on the community tab.</p>
                        </div>
                        
                        <p className='btn flex'>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}