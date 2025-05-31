import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";

import profile from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { BiEdit } from "react-icons/bi";
import { MdEdit } from "react-icons/md";

export default function PersonalInfo(){
    return(
        <>
            <Navbar/>
            <div className="personal-container flex">
                <Sidebar/>
                <div className="section flex">
                    <div className="top-section flex">
                        <div className="pic flex">
                            <img className="img flex" src={profile} alt=""/>
                        </div>
                    </div>
                    <div className="bottom-section flex">
                        <div className="btns flex">
                            <div className="btn flex">Change profile picture </div>
                            <div className="btn flex">Change cover picture </div>
                        </div>

                        <div className="form-container flex">
                            <form className="form flex">
                                <div className="top-box flex">
                                    <div className="box flex">
                                        <label>First name</label>
                                        <div className="input flex">
                                            <input placeholder='Anna' type="text"/><MdEdit className="icon"/>
                                        </div>
                                    </div>

                                    <div className="box flex">
                                        <label>Last name</label>
                                        <div className="input flex">
                                            <input placeholder='Liebert' type="text"/><MdEdit className="icon"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-box flex">
                                    <div className="box flex">
                                        <label>Contact number</label>
                                        <div className="input flex">
                                            <input placeholder='+1(545)**********' type="text"/><MdEdit className="icon"/>
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