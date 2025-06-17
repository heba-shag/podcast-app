import './pocastStyle.css';
import homePic1 from '../../media/9b30f2ea61a29ad6f18170d64f31f6136c8ca0cb.png';
import { Link } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { IoOptions } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

export default function Episode(){
    const { t } = useTranslation();
    const episodes = t('episodes.episodesList', { returnObjects: true });

    return(
        <div className="episode-section section flex">
            <div className="header flex">
                <h2 className="title">{t('episodes.title')}</h2>
                <div style={{width:'20%',justifyContent:'space-between',padding:'0 .9rem'}} className='flex'>
                    <span className="more"><BiCategory/>{t('episodes.filters.oldest')}</span>
                    <span className="more"><IoOptions/>{t('episodes.filters.options')}</span>
                </div>   
            </div>
    
            <div className="cards-container flex">
                {episodes.map((episode, index) => (
                    <Link key={index} to='/podcast-details' className="card">
                        <img src={homePic1} alt=""/>
                        <h2>{episode.title}</h2>
                        <p>{episode.description}</p>
                    </Link>
                ))}
            </div>

            <div className="header flex">
                <h3 style={{width:'100%',justifyContent:'center',marginTop:'1rem'}} className="more flex">
                    <span>{t('episodes.showMore')}</span>
                </h3>
            </div>
        </div>
    )
}