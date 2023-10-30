function ITWord() {

  const React = require('react'); 
  const Typing = require("./Typing.tsx");



  const words = [
   "マルウェア","ハブ","サーバ","キーボード","マウス",
   "データベース","クラウド","生成AI","プログラミング" ,"レスポンス",
   "仮想マシン","ファイアウォール","クラス図","ユースケース図","脆弱性",
   "可用性","機密性","完全性","保守性","クロスサイトスプリング",
   "SQL","Java","React","CSS","JavaScript",
   "C#","C+","PHP","Ruby","HTML",
   "Python","Go","AWS","Linux"
  ]

  
  return (
    React.createElement(React.Fragment, null, React.createElement(Typing, { words: words }))
  );
}

module.exports = ITWord;
