
//require('./Home.css');
function Home() {
  const React = require('react');  
  const styles = {
    body: {
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
    },
  };


  return (

    React.createElement('div', {style:styles.body},
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
    
  
  );
}

module.exports = Home;
