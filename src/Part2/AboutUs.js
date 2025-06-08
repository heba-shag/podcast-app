import Footer from '../component/Footer';
import LogNav from '../component/LogNav';
import Navbar from '../component/Navbar';
import { useAuth } from '../Context/Auth-context';
import './part2-style.css';
import { BiPlayCircle } from 'react-icons/bi';

export default function AboutUs(){
    let loggedin=useAuth().isLoggedIn;
    return(
        <>
            {loggedin===true&&(<Navbar/>)}
            {loggedin===false&&(<LogNav/>)}
            <div className="aboutUs-container flex">
                <div className="header flex">
                    <h2 className="title flex">About Us</h2>
                </div>
        
                <div className="cards-container flex">
                    <p>
                        Welcome to Static and Signal, your go-to destination for all things 
                        podcasts! We are passionate about the art of storytelling and the 
                        power of audio to connect, inform, and entertain. Our mission is to 
                        curate a diverse range of podcasts that resonate with listeners from 
                        all walks of life.
                        <br/>
                        At Static and Signal, we believe that every voice deserves to be 
                        heard. Whether you re a podcast enthusiast or just starting your 
                        audio journey, our platform offers a carefully selected collection of 
                        shows across various genres, including true crime, comedy, 
                        technology, and personal development.
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