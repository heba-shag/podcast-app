import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";

import profile from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { BiEdit } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function ChangeEmail(){
    return(
        <>
            <Navbar/>
            <div className="change-email-container flex">
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
                                        <label>Email</label>
                                        <div className="input flex">
                                            <input placeholder='annaliebert@gamail.com' type="email"/><MdEdit className="icon"/>
                                        </div>
                                    </div>

                                    <div className="box flex">
                                        <label>Add recovery account</label>
                                        <div className="input flex">
                                            <input placeholder='annaliebert22@gamail.com ' type="email"/><MdEdit className="icon"/>
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