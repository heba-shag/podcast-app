import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";

import profile from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';

export default function ChangePass(){
    return(
        <>
            <Navbar/>
            <div className="change-pass-container flex">
                <Sidebar/>
                <div className="section flex">
                    <div className="top-section flex">
                        <div className="pic flex">
                            <img className="img flex" src={profile} alt=""/>
                        </div>
                    </div>

                    <div className="bottom-section flex">

                        <div className="form-container flex">
                            <form className="form flex">
                                <div className="top-box flex">
                                    <div className="pass-box flex">
                                        <label>Old password</label>
                                        <div className="input flex">
                                            <input type="password"/>
                                        </div>
                                    </div>

                                    <div className="pass-box flex">
                                        <label>New passsword</label>
                                        <div className="input flex">
                                            <input type="password"/>
                                        </div>
                                    </div>

                                    <div className="pass-box flex">
                                        <label>Confirm New passsword</label>
                                        <div className="input flex">
                                            <input type="password"/>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
        
    )
}