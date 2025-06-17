import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";
import profile from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';

export default function Preferences(){
    const { t } = useTranslation();

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
                                        <label>{t('preferences.labels.language')}</label>
                                        <select className="input flex">
                                            <option value="arabic">
                                                {t('preferences.options.languages.arabic')}
                                            </option>
                                            <option value="english">
                                                {t('preferences.options.languages.english')}
                                            </option>
                                            <option value="italian">
                                                {t('preferences.options.languages.italian')}
                                            </option>
                                        </select>
                                    </div>

                                    <div className="box flex">
                                        <label>{t('preferences.labels.fontSize')}</label>
                                        <select className="input flex">
                                            <option value="small">
                                                {t('preferences.options.fontSizes.small')}
                                            </option>
                                            <option value="medium">
                                                {t('preferences.options.fontSizes.medium')}
                                            </option>
                                            <option value="large">
                                                {t('preferences.options.fontSizes.large')}
                                            </option>
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