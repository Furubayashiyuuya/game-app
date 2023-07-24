function Typing(_a) {
    var words = _a.words;
    var React = require('react');
    var _b = require("react"), useEffect = _b.useEffect, useState = _b.useState;
    var _c = useState(""), text = _c[0], setText = _c[1];
    var _d = useState(0), score = _d[0], setScore = _d[1];
    var _e = useState(300), time = _e[0], setTime = _e[1];
    var _f = useState(false), isPlaying = _f[0], setisPlaying = _f[1];
    var _g = useState(""), currentWord = _g[0], setCurrentWord = _g[1];
    var Addscore = 0;
    useEffect(function () {
        var countdown;
        if (isPlaying && time > 0) {
            countdown = setInterval(function () {
                setTime(function (prevTime) { return prevTime - 1; });
            }, 1000);
        }
        if (time === 0) {
            setisPlaying(false);
        }
        return function () { return clearInterval(countdown); };
    }, [isPlaying, time]);
    useEffect(function () {
        setCurrentWord(getRandomWord());
    }, [words]);
    var getRandomWord = function () {
        var randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    };
    var check = function () {
        if (text.trim().toLocaleUpperCase() === currentWord.toLocaleUpperCase()) {
            var wordLength = currentWord.length;
            if (wordLength > 8) {
                Addscore = wordLength * 10;
            }
            else {
                Addscore = wordLength * 5;
            }
            setScore(function (prevScore) { return prevScore + Addscore; });
            setText("");
            setCurrentWord(getRandomWord());
        }
    };
    var handleInputChange = function (e) {
        setText(e.target.value);
    };
    var handleKeyPress = function (e) {
        if (e.key === "Enter") {
            setCurrentWord(getRandomWord());
            check();
        }
    };
    var Gamestart = function () {
        setisPlaying(true);
        setTime(300);
        setScore(0);
        setText("");
        setCurrentWord(getRandomWord());
    };
    var Gameend = function () {
        setisPlaying(false);
        alert("endgame");
    };
    return (React.createElement('div', { className: 'Typing' }, React.createElement('h1', null, 'Typing Game'), React.createElement('p', null, 'Score: '), React.createElement('p', null, 'Time: '), React.createElement('p', null, 'Game Over!'), (React.createElement('div', null, React.createElement('p', { className: 'word' }), React.createElement('input', {
        type: 'text',
    }))), (React.createElement('button', { className: 'startbutton', }, 'Start Game')), React.createElement('button', null, '戻る')));
}
module.exports = Typing;
