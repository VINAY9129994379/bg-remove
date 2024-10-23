import React from 'react';
import BuyCredit from './pages/BuyCredit';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
