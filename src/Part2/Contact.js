import { CiLocationOn } from 'react-icons/ci';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import './part2-style.css';
import { BiPlayCircle } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function Contact(){
    return(
        <>
            <Navbar/>
            <div className="contact-container flex">
                <div className="pricing-header flex">
                    <h2 className="title flex">Contact</h2>
                </div>

                <div className="info-container flex">
                    <div className='contact-info flex'>
                        <div className='address flex'>
                            <CiLocationOn className='icon flex'/>
                            <p className='text flex'>Address, street number, country</p>
                        </div>

                        <div className='address flex'>
                            <RiCustomerService2Line className='icon flex'/>
                            <p className='text flex'>Support: 78438 34868</p>
                        </div>

                        <div className='address flex'>
                            <MdEmail className='icon flex'/>
                            <p className='text flex'>Email@email.com</p>
                        </div>

                        <div className='social flex'>
                            <p className='text'>Follow our socials:</p>
                            <div className='icons flex'>
                                <BsInstagram className='icon'/>
                                <FaFacebook className='icon'/>

                            </div>
                        </div>
                    </div>

                    <div className='form flex'>
                        <h3 className='flex'>Want to send us a message?</h3>
                        <form className='flex'>
                            <div className='inputs flex'>
                                <input type='text' placeholder='Name'/>
                                <input type='number' placeholder='Phone'/>
                            </div>

                            <input type='text' placeholder='Email address'/>
                            <input className='message' type='text' placeholder='Email address'/>
                            <button className='btn flex'>Contact us</button>
                        </form>

                    </div>
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}