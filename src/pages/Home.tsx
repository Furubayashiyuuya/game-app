
//require('./Home.css');
function Home() {
  const React = require('react');  
  const styles = {
    body: {
<<<<<<< HEAD
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
=======
      backgroundColor: 'rgb(177, 177, 177)',
      color: '#fff',
    },
    div: {
      marginLeft: '20%',
      width: '60%',
      border: '2px solid',
      borderBottom: 'none',
      fontSize: 'large',
    },
    h1: {
      textAlign: 'center',
>>>>>>> e3da7a679853d56d520b55149aaa71865ce7abe1
    },
  };


  return (

    React.createElement('div', {style:styles.body},
<<<<<<< HEAD
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
=======
    React.createElement(
      'div',{style:styles.div},
      React.createElement('h1', null, '自己紹介'),
      React.createElement('div',null,
        React.createElement('ul',null,
          React.createElement('li',null,'名前',
            React.createElement('p', null, 'text')),
          React.createElement('li',null,'趣味',
            React.createElement('p', null, 'ゲーム(スマートフォンゲーム)')),
          React.createElement('li',null,'スキル',
            React.createElement('ul',null,
              React.createElement('li', null, '.net →SQLのデータ操作アプリ、日記帳を作れる程度'),
              React.createElement('li', null, 'PHP →ブラウザ上でSQLのデータの並び替え等の物が作れる程度'),
              React.createElement('li', null, 'Java →基本的な文法(派生、継承)までは理解している'),
              React.createElement('li', null, 'HTML/CSS →簡単なWebページなら作れる程度'),
              React.createElement('li', null, 'JavaScrpit →Obnizを使った椅子の利用時間が分かるシステムを作製'),
              React.createElement('li', null, 'React → railwayで初めて取り組んだ'),
              React.createElement('li', null, 'AWS →DB,Webサーバの立ち上げ、ロードバランサーの設定経験あり')
            )
          )
        ),
        React.createElement('button',{ className: 'gamebutton' }, React.createElement('a', { href: '/ssrmy-app/My' }, 'ガクチカ・自己PR')),
      )
    ))      
    
  
>>>>>>> e3da7a679853d56d520b55149aaa71865ce7abe1
  );
}

module.exports = Home;
