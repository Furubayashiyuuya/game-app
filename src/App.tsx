<<<<<<< HEAD

=======
>>>>>>> 4c75941651f1f332f10776a5a113ac597dfaf841
function App() {

  const React = require('react');
  const {  BrowserRouter, Routes, Route } = require('react-router-dom');
  const Home = require('./pages/Home');
  const My = require('./pages/My');
  
  return (
    React.createElement(BrowserRouter, { basename: "/ssrmy-app" },
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home) }),
        React.createElement(Route, { path: "/My", element: React.createElement(My) })
      )
    )
  );
}

module.exports = App;
