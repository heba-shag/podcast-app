import './auth-style.css';

import pic from '../media/ff157672c7120cfa7a60d91f9bc95b79ecd1e797.png';

export default function VerificationPage(){
    return(
        
        <div className="verification-page flex">
            <div className="header"></div>
        
            <div className="header-pic flex">
                <div className='circle1'></div>
                <div className='circle2'></div>
                <img src={pic} alt=""/>
                <h1>please verify account</h1>
            </div>
            
            <form className="flex" action="">
                <div className="box flex">
                    <label for="">enter the 6 digit code (contains letters and numbers) that we sent to your email address to verify your new account </label>
                    <div className="inputs flex">
                        <input type="text" maxlength="1" inputmode="numeric"/>
                        <input type="text" maxlength="1" inputmode="numeric"/>
                        <input type="text" maxlength="1" inputmode="numeric"/>
                        <input type="text" maxlength="1" inputmode="numeric"/>
                        <input type="text" maxlength="1" inputmode="numeric"/>
                        <input type="text" maxlength="1" inputmode="numeric"/>

                    </div>
                    <label for="">valid for 3 minutes</label>
                    <span >resend code</span>
                </div>

                
            </form>
        </div>          
    )
}