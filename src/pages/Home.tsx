import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home() {

  return (
    <div>
      <main>
        <h1 className="title">タイピングゲーム</h1>
        <button className="gemebutton"><Link to="/ITtyping">IT用語</Link></button>
        <button className="gemebutton"><Link to="/Styping">流行語・受賞語(昭和)</Link></button>
        <button className="gemebutton"><Link to="/Htyping">流行語・受賞語(平成元年~平成20年)</Link></button>
        <button className="gemebutton"><Link to ="/HRtyping">流行語・受賞語(平成21年~)</Link></button>
       <p>制限時間は5分(300秒)です。</p>
        <p>「○○ガチャ」や「炎上○○」の様な○○を含む流行語は除外してあります。<br />
        「Enter」を押すと問題が変わり、正解ならばスコアが加算されます。</p>
      </main>
    </div>
  );
}

export default Home;
