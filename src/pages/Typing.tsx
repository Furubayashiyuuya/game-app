const React = require('react'); 
function Typing({ words }: { words: string[] }) {
  
  const { useEffect, useState } = require ("react");

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
        setTime((prevTime:any) => prevTime - 1);
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
      setScore((prevScore:any) => prevScore + Addscore);
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


  const styles = {
    Typing: {
      marginTop: '10%',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      fontSize: '30px',
      marginTop: '15px',
    },
    p: {
      fontSize: '30px',
    },
    h1: {
      fontSize: '50px',
    },
    word: {
      textAlign: 'center',
    },
    startButton: {
      fontSize: '30px',
    },
  };

  return (
    React.createElement('div', { style:styles.Typing,className: 'Typing' },
    React.createElement('h1', {style:styles.h1}, 'Typing Game'),
    React.createElement('p', {style:styles.p}, 'Score: ', score),
    React.createElement('p', {style:styles.p}, 'Time: ', time),
    time === 0 && React.createElement('p', null, 'Game Over!'),
    isPlaying ? (
      React.createElement('div', null,
        React.createElement('p', { style:styles.p,className: 'word' }, currentWord),
        React.createElement('input', {
          type: 'text',
          value: text,
          onChange: handleInputChange,
          onKeyDown: handleKeyPress,
        })
      )
    ) : (
      React.createElement('button', {style:styles.startButton, className: 'startbutton', onClick: Gamestart }, 'Start Game')
    ),
    React.createElement('button', null, React.createElement('a', {href: '/game-app' }, '戻る'))
  )
  )

  
}
module.exports = Typing;
