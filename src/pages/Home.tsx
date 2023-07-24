
//require('./Home.css');
function Home() {
  const React = require('react');  
  const styles = {
    body: {
      backgroundColor: 'rgb(228, 112, 29)',
    },
    main: {
      backgroundColor: 'lightgray',
      marginTop: '10%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'solid',
    },
    title: {
      fontSize: '50px',
      marginBottom: '20px',
    },
    gameButton: {
      fontSize: '30px',
      display: 'flex',
      margin: 'auto',
      marginTop: '15px',
      marginBottom: '15px',
    },
  };


  return (

    React.createElement('div', {style:styles.body},
    React.createElement('main', {style:styles.main},
      React.createElement('h1', { className: 'title' }, 'タイピングゲーム'),
      React.createElement('button',{ className: 'gamebutton' }, React.createElement('a', { href: '/game-app/ITtyping' }, 'IT用語')),
      React.createElement('button', { className: 'gamebutton' }, React.createElement('a', {href: '/game-app/Styping' }, '流行語・受賞語(昭和)')),
      React.createElement('button',{ className: 'gamebutton' }, React.createElement('a', { href: '/game-app/Htyping' }, '流行語・受賞語(平成元年~平成20年)')),
      React.createElement('button',{ className: 'gamebutton' }, React.createElement('a', { href: '/game-app/HRtyping' }, '流行語・受賞語(平成21年~)')),
      React.createElement('p', null, '制限時間は5分(300秒)です。'),
      React.createElement('p', null, '「○○ガチャ」や「炎上○○」の様な○○を含む流行語は除外してあります。<br />「Enter」を押すと問題が変わり、正解ならばスコアが加算されます。')
    )
  )
  );
}

module.exports = Home;
