import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Sidebar from "./SideBar";


export default function Order(){
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
                                    <label>From</label>
                                    <div className="input flex">
                                        <input  type="date"/>
                                    </div>
                                </div>

                                <div className="box flex">
                                    <label>To</label>
                                    <div className="input flex">
                                        <input type="date"/>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-box flex">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Purchase</th>
                                            <th>Cost</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07/05/2025</td>
                                            <td>Premium subscription</td>
                                            <td>5.79€</td>
                                        </tr>

                                        <tr>
                                            <td>07/03/2025</td>
                                            <td>Basic subscription</td>
                                            <td>3.79€</td>
                                        </tr>
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