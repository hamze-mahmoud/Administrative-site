
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faHashtag, faFaceSmile, faPlusCircle, faUsers, faTachometerAlt, faMoneyBillWave, faCoins, faExchangeAlt, faChartLine, faCalendarPlus, faUser, faCity, faCogs, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Route, Router, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';


import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import Signin from './Component/Sign-In/Signin';
import Header from './Component/Header/Header';
import AdminDashboard from './Component/AdminDashboard';
import DesignAllCategories from './Component/Dashboard/GetAllCategores/To_Do_List';
import OrderDataDesign from './Component/Dashboard/oreders/OrderDataDesign';
import MainDashboard from './Component/Dashboard/GetAllCategores/MainDashboard';
import Auth from './Component/Authentication/Auth';
import ContextProvider from './Component/Context/Context';

function App() {



  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={
          <div>
        <Header />
        <Signin />
    
        </div>
        }/>
       
        <Route path='/Dashboard' element={
          <div>
          <Auth> 
          <Header />
        <MainDashboard />
        </Auth>
        </div>
      
        } />
       
      </Routes>
      </ContextProvider>
    
  
 
  );
}

export default App;
