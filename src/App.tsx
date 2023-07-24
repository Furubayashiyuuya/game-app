
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

