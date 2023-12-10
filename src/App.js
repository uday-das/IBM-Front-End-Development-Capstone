import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';

function App() {

  return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
               <Route path="/sign_up" element={<Sign_Up/>}/>
               <Route path="/login" element={<Login/>}/>
           </Routes>    

        </BrowserRouter>
       
  );
}

export default App;
