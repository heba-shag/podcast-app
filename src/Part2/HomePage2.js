
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Episode from "./Podcast/Episode";
import More from "./Podcast/More";
import PodcatHeader from "./Podcast/PodcastHeader";
import Similar from "./Podcast/Similar";
export default function HomePage2(){
    
    return(
        <>
        <Navbar/>
        <PodcatHeader/>
        <Episode/>
        <Similar/>
        <More/>
        <Footer/>
        </>
    )
}