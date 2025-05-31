import { BiKey, BiUser } from "react-icons/bi";
import { FaRegIdCard } from "react-icons/fa";
import { HiSwitchHorizontal } from "react-icons/hi";
import { MdEmail, MdHistory, MdOutlineWork } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import './profile-style.css';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar-container flex">
            <div className="cards-container flex">
                <div className="card flex">
                    <div className="title flex">
                        <h2>General</h2>
                    </div>
                    <div className="btns flex">
                        <NavLink 
                            to='/profile-information' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <BiUser className="icon"/> Personal information
                        </NavLink>
                        <NavLink 
                            to='/preference' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <SlSettings className="icon"/> Preferences
                        </NavLink>
                        <NavLink 
                            to='/switch-account' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <HiSwitchHorizontal className="icon"/> Switch accounts
                        </NavLink>
                        <NavLink 
                            to='/change-email' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <MdEmail className="icon"/> Change email
                        </NavLink>
                        <NavLink 
                            to='/change-password' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <BiKey className="icon"/> Change password
                        </NavLink>
                        <NavLink 
                            to='/listening-history' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <MdHistory className="icon"/> Listening history
                        </NavLink>
                    </div>
                </div>

                <div className="card flex">
                    <div className="title flex">
                        <h2>Credit and purchases</h2>
                    </div>
                    <div className="btns flex">
                        <NavLink 
                            to='/order-history' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <MdOutlineWork className="icon"/> Order history
                        </NavLink>
                        <NavLink 
                            to='/card-info' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            <FaRegIdCard className="icon"/> Card information
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}