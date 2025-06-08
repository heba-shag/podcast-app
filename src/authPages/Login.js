import './auth-style.css';
import img1 from '../media/Logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context'; 

export default function Login() {
    const { login } = useAuth(); 

    const handleLogin = () => {
        login();
    };

    console.log(login);

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
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>

                    <div className="box">
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>

                    <div className="btns flex">
                        <Link 
                            to='/home-page' 
                            style={{color: "white", background: "#f65c2a"}} 
                            className="btn flex" 
                            onClick={handleLogin}
                        >
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