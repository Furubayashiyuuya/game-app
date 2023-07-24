
function SRyu() {

  const React = require('react'); 
 const Typing = require ("./Typing.tsx");
  

  const words = [
    "オシンドローム","鈴虫発言","スキゾ・パラノ","特殊浴場","まるきん","まるび","くれない族","疑惑","千円パック","す・ご・い・で・す・ネッ","教官!",
    "分衆","パフォーマンス","NTT","キャバクラ","言語戦略","ネバカ","イッキ!イッキ!","トラキチ","角抜き","私はコレで会社をやめました","投げたらアカン","100ドルショッピング","愛しているからチラいのよ",
    "究極","激辛","ファミコン","川の手","家庭内離婚","アークヒルズ","新人類","知的水準","亭主元気で留守がいい","おニャン子","プッツン","やるしかない","150円台","バクハツだ！","なんだかわからない","地揚げ","底地買い",
    "マルサ","JR","第二電電","サラダ記念日","朝シャン","ノリサメ","「なんぎやなぁ」","ゴクミ","マンガ日本経済入門","ワンフィンガー ツーフィンガー","サンキューセット","“国際”国家","鉄人",
    "ペレストロイカ","ハナモク","トマト銀行","遠赤(効果)","カイワレ族","今宵はここまでに(いたしとうござりまする)","ドライ戦争","シーマ(現象)","アグネス論争","５時から(男)","しょうゆ顔・ソース顔","一村一品","ヒューマン・ブランド","ユンケルンバ ガンバルンバ","ふつうは“汚職”と申します"    
  ]

  
  return (
 React.createElement(React.Fragment, null, React.createElement(Typing, { words: words }))
  );
}

module.exports =SRyu;
