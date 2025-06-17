import { CiLocationOn } from 'react-icons/ci';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import './part2-style.css';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contact(){
    const { t } = useTranslation();

    return(
        <>
            <Navbar/>
            <div className="contact-container flex">
                <div className="pricing-header flex">
                    <h2 className="title flex">{t('contact.title')}</h2>
                </div>

                <div className="info-container flex">
                    <div className='contact-info flex'>
                        <div className='address flex'>
                            <CiLocationOn className='icon flex'/>
                            <p className='text flex'>{t('contact.address.text')}</p>
                        </div>

                        <div className='address flex'>
                            <RiCustomerService2Line className='icon flex'/>
                            <p className='text flex'>{t('contact.support.text')}</p>
                        </div>

                        <div className='address flex'>
                            <MdEmail className='icon flex'/>
                            <p className='text flex'>{t('contact.email.text')}</p>
                        </div>

                        <div className='social flex'>
                            <p className='text'>{t('contact.social.title')}</p>
                            <div className='icons flex'>
                                <BsInstagram className='icon'/>
                                <FaFacebook className='icon'/>
                            </div>
                        </div>
                    </div>

                    <div className='form flex'>
                        <h3 className='flex'>{t('contact.form.title')}</h3>
                        <form className='flex'>
                            <div className='inputs flex'>
                                <input type='text' placeholder={t('contact.form.fields.name')}/>
                                <input type='number' placeholder={t('contact.form.fields.phone')}/>
                            </div>

                            <input type='text' placeholder={t('contact.form.fields.email')}/>
                            <input className='message' type='text' placeholder={t('contact.form.fields.message')}/>
                            <button className='btn flex'>{t('contact.form.button')}</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}