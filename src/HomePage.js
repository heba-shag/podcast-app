
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import AboutUsSection from "./sections/AboutUsSection";
import AdsSection from "./sections/AdsSection";
import AudioBooks from "./sections/AudioBooks";
import BusinessSection from "./sections/BusinessSection";
import EducationSection from "./sections/EducationSection";
import EntertainmentSection from "./sections/EntertainmentSection";
import TopPicks from "./sections/TopPicks";
import TrendySection from "./sections/TrendySection";

export default function HomePage(){
    return(
        <>
        <Navbar/>
        <Header/>
        <TrendySection/>
        <TopPicks/>
        <AdsSection/>
        <EducationSection/>
        <EntertainmentSection/>
        <AudioBooks/>
        <BusinessSection/>
        <AboutUsSection/>
        <Footer/>
        </>
    )
}