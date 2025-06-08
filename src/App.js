import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import WelcomePage from './authPages/WelcomePage';
import PersonalPage from './authPages/PersonalPage';
import SignUp from './authPages/SignUp';
import Login from './authPages/Login';
import VerificationPage from './authPages/VerificationPage';
import PricingPage from './Part2/PricigPage';
import Categories from './Part2/Categories';
import Career from './Part2/Career';
import Community from './Part2/Community';
import Library from './Part2/Library';
import AboutUs from './Part2/AboutUs';
import Contact from './Part2/Contact';
import Search from './Part2/Search/Search';
import SIP from './Part2/Search/SIP';
import PersonalInfo from './Part2/Profile/PersonalInf';
import Preferences from './Part2/Profile/Preferences';
import ChangeEmail from './Part2/Profile/ChangeEmail';
import ChangePass from './Part2/Profile/ChangePass';
import ListeningHistory from './Part2/Profile/ListiningHistory';
import CardInfo from './Part2/Profile/CardInfo';
import Order from './Part2/Profile/Order';
import Switch from './Part2/Profile/Switch';
import HomePage2 from './Part2/HomePage2';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<PersonalPage />} />
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login-page' element={<Login/>}/>
        <Route path='/verification-page' element={<VerificationPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/search/SIP' element={<SIP/>}/>
        <Route path='/profile-information' element={<PersonalInfo/>}/>
        <Route path='/preference' element={<Preferences/>}/>
        <Route path='/change-email' element={<ChangeEmail/>}/>
        <Route path='/change-password' element={<ChangePass/>}/>
        <Route path='/listening-history' element={<ListeningHistory/>}/>
        <Route path='/card-info' element={<CardInfo/>}/>
        <Route path='/order-history' element={<Order/>}/>
        <Route path='/switch-account' element={<Switch/>}/>
        <Route path='/podcast-details' element={<HomePage2/>}/>
      </Routes>
    </div>
  );
}

export default App;
