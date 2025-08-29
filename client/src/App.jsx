import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Career from './components/pages/Career';
import Contact from './components/pages/Contact'
import AirSourceHeatPump from './components/pages/AirSourceHeatPump';
import BoilerUpgrade from './components/pages/BoilerUpgrade';
import IWI from './components/pages/IWI';
import EWI from './components/pages/EWI';
import Loft from './components/pages/Loft';
import FTCH from './components/pages/FTCH';
import Solar from './components/pages/SolarPanel';
import Checkeligibility from './components/pages/CheckEligibility'

import AdminDashboard from './components/pages/AdminDashboard';
import AdminLogin from './components/pages/AdminLogin';
import ProtectedRoute from './components/pages/ProtectedRoute ';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/grants/ashp" element={<AirSourceHeatPump />} />
          <Route path='/grants/boiler' element={<BoilerUpgrade />} />
          <Route path='/grants/iwi' element={<IWI />} />
          <Route path='/grants/ewi' element={<EWI />} />
          <Route path='/grants/loft' element={<Loft />} />
          <Route path='/grants/ftch' element={<FTCH />} />
          <Route path='/grants/solar' element={<Solar />} />


          <Route path='/check-eligibility' element={<Checkeligibility />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
