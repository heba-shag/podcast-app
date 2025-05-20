import './auth-style.css';

import img1 from '../media/Logo.png';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div className="log-in flex">
            <div className="logo flex">
                <img src={img1} alt=""/>

            </div>
            <span className="line"> </span>
            <div className="img flex">
                <h1>Log in via Email</h1>
                <form className="flex" action="">
                    <div className="box">
                        <label for="">Email</label>
                        <input type="email" />
                    </div>

                    <div className="box">
                        <label for="">Password</label>
                        <input type="password" />
                    </div>

                    <div className="btns flex">
                        <Link to='/home-page' style={{color: "white",background: "#f65c2a"}} className="btn flex" href="homePage.html">
                            <span>Log in</span>
                        </Link>
                        
                        <div className="login flex">
                            <p style={{color: "black"}}>Forgot password? <span>Click here</span></p>
                        </div>
        
                    </div>
                </form>
            </div>
        </div>
    )
}