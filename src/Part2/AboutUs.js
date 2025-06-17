import { useTranslation } from 'react-i18next';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import './part2-style.css';
import { BiPlayCircle } from 'react-icons/bi';

export default function AboutUs(){
    const { t } = useTranslation();

    return(
        <>
            <Navbar/>
            <div className="aboutUs-container flex">
                <div className="header flex">
                    <h2 className="title flex">{t('aboutUs.title')}</h2>
                </div>
        
                <div className="cards-container flex">
                    <p>
                        {t('aboutUs.content1')}
                        <br/><br/>
                         {t('aboutUs.content2')}
                    </p>
                    <div className="img flex">
                        <BiPlayCircle className='icon'/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}