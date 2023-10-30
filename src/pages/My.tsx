function My() {

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
    React.createElement(
      'div',
      { style: styles.body },
      React.createElement('h1', null, 'ガクチカ・自己PR'),
      React.createElement(
        'div',
        { style: styles.div },
        React.createElement('h2',null, 'ガクチカ'),
        React.createElement('p', null,
          '私が最も取り組んだことは、基本情報技術者の合格です。合格を目標した理由は、ITに関する知識をかたちに自信をつけたいと考えたからです。',
          React.createElement('br'),
          '目標達成のために、行動したことはまず、ITパスポートの合格です。ITパスポートを目指した理由は、すべての社会人が備えておいてほしい情報技術の基礎知識の取得を目的している資格なので、現状どの位基礎知識が身についているのかを確認できるからです。また、合格することで、モチベーションが向上すると考えたからです。',
          React.createElement('br'),
          '次に、基本情報技術者の取得に取り組みました。午前試験の対策として、平日の通学時に1回分の過去問演習と結果の記録をしました。休日は、5回分の過去問を解き正答率の低い回の解き直しをしました。ある程度解けるようになり、勉強への意欲が薄れかけたら時間を測りタイムアタックをし、ゲーム感覚で勉強し必ず毎日過去問を解くに心掛けていました。午後問題の対策としては、まず、苦手分野と得意分野を把握する為に2回分の過去問を解きました。平日は得意分野の問題を1問と苦手分野の問題を2問解くようにしました。得意分野を解くことで勉強への辛さをあまり感じないように工夫しました.'
        )
      ),
      React.createElement(
        'div',
        { style: styles.div },
        React.createElement('h2', null, '自己PR'),
        React.createElement('p', null,
          '私の強みは、粘り強さです。粘り強さを最も発揮したのは、資格取得に向けて取り組んでいた時です。目標に向けて地道に学習をしましたが、一度不合格になることもありました。それでも、諦めずに再挑戦し続けました。その結果、目標の資格を取得出来ました。'
        )
      )
    )
  );
}

module.exports = My;
