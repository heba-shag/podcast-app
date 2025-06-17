import { BiKey, BiUser } from "react-icons/bi";
import { FaRegIdCard } from "react-icons/fa";
import { HiSwitchHorizontal } from "react-icons/hi";
import { MdEmail, MdHistory, MdOutlineWork } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import './profile-style.css';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const iconComponents = {
  BiUser,
  SlSettings,
  HiSwitchHorizontal,
  MdEmail,
  BiKey,
  MdHistory,
  MdOutlineWork,
  FaRegIdCard
};

export default function Sidebar() {
    const { t } = useTranslation();

    return (
        <div className="sidebar-container flex">
            <div className="cards-container flex">
                <div className="card flex">
                    <div className="title flex">
                        <h2>{t('sidebar.general')}</h2>
                    </div>
                    <div className="btns flex">
                        <NavLink 
                            to='/profile-information' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.personalInfo.icon')]()}
                            {t('sidebar.menuItems.personalInfo.text')}
                        </NavLink>
                        <NavLink 
                            to='/preference' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.preferences.icon')]()}
                            {t('sidebar.menuItems.preferences.text')}
                        </NavLink>
                        <NavLink 
                            to='/switch-account' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.switchAccounts.icon')]()}
                            {t('sidebar.menuItems.switchAccounts.text')}
                        </NavLink>
                        <NavLink 
                            to='/change-email' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.changeEmail.icon')]()}
                            {t('sidebar.menuItems.changeEmail.text')}
                        </NavLink>
                        <NavLink 
                            to='/change-password' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.changePassword.icon')]()}
                            {t('sidebar.menuItems.changePassword.text')}
                        </NavLink>
                        <NavLink 
                            to='/listening-history' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.listeningHistory.icon')]()}
                            {t('sidebar.menuItems.listeningHistory.text')}
                        </NavLink>
                    </div>
                </div>

                <div className="card flex">
                    <div className="title flex">
                        <h2>{t('sidebar.creditPurchases')}</h2>
                    </div>
                    <div className="btns flex">
                        <NavLink 
                            to='/order-history' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.orderHistory.icon')]()}
                            {t('sidebar.menuItems.orderHistory.text')}
                        </NavLink>
                        <NavLink 
                            to='/card-info' 
                            className={({ isActive }) => 
                                `btn flex ${isActive ? "active" : ""}`
                            }
                        >
                            {iconComponents[t('sidebar.menuItems.cardInfo.icon')]()}
                            {t('sidebar.menuItems.cardInfo.text')}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}