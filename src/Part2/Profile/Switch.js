import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";
import pic1 from '../../media/3da6f6f31617de9200981ac97599356c6b4d3893.jpg';
import pic2 from '../../media/62f2371fc43e7be5bd51f6cec2a1e655a3d0f520.jpg';
import pic3 from '../../media/b734229040265dd4a19da4578cd9ecc07e5dbd1d.jpg';
import { IoIosAdd } from "react-icons/io";
import { useTranslation } from 'react-i18next';

export default function Switch(){
    const { t } = useTranslation();

    return(
        <>
            <Navbar/>
            <div className="switch-container flex">
                <Sidebar/>
                <div className="section flex">
                    <div className="bottom-section flex">
                        <div className="form-container flex">
                            <h2>{t('switchAccount.title')}</h2>
                            <div className="form flex">
                                <div style={{border:'.6rem solid #f57f41'}} className="pic flex">
                                    <img src={pic1} alt=""/>
                                </div>
                                <div className="pic flex">
                                    <img src={pic2} alt=""/>
                                </div>
                                <div className="pic flex">
                                    <img src={pic3} alt=""/>
                                </div>
                                <div className="pic flex">
                                    <IoIosAdd className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}