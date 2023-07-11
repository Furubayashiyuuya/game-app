import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import ITWord from './pages/ITWord';
import SRyu from './pages/SRyu';
import HRRyu from './pages/HRRyu';
import HR2Ryu from './pages/HR2Ryu';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter basename="/game-app">
      <Routes>
        <Route path="/" element={<Home />} />
        
    <Route path="/Styping" element={<SRyu/>}/>
    <Route path="/Htyping" element={<HRRyu />}/>
    <Route path="/HRtyping" element={<HR2Ryu/>}/>
    <Route path="/ITtyping" element={<ITWord />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
