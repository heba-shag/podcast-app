import { PiAppStoreLogo, PiGooglePlayLogo, PiGooglePodcastsLogo, PiSpotifyLogo, PiYoutubeLogo } from "react-icons/pi";

import logo from '../media/Logo.png';
import './components-style.css'
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <div className="footer-section flex">
            <div className="logo flex">
                <img src={logo} alt=""/>
            </div>

            <div className="links-container flex">

                <div className="links">
                    <div className="navLinks flex">
                        <li className="link">About</li>
                        <Link to='/categories' className="link">Categories</Link>
                        <Link to='/career' className="link">Career</Link>
        
                    </div>
                    <div className="aboutLinks flex">
                        <Link className="link" to='/pricing'>Pricing</Link>
                        <li className="link">Bolg</li>
                        <li className="link">App Available on:</li>
                        
                    </div>
        
                    <div className="onLinks flex">
                        <PiGooglePlayLogo className="icon"/>
                        <PiAppStoreLogo className="icon"/>
                        
                    </div>
                </div>
        
                <div className="apps-logos flex">
                    <li ><PiGooglePodcastsLogo className="icon"/>Google Podcast</li>
                    <li ><PiSpotifyLogo className="icon"/>Spotify</li>
                    <li><PiYoutubeLogo className="icon"/>Youtube</li>
        
                </div>
            </div>
    
            
        </div>
    )
}