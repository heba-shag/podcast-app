import { useTranslation } from 'react-i18next';
import './sectionsStyle.css';
import { BiPlayCircle } from 'react-icons/bi';


export default function AboutUsSection(){
    const { t } = useTranslation();
    
    return(
        <div className="aboutUs-section section flex">
            <div className="header flex">
                <h2 className="title">{t('aboutUs.title')}</h2>
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
    )
}