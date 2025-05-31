import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";


export default function CardInfo(){
    return(
        <>
            <Navbar/>
            <div className="card-container flex">
                <Sidebar/>
                <div className="section flex">

                    <div className="bottom-section flex">
                        <div className="form-container flex">
                            <h2>Card information</h2>
                            <form className="form flex">

                                <div className="top-box flex">
                                    <div className="box flex">
                                        <label>Card number</label>
                                        <div className="input flex">
                                            <input type="date"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-box flex">
                                    <div className="box flex">
                                        <label>Expiration date</label>
                                        <div className="input flex">
                                            <input type="text"/>
                                        </div>
                                    </div>

                                    <div className="box flex">
                                        <label>CVC/CVV</label>
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