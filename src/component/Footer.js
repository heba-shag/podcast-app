import { PiAppStoreLogo, PiGooglePlayLogo, PiGooglePodcastsLogo, PiSpotifyLogo, PiYoutubeLogo } from "react-icons/pi";

import logo from '../media/Logo.png';
import './components-style.css'
export default function Footer(){
    return(
        <div className="footer-section flex">
            <div className="logo flex">
                <img src={logo} alt=""/>
            </div>
    
            <div className="links">
                <div className="navLinks flex">
                    <li>About</li>
                    <li>Categories</li>
                    <li>Career</li>
    
                </div>
                <div className="aboutLinks flex">
                    <li>Pricing</li>
                    <li>Bolg</li>
                    <li>App Available on:</li>
                    
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
    )
}