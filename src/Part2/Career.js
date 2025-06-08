import { useState, useRef, useEffect } from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

import './part2-style.css';
import { FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Auth-context';
import LogNav from '../component/LogNav';

export default function Career() {
    let loggedin=useAuth().isLoggedIn;
  return (
    <>
    {loggedin===true&&(<Navbar/>)}
    {loggedin===false&&(<LogNav/>)}
    <div className="career-container flex">
        <div className="main-section flex">
            <div className='text-section flex'>
                <h1 className="title">Join Us!</h1>
                <p className='text'>At Static and Signal, we believe every voice has a story worth hearing. Whether you re a seasoned podcast lover or just beginning your audio journey, our platform is your gateway to a world of sound that inspires, challenges, and entertains. Dive into a handpicked collection of shows spanning true crime, comedy, tech, and personal growth each crafted to spark curiosity and connect you to something deeper</p>
            </div>

            <div className='quistion-section flex'>
                <h3 className="title">Why work with us?</h3>
                <p className='text'>At Static and Signal, you won’t just clock in you’ll help craft stories that spark conversations and connect communities. We’re a team of creatives, tech minds, and storytellers building something that goes beyond sound. Here, your ideas matter, your skills grow, and every project is a chance to explore, build, and amplify voices that deserve to be heard. Join us, and be part of a culture that thrives on innovation, purpose, and real impact</p>
            </div>
        </div>

        <div className='department-section flex'>
            <div className='department-header flex'>
                <h3 className='department-title'>Departments</h3>
                <h3 className='department-title'>16 Open positions</h3>
            </div>

            <div className='section-container flex'>
                <h2 className='section-title flex'>Engineering</h2>
                <div className='section-cards flex'>
                    <div className='card flex'>
                        <p className='about-text flex'>Front end Developer</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex'>Back end Developer</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex'>Staff Software Engineer</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex'>iOS Engineering Manager</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-container flex'>
                <h2 className='section-title flex'>Security</h2>
                <div className='section-cards flex'>
                    <div className='card flex'>
                        <p className='about-text flex flex'>Senior Risk Analyst</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-container flex'>
                <h2 className='section-title flex'>IT</h2>
                <div className='section-cards flex'>
                    <div className='card flex'>
                        <p className='about-text flex flex'>Senior IT Support Specialist</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-container flex'>
                <h2 className='section-title flex'>Product</h2>
                <div className='section-cards flex'>
                    <div className='card flex'>
                        <p className='about-text flex flex'>Principal Technical Product Manager Application Security</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex flex'>Staff Product Manager</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex flex'>Senior Product Designer</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-container flex'>
                <h2 className='section-title flex'>Marketing</h2>
                <div className='section-cards flex'>
                    <div className='card flex'>
                        <p className='about-text flex'>Senior Director, Campaigns, GTM & Planning</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex'>Regional Marketing</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className='section-container flex'>
                <h2 className='section-title flex'>Management</h2>
                <div className='section-cards flex'>
                    <div className='card flex'>
                        <p className='about-text flex'>Principal Technical Program Manager, Enterprise Technology</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex'>Staff Technical Program Manager </p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex'>Social Media Specialist</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>

                    <div className='card flex'>
                        <p className='about-text flex'>SEO Specialist</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-container flex'>
                <h2 className='section-title flex'>Accounting</h2>
                <div className='section-cards flex'>
                    <div className='card flex'>
                        <p className='about-text flex'>Senior Accountant</p>
                        <div className='details flex'>
                            <span className='address'>San Francisco, CA, United States</span>
                            <button className='btn'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='contact-section flex'>
            <h2 className='title flex'>Contact</h2>
            <div className='links flex'>
                <Link className='link'>Support</Link>
                <Link className='link'>Email</Link>
                <Link className='link'>Social</Link>

            </div>
        </div>
        
    </div>
    <Footer />
    </>
  );
}