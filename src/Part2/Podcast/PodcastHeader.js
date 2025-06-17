import './pocastStyle.css'; 
import homePic1 from '../../media/9b30f2ea61a29ad6f18170d64f31f6136c8ca0cb.png';
import { FaCloudArrowDown, FaRegBookmark } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

export default function PodcatHeader(){
    const { t } = useTranslation();

    return(
        <div className="home-section2 flex">
            <div className="welcome-section">
                <div className="description flex">
                    <div className="img">
                        <img src={homePic1} alt=""/>
                    </div>
                    <div className="text-description">
                        <h1>{t('podcastHeader.title')}</h1>
                        <div className="list flex">
                            <p>{t('podcastHeader.categories.educational')}</p>
                            <p>{t('podcastHeader.categories.entertainment')}</p>
                            <p>{t('podcastHeader.categories.sliceOfLife')}</p>
                        </div>
                    </div>

                    <div className="quick-links-container flex">
                        <div className="quick-links flex">
                            <div className="link-container flex">
                                <FaCloudArrowDown className="icon"/>
                                <span>{t('podcastHeader.downloadInfo')}</span>
                            </div>
                            <div className="icon-container flex">
                                <FaRegBookmark className="icon"/>
                            </div>
                        </div>
                    </div>

                    <div className="about-podcast flex">
                        <div className="text">
                            <h1>{t('podcastHeader.description.title')}</h1>
                            <p>{t('podcastHeader.description.content')}</p>
                        </div>
                        <div className="text">
                            <h1>{t('podcastHeader.tags.title')}</h1>
                            <div className="list flex">
                                {t('podcastHeader.tags.items', { returnObjects: true }).map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}