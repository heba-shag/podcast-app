
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Episode from "./Podcast/Episode";
import PodcatHeader from "./Podcast/PodcastHeader";
export default function HomePage2(){
    return(
        <>
        <Navbar/>
            <div className="all flex">
                <PodcatHeader/>
                <Episode/>
            </div>
        
        <Footer/>
        </>
    )
}