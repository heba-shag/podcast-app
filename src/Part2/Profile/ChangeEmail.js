import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";
import profile from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { MdEdit } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export default function ChangeEmail(){
    const { t } = useTranslation();

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
                                        <label>{t('changeEmail.fields.email')}</label>
                                        <div className="input flex">
                                            <input 
                                              placeholder={t('changeEmail.fields.placeholders.email')} 
                                              type="email"
                                            />
                                            <MdEdit className="icon"/>
                                        </div>
                                    </div>

                                    <div className="box flex">
                                        <label>{t('changeEmail.fields.recoveryAccount')}</label>
                                        <div className="input flex">
                                            <input 
                                              placeholder={t('changeEmail.fields.placeholders.recoveryEmail')} 
                                              type="email"
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