import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import WelcomePage from './authPages/WelcomePage';
import PersonalPage from './authPages/PersonalPage';
import SignUp from './authPages/SignUp';
import Login from './authPages/Login';
import VerificationPage from './authPages/VerificationPage';

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

        
      </Routes>
    </div>
  );
}

export default App;
