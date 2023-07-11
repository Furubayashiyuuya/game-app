import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home';
import ITWord from './pages/ITWord';
import SRyu from './pages/SRyu';
import HRRyu from './pages/HRRyu';
import HR2Ryu from './pages/HR2Ryu';

function App() {
  return (
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/ITtyping" element={<ITWord />} />
    <Route path="/Styping" element={<SRyu/>}/>
    <Route path="/Htyping" element={<HRRyu />}/>
    <Route path="/HRtyping" element={<HR2Ryu/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
