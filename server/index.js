require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, Route } = require('react-router-dom');
const Home = require('../src/pages/Home.tsx');
const ITWord = require('../src/pages/ITWord.tsx');
const Typning = require('../src/pages/Typing.tsx');
const SRyu = require('../src/pages/SRyu.tsx');
const HR2R = require('../src/pages/HR2Ryu.tsx');
const HRRyu = require('../src/pages/HRRyu.tsx');
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
        <script src="client.js"></script>
      </body>
    </html>
  `);
});

app.get('/game-app/ITtyping', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(ITWord));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
      
        <title>IT Typing</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="client.js"></script>
      </body>
    </html>
  `);
});

app.get('/game-app/Typing', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(Typning));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>IT Typing</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
});

app.get('/game-app/Styping', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(SRyu));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>IT Typing</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
});

app.get('/game-app/Htyping', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(HRRyu));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>IT Typing</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
});

app.get('/game-app/HRtyping', (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(HR2R));
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>IT Typing</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
});
app.listen(9000, 'localhost', () => {
  console.log(`Server running at 9000`);
});

