import React, { useEffect, useState } from "react";
import './Typing.css';
import { Link } from "react-router-dom";
function Typing({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(300);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  
  let Addscore =0;
  useEffect(() => {
    let countdown: NodeJS.Timeout;

    if (isPlaying && time > 0) {
      countdown = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setisPlaying(false);
    }

    return () => clearInterval(countdown);
  }, [isPlaying, time]);

  useEffect(() => {
    setCurrentWord(getRandomWord());
  }, [words]);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const check = () => {
    if (text.trim().toLocaleUpperCase() === currentWord.toLocaleUpperCase()) {
      const wordLength = currentWord.length;
      if(wordLength >8){
      Addscore = wordLength*10;
      }else{
      Addscore = wordLength*5
      }
      setScore((prevScore) => prevScore + Addscore);
      setText("");
      setCurrentWord(getRandomWord());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCurrentWord(getRandomWord());
      check();
    }
  };
  const Gamestart = () => {
    setisPlaying(true);
    setTime(300);
    setScore(0);
    setText("");
    setCurrentWord(getRandomWord());
  };

  const Gameend = () => {
    setisPlaying(false);
    alert("endgame");
  };

  return (
    <div className="Typing">
      <h1>Typing Game</h1>
      <p>Score: {score}</p>
      <p>Time: {time}</p>
      {time === 0 && <p>Game Over!</p>}
      {isPlaying ? (
        <div>
          <p className="word">{currentWord}</p>
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
      ) : (
        <button className="startbutton" onClick={Gamestart}>Start Game</button>
      )}
      <button><Link to="/" >戻る</Link></button>
    </div>
  );
}

export default Typing;
