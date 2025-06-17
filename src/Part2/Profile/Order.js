import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";
import { useTranslation } from 'react-i18next';

export default function Order(){
    const { t } = useTranslation();
    const tableRows = t('order.table.rows', { returnObjects: true });

    return(
        <>
            <Navbar/>
            <div className="order-container flex">
                <Sidebar/>
                <div className="section flex">
                    <div className="bottom-section flex">
                        <div className="form-container flex">
                            <div className="top-box flex">
                                <div className="box flex">
                                    <label>{t('order.labels.from')}</label>
                                    <div className="input flex">
                                        <input type="date"/>
                                    </div>
                                </div>

                                <div className="box flex">
                                    <label>{t('order.labels.to')}</label>
                                    <div className="input flex">
                                        <input type="date"/>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-box flex">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{t('order.table.headers.date')}</th>
                                            <th>{t('order.table.headers.purchase')}</th>
                                            <th>{t('order.table.headers.cost')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableRows.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.date}</td>
                                                <td>{row.purchase}</td>
                                                <td>{row.cost}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}