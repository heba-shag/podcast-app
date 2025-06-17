import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";
import profile from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { MdEdit } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export default function PersonalInfo(){
    const { t } = useTranslation();

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
                            <div className="btn flex">
                                {t('personalInfo.buttons.changeProfile')}
                            </div>
                            <div className="btn flex">
                                {t('personalInfo.buttons.changeCover')}
                            </div>
                        </div>

                        <div className="form-container flex">
                            <form className="form flex">
                                <div className="top-box flex">
                                    <div className="box flex">
                                        <label>{t('personalInfo.form.labels.firstName')}</label>
                                        <div className="input flex">
                                            <input 
                                              placeholder={t('personalInfo.form.placeholders.firstName')} 
                                              type="text"
                                            />
                                            <MdEdit className="icon"/>
                                        </div>
                                    </div>

                                    <div className="box flex">
                                        <label>{t('personalInfo.form.labels.lastName')}</label>
                                        <div className="input flex">
                                            <input 
                                              placeholder={t('personalInfo.form.placeholders.lastName')} 
                                              type="text"
                                            />
                                            <MdEdit className="icon"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-box flex">
                                    <div className="box flex">
                                        <label>{t('personalInfo.form.labels.contactNumber')}</label>
                                        <div className="input flex">
                                            <input 
                                              placeholder={t('personalInfo.form.placeholders.contactNumber')} 
                                              type="text"
                                            />
                                            <MdEdit className="icon"/>
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