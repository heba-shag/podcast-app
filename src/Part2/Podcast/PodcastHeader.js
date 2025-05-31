
import './pocastStyle.css'; 

import homePic1 from '../../media/9b30f2ea61a29ad6f18170d64f31f6136c8ca0cb.png';

import { FaCloudArrowDown, FaRegBookmark } from 'react-icons/fa6';


export default function PodcatHeader(){

    return(
        <div className="home-section2 flex section">
            <div className="welcome-section">
                <div className="description flex">
                    <div className="img">
                        <img src={homePic1} alt=""/>
                    </div>
                    <div className="text-description">
                        <h1>John Doe Experience</h1>
                        <div className="list flex">
                            <p>Educational</p>
                            <p>Entertainment</p>
                            <p>Slice of Live</p>
                        </div>
                    </div>

                    <div className="quick-links-container flex">
                        <div className="quick-links flex">
                            <div  className="link-container flex"><FaCloudArrowDown className="icon"/><span>348 people have downloaded this podcast</span></div>
                            <div className="icon-container flex"><FaRegBookmark className="icon"/></div>
                        </div>
                    </div>

                    <div className="about-podcast flex">
                        <div className="text">
                                <h1>Description</h1>
                                <p>Tags At age 45, Steve Patterson made a shocking online discovery: his own missing person’s page. 
                                    Desperate to uncover why he had been included on the list, Steve called Todd Matthews, a missingpersons investigator, in search of answers. Together, Todd and Steve discover a sordid family past 
                                    that includes long-lost relatives, kidnappings, and murders. It turns out that Steve was presumed 
                                    dead because around the time he was born, his biological mother had married a serial killer who tore 
                                    their family apart. Along the way, Steve would have to make sense of a personal story with more 
                                    twists and turns than he’d ever imagined. In this thirteen-episode narrative series, Todd Matthews, 
                                    an amateur sleuth from Tennessee, tells the story of a family torn apart by tragedy and his quest to 
                                    bring them back together</p>
                                
                            </div>
                            <div className="text">
                                <h1>Tags</h1>
                                <div className="list flex">
                                    <p>#Educational</p>
                                    <p>#True Crime</p>
                                    <p>#Slice of Live</p>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}