
import Footer from "../component/Footer";
import LogNav from "../component/LogNav";
import Navbar from "../component/Navbar";
import { useAuth } from "../Context/Auth-context";
import Episode from "./Podcast/Episode";
import PodcatHeader from "./Podcast/PodcastHeader";
export default function HomePage2(){
    let loggedin=useAuth().isLoggedIn;
    
    return(
        <>
        {loggedin===true&&(<Navbar/>)}
        {loggedin===false&&(<LogNav/>)}
            <div className="all flex">
                <PodcatHeader/>
                <Episode/>
            </div>
        
        <Footer/>
        </>
    )
}