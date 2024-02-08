export function HangmanWord({word,guessedLetter, activeLetter, inactiveLetter}) {
    console.log(activeLetter, 'rightGuessedLetter')
    console.log(inactiveLetter, 'inactiveLetter')
    
    // const guessedLetter= ["a"]
    return (<div style = {{ display:"flex", gap: ".25em", fontSize:"6rem", fontWeight:"bold", textTransform: "uppercase", fontFamily:"monospace"}}>
        {word.split("").map((letter, index) => (
            <span style={{borderBottom: ".1em solid black"}} key={index}>
                <span style={{visibility: guessedLetter.includes(letter.toUpperCase()) ? "visible" : "hidden"}}>{letter}</span>
            </span>
        ))}

    </div>)
}