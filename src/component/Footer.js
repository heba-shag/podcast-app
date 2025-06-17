import { PiAppStoreLogo, PiGooglePlayLogo, PiGooglePodcastsLogo, PiSpotifyLogo, PiYoutubeLogo } from "react-icons/pi";
import logo from '../media/Logo.png';
import './components-style.css';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    
    return(
        <div className="footer-section flex">
            <div className="logo flex">
                <img src={logo} alt={t('footer.logo_alt')}/>
            </div>

            <div className="links-container flex">
                <div className="links">
                    <div className="navLinks flex">
                        <li className="link">{t('footer.about')}</li>
                        <Link to='/categories' className="link">{t('footer.categories')}</Link>
                        <Link to='/career' className="link">{t('footer.career')}</Link>
                    </div>
                    
                    <div className="aboutLinks flex">
                        <Link className="link" to='/pricing'>{t('footer.pricing')}</Link>
                        <li className="link">{t('footer.blog')}</li>
                        <li className="link">{t('footer.app_available')}</li>
                    </div>
        
                    <div className="onLinks flex">
                        <PiGooglePlayLogo className="icon" title={t('footer.google_play')}/>
                        <PiAppStoreLogo className="icon" title={t('footer.app_store')}/>
                    </div>
                </div>
        
                <div className="apps-logos flex">
                    <li><PiGooglePodcastsLogo className="icon"/>{t('footer.google_podcast')}</li>
                    <li><PiSpotifyLogo className="icon"/>{t('footer.spotify')}</li>
                    <li><PiYoutubeLogo className="icon"/>{t('footer.youtube')}</li>
                </div>
            </div>
        </div>
    )
}