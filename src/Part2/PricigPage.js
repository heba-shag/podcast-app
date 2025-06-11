import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

import './part2-style.css';

export default function PricingPage(){
    return(
        <>
            <Navbar/>
            <div className="pricing-container flex">
                <div className="pricing-header flex">
                    <button className="btn">Annual (save 20%)</button>
                    <span>Monthly</span>

                </div>
                <div className="pricing-cards flex">
                    <div className="card flex"> 
                        <p className="card-title">Free</p>
                        <h1 className="price">demo account for <br/> 14/30 days</h1>
                        <ul>
                            <li className='list-item'>Hundreds of Podcasts to choose </li>
                            <li className='list-item'>Enjoy free content</li>
                            <li className='list-item'>Limited listens in one day</li>
                        </ul>

                    </div>

                    <div className="card flex"> 
                        <p className="card-title">Basic</p>
                        <h1 className="price">€3.79 <span>per year</span></h1>
                        <ul>
                            <li>Everything from Free <br/>+</li>
                            <li className='list-item'>Enjoy unlimited listens everyday </li>
                            <li className='list-item'>Speed variations</li>
                            <li className='list-item'>Easily hop on specific sections</li>
                        </ul>

                    </div>

                    <div style={{border:'.1rem solid #f57f41'}} className="card flex"> 
                        <p className="popular">Popular</p>
                        <p className="card-title">Premium</p>
                        <h1 className="price">€5.79 <span>per year</span></h1>
                        <ul>
                            <li style={{listStyle:'none'}}>Everything from Basic <br/>+</li> 
                            <li className='list-item'>Enjoy premium content for subscribers only </li>
                            <li className='list-item'>Download feature</li>
                            <li className='list-item'>Have multiple profiles on one account</li>
                        </ul>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}