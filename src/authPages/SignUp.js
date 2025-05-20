import './auth-style.css';

import img1 from '../media/Logo.png';
import { Link } from 'react-router-dom';

export default function SignUp(){
    return(
        <div className="signUp-page flex">
            <div className="logo flex">
                <img src={img1} alt=""/>
            </div>

            <span className="line"> </span>

            <div className="img flex">
                <h1>Sign up via Email</h1>
            
                <form className="flex" action="">
                    <div className="box">
                        <label for="">Email</label>
                        <input type="text" />
                    </div>

                    <div className="box">
                        <label for="">New Password</label>
                        <input type="password" />
                    </div>

                    <div className="box">
                        <label for="">Confirm Password</label>
                        <input type="password" />
                    </div>

                    <div className="btns flex">

                        <Link to="/verification-page" style={{color: "white",background: "#f65c2a"}} className="btn flex">
                        <span>Sign Up</span>
                        </Link>
        
                        <div className="login flex">
                            <p >Check your Email for a code</p>
                            
                        </div>
        
                    </div>
                </form>
            </div>
        </div>
    )
}