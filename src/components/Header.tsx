import React from "react";

function Header(){
  return(
    <header>
    <h1>タイピングゲーム</h1>
    <button className="gemebutton">IT用語</button>
    <button className="gemebutton">流行語(昭和)</button>
    <button className="gemebutton">流行語(平成・令和)</button>
    </header>
);
}
export default Header