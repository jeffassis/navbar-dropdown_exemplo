import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import ContactUs from './components/pages/ContactUs'
import Consulting from './components/pages/Consulting'
import Marketing from './components/pages/Marketing'
import Design from './components/pages/Design'
import Development from './components/pages/Development'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/design' element={<Design />} />
        <Route path='/development' element={<Development />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
