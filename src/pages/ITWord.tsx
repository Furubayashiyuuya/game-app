import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typing from "./Typing";

function ITWord() {
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
    <>
    <h2>bbbbb</h2>
      <Typing words={words} />
    </>
  );
}

export default ITWord;
