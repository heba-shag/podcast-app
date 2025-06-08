import './auth-style.css';
import logo from '../media/Logo.png'
import { BsGoogle } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context';
export default function WelcomePage(){
    const { logout } = useAuth(); 
        
    const handleLogout = () => {
        logout();
    };
    return(
        
        <div className="welcome-page flex">
            <div className="img flex">
                <img className="logo" src={logo} alt=""/>
                <h1>Welcome to Static & Signal</h1>
                <p>An app that allows you to listen to all your favorite <span>Podcasts</span> and <span>Audiobooks</span> </p>
                <div className="btns flex">
                    <div className="btn flex">
                        <BsGoogle className='icon'/>
                        <span>Continue with Google</span>
                    </div>

                    <Link to='/sign-up' style={{color:"#f65c2a"}} href="signUp.html" className="btn flex">
                        <MdEmail className='icon'/>
                        <span>Continue with Email</span>
                    </Link>

                    <Link onClick={handleLogout} to='/home-page' style={{color:"white",background:"#f65c2a"}} className="btn flex" href="/index.html">
                        <span>Continue as a Guest</span>
                    </Link>

                    <div className="login flex">
                        <p>Already have an account? <Link to='/login-page' style={{color:"#f65c2a"}} href="login.html"><span>Log in</span></Link> </p>
                        
                    </div>

                </div>

                <div className="conditions flex">
                    <p>By logging in I agree to the <a href="">Terms and Conditions </a>and <a href="">Privacy Policy</a></p>
                </div>
            </div>
        </div>         
    )
}