import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";
import { useTranslation } from 'react-i18next';

export default function CardInfo(){
    const { t } = useTranslation();

    return(
        <>
            <Navbar/>
            <div className="card-container flex">
                <Sidebar/>
                <div className="section flex">
                    <div className="bottom-section flex">
                        <div className="form-container flex">
                            <h2>{t('cardInfo.title')}</h2>
                            <form className="form flex">
                                <div className="top-box flex">
                                    <div className="box flex">
                                        <label>{t('cardInfo.fields.cardNumber')}</label>
                                        <div className="input flex">
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-box flex">
                                    <div className="box flex">
                                        <label>{t('cardInfo.fields.expirationDate')}</label>
                                        <div className="input flex">
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <div className="box flex">
                                        <label>{t('cardInfo.fields.cvv')}</label>
                                        <div className="input flex">
                                            <input type="text"/>
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