import './auth-style.css';

import img1 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img2 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img3 from '../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img4 from '../media/73a4e89e57aa99dc0fd08882597575401b3e192c.png';
import img5 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img6 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img7 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img8 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img9 from '../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';
import img10 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';

import img11 from '../media/f7ac55657216297b97748de9e1869baa20101bea.jpg';
import img12 from '../media/4f2ac475f6e34f45c2e676558da7dd48ba7fe9ce.jpg';
import img13 from '../media/55960bb9fef0219677b7f7729e9614e79d782940.png';
import img14 from '../media/c98dc4b5db80e29d60e60ccb3c28f9b1ceb522b6.png';
import img15 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img16 from '../media/e0801007307ca2b94fd7bc82597a401c1811272d.jpg';
import img17 from '../media/8c09b0fb9b075b963e1260dce9f38dc2dbf1519e.jpg';
import img18 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img19 from '../media/d0b20d3822e749a0dbd046982474baf2e85cb615.jpg';
import img20 from '../media/b18b5d1e4552b034214cafd41d6452d4fee6b12e.png';

import img21 from '../media/53c2d26402d321c820b7e06240b501ea05661961.jpg';
import img22 from '../media/bcbf6e2d4470a4b1bdddfc0c251395847f355654.jpg';
import img23 from '../media/d0b20d3822e749a0dbd046982474baf2e85cb615.jpg';
import img24 from '../media/79f237da92fdf400f628f5c625d1956a386b23e2.jpg';
import img25 from '../media/b8769eb6aef78f9ea5d4e6bba3c3df0cdc7ac7dd.jpg';
import img26 from '../media/13ee52bcd851ae74b7abf2cc415363dac71bc160.jpg';
import img27 from '../media/e31e56bb26eb03a699ac8e4ea41fd11a740175e7.jpg';
import img28 from '../media/81d6668560cb1e609643ba1555bb00502f8d6962.jpg';
import img29 from '../media/dae2a0bf4cf8890a78d7d094798be6e89c7d8a8d.jpg';
import img30 from '../media/375e4901692a28078fad9f84bd3f4fcd2d41a096.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context';

export default function PersonalPage(){
    const { logout } = useAuth(); 
    
    const handleLogout = () => {
        logout();
    };

    return(
        <div className="personal-page flex">
            <div className='background flex'>
                <div className="cards-container flex">
                    <div className="card">
                        <img src={img1} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img2} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img3} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img4} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img5} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img6} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img7} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img8} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img9} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img10} alt=""/>
                    </div>
                </div>
                <div className="cards-container flex">
                    <div className="card">
                        <img src={img11} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img12} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img13} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img14} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img15} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img16} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img17} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img18} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img19} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img20} alt=""/>
                    </div>
                </div>
                <div className="cards-container flex">
                    <div className="card">
                        <img src={img21} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img22} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img23} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img24} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img25} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img26} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img27} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img28} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img29} alt=""/>
                    </div>
        
                    <div className="card">
                        <img src={img30} alt=""/>
                    </div>
                </div>
            </div>
            

            <div className="img flex">
                <div className="header flex">
                    <h1>Add your information</h1>
                    <p>Profile Picture</p>
                    <li><i className="far fas fa-user-edit"></i></li>
                </div>
                
                <form className="flex" action="">
                    <div className="box">
                        <label for="">First name</label>
                        <input type="text" />
                    </div>

                    <div className="box">
                        <label for="">Last name</label>
                        <input type="password" />
                    </div>

                    <div className="box">
                        <label for="">Contact number</label>
                        <input type="number" />
                    </div>

                    <div className="btns flex">

                        <Link to='/welcome-page' style={{color: "white",background:" #f65c2a"}} class="btn flex">
                            <span>Sign Up</span>
                        </Link>

                        <Link to='/home-page' onClick={handleLogout} className="btn flex">
                            <span>Skip</span>
                        </Link>
        
                    </div>
                </form>
            </div>
        </div>
    )
}