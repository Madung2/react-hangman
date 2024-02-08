import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import words from './wordList.json'
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keybord } from './Keybord';

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random()* words.length)]
  }); // 임의의 단어를 리턴하는 함수 => 우리가 찾아야 하는 타겟 단어를 저장해두는 공간

  const [guessedLetter, setGuessedLetter] = useState<string[]>([]); // 유저가 인풋한 글자를 저장해두는 리스트, 리스트 안에 들어가는 값은 모두 string이다
  const [rightGuessedLetter, setRightGuessedLetter] = useState<string[]>([]);
  const [wrongGuessedLetter, setWrongGuessedLetter] = useState<string[]>([]);
  const [WIN_OR_LOSE, setWinOrLose] = useState(null);
  const numberOfGuess = new Set(guessedLetter).size - new Set(rightGuessedLetter).size
  console.log(wordToGuess);
  console.log(numberOfGuess, 'try2');
  if (wrongGuessedLetter.length>= 7) {
    // alert('You are dead')
    setWinOrLose('You are dead')
    // setGuessedLetter([]);
    // setRightGuessedLetter([]);
    // setWrongGuessedLetter([]);
    // setWordToGuess(words[Math.floor(Math.random()* words.length)]);
  };
  const wordLetters = wordToGuess.split("")
  const runRestart = () =>{
    console.log('run Restart')
    setGuessedLetter([]);
    setRightGuessedLetter([]);
    setWrongGuessedLetter([]);
    setWordToGuess(words[Math.floor(Math.random()* words.length)]);
    setWinOrLose(null);
  }
  const handleKeyPress= (key)=> {
    // if key가 wordtoGeuss에 포함되면 rightGessedLetter를 셋한다
    // hangmanWord에서 rightGuessLetter인 단어는 active 가 되고
    // hangmanWord에서 rightGuessLetter가 아니면서 guessedLetter인 글자는 inactive가 된다
    // hangmanDrawing에서 numberOFGuesss는 guessedLetter.length - rightGuessedLetter.length
    // console.log('wordletter', wordLetters)
    // console.log('key', key)
    // console.log(wordLetters.includes(key.toLowerCase()))
    if (wordLetters.includes(key.toLowerCase())) {
      console.log('word is included')
      setRightGuessedLetter(prevRightGuessedLetters=>[...prevRightGuessedLetters, key]);

    }else {
      setWrongGuessedLetter(prevWrongGuessedLetter => [...prevWrongGuessedLetter, key]);
    }
    
    setGuessedLetter(prevGuessedLetters => [...prevGuessedLetters, key]); //set을 사용해야 렌더링이 됨 다른 컴포넌트들이 업데이트 됨
    console.log(numberOfGuess+1, 'numberOfGuess')
    if (new Set(rightGuessedLetter).size +1 === new Set(wordLetters).size) {
      setWinOrLose(`You won the game!`)
    }


  }
  // const numberOfGuess = guessedLetter.length - rightGuessedLetter.length
  console.log(numberOfGuess, 'guess');
  const RESTART = () =>{
    return <button onClick={runRestart} style={{background:"white", width:"200px", height:"50px", fontSize:"2rem", visibility: WIN_OR_LOSE!=null ? "visible": "hidden"}}>restart</button>
  }




  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin : "0 auto",
      alignItems: "center"
    }}>
      <div style={{
        fontSize: "2rem",
        textAlign: "center"
      }}>
      <div style={{fontSize: "3rem", fontWeight:"bold",  fontFamily:"monospace"}}>{WIN_OR_LOSE==null ? 'Hang Man' : WIN_OR_LOSE} <br /> {RESTART()}</div>
      </div>
      <HangmanDrawing numberOfGuess={numberOfGuess} />
      <HangmanWord word={wordToGuess} guessedLetter={guessedLetter} activeLetter={rightGuessedLetter} inactiveLetter={wrongGuessedLetter}/>
      <div style={{alignSelf:"stretch"}}>
        <Keybord onKeyPress={handleKeyPress} / >
      </div>

    </div>
  )
} 

export default App
