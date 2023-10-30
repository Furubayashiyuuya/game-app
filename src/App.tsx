<<<<<<< HEAD
function App() {

  const React = require('react');
  const {  BrowserRouter, Routes, Route } = require('react-router-dom');
  const Home = require('./pages/Home');
  const SRyu = require('./pages/SRyu');
  const HRRyu = require('./pages/HRRyu');
  const HR2Ryu = require('./pages/HR2Ryu');
  const ITWord = require('./pages/ITWord');
  
  return (
    React.createElement(BrowserRouter, { basename: "/game-app" },
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home) }),
        React.createElement(Route, { path: "/Styping", element: React.createElement(SRyu) }),
        React.createElement(Route, { path: "/Htyping", element: React.createElement(HRRyu) }),
        React.createElement(Route, { path: "/HRtyping", element: React.createElement(HR2Ryu) }),
        React.createElement(Route, { path: "/ITtyping", element: React.createElement(ITWord) })
      )
    )
  );
}

module.exports = App;

/*
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home';
import SRyu from './pages/SRyu';
import HRRyu from './pages/HRRyu';
import HR2Ryu from './pages/HR2Ryu';
import ITWord from './pages/ITWord';

=======
>>>>>>> 86f7fb772bc3d74c895310750775819e3de808c3
function App() {

  const React = require('react');
  const {  BrowserRouter, Routes, Route } = require('react-router-dom');
  const Home = require('./pages/Home');
  const SRyu = require('./pages/SRyu');
  const HRRyu = require('./pages/HRRyu');
  const HR2Ryu = require('./pages/HR2Ryu');
  const ITWord = require('./pages/ITWord');
  
  return (
    React.createElement(BrowserRouter, { basename: "/game-app" },
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home) }),
        React.createElement(Route, { path: "/Styping", element: React.createElement(SRyu) }),
        React.createElement(Route, { path: "/Htyping", element: React.createElement(HRRyu) }),
        React.createElement(Route, { path: "/HRtyping", element: React.createElement(HR2Ryu) }),
        React.createElement(Route, { path: "/ITtyping", element: React.createElement(ITWord) })
      )
    )
  );
}

<<<<<<< HEAD
export default App;
*/
/*
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import SRyu from './pages/SRyu';
import HRRyu from './pages/HRRyu';
import HR2Ryu from './pages/HR2Ryu';
import ITWord from './pages/ITWord';*//*
  const Home = require('./pages/Home');
const Typing = require('./pages/Typing');
function App() {

  return(
   <Home />
  );
}

export default App;

*/
=======
module.exports = App;
>>>>>>> 86f7fb772bc3d74c895310750775819e3de808c3
