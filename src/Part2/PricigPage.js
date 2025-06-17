import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import './part2-style.css';
import { useTranslation } from 'react-i18next';

export default function PricingPage(){
    const { t } = useTranslation();

    return(
        <>
            <Navbar/>
            <div className="pricing-container flex">
                <div className="pricing-header flex">
                    <button className="btn">{t('pricing.toggle.annual')}</button>
                    <span>{t('pricing.toggle.monthly')}</span>
                </div>
                <div className="pricing-cards flex">
                    <div className="card flex"> 
                        <p className="card-title">{t('pricing.cards.free.title')}</p>
                        <h1 className="price">{t('pricing.cards.free.price')}</h1>
                        <ul>
                            {t('pricing.cards.free.features', { returnObjects: true }).map((feature, index) => (
                                <li key={index} className='list-item'>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card flex"> 
                        <p className="card-title">{t('pricing.cards.basic.title')}</p>
                        <h1 className="price">{t('pricing.cards.basic.price')} <span>{t('pricing.cards.basic.period')}</span></h1>
                        <ul>
                            {t('pricing.cards.basic.features', { returnObjects: true }).map((feature, index) => (
                                <li key={index} className={index === 0 ? '' : 'list-item'}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div style={{border:'.1rem solid #f57f41'}} className="card flex"> 
                        <p className="popular">{t('pricing.cards.premium.popular')}</p>
                        <p className="card-title">{t('pricing.cards.premium.title')}</p>
                        <h1 className="price">{t('pricing.cards.premium.price')} <span>{t('pricing.cards.premium.period')}</span></h1>
                        <ul>
                            {t('pricing.cards.premium.features', { returnObjects: true }).map((feature, index) => (
                                <li key={index} style={index === 0 ? {listStyle:'none'} : {}} className={index === 0 ? '' : 'list-item'}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}