import './pocastStyle.css';

import homePic1 from '../../media/9b30f2ea61a29ad6f18170d64f31f6136c8ca0cb.png';

import { Link } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { IoOptions } from 'react-icons/io5';


export default function Episode(){
    return(
        <div className="trendy-section2 section flex">
            <div className="header flex">
                <h2 className="title">Episodes</h2>
                <div style={{width:'20%',justifyContent:'space-between'}} className='flex'>
                    <h3 className="more"><BiCategory/><span>Oldest</span></h3>
                    <h3 className="more"><IoOptions/><span>Options</span></h3>
                </div>   
            </div>
    
            <div className="cards-container flex">
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Introduction</h2>
                    <p>Hello, John Doe</p>
                </Link>

                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 1</h2>
                    <p>Podcast Description Lorem </p>
                </Link>

                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 2</h2>
                    <p>Podcast Description Lorem </p>
                </Link>

                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 3</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 4</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 5</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 6</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 7</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 8</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 9</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 10</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 11</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
    
                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 12</h2>
                    <p>Podcast Description Lorem </p>
                </Link>

                <Link to='/podcast-details' className="card">
                    <img src={homePic1} alt=""/>
                    <h2>Episode 13</h2>
                    <p>Podcast Description Lorem </p>
                </Link>
                
            </div>

            <div className="header flex">
                <h3 style={{width:'100%',justifyContent:'center',marginTop:'1rem'}} className="more flex"><span>Show more</span></h3>
            </div>
        </div>
    )
}