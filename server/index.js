require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, Route } = require('react-router-dom');
const Home = require('../src/pages/Home.tsx');

const My = require('../src/pages/My.tsx');
const http = require('http');

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9000;


app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Home));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server-side Rendering</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

app.get('/ssrmy-app/My', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(My));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
      
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/js"></script>
      </body>
    </html>
  `);
});


app.listen(9000, 'localhost', () => {
  console.log(`Server running at 9000`);
});

