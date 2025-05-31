import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";

import profile from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { BiEdit } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function Preferences(){
    return(
        <>
            <Navbar/>
            <div className="preference-container flex">
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
                                    <div className="box flex">
                                        <label>Language</label>
                                        <select className="input flex">
                                            <option value="option1">العربية</option>
                                            <option value="option2">English</option>
                                            <option value="option3">Italy</option>
                                        </select>
                                    </div>

                                    <div className="box flex">
                                        <label>Font size</label>
                                        <select className="input flex">
                                            <option value="option1">Small</option>
                                            <option value="option2">Medium</option>
                                            <option value="option3">Big</option>
                                        </select>
                                        
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