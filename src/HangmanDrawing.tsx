const HEAD = (
    <div style={{width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position:"absolute", top: "50px", right:"-30px"}}/ >
)
const BODY= (
    <div style={{height: "130px", width: "10px", background: "black", position: "absolute", top: "120px", right:0}} />
)
const LEFT_ARM =(
 <div style={{height: "100px", width: "10px", background: "black", position: "absolute", top: "100px", right:"40px", rotate:"-50deg"}} />
)
const RIGHT_ARM =(
 <div style={{height: "100px", width: "10px", background: "black", position: "absolute", top: "100px", right:"-40px", rotate:"50deg"}} />
)
const LEFT_LEG =(
 <div style={{height: "100px", width: "10px", background: "black", position: "absolute", top: "230px", right:"40px", rotate:"50deg"}} />
)
const RIGHT_LEG =(
 <div style={{height: "100px", width: "10px", background: "black", position: "absolute", top: "230px", right:"-40px", rotate:"-50deg"}} />
)
export function HangmanDrawing({numberOfGuess}) {

    const HANGMAN = (numberOfGuess)=>{
        switch (numberOfGuess) {
            case 0:
                return <div></div>
            case 1:
                return <div>{HEAD}</div>
            case 2:
                return <div>{HEAD}{BODY}</div>
            case 3:
                return <div>{HEAD}{BODY}{LEFT_ARM}</div>
            case 4:
                return <div>{HEAD}{BODY}{LEFT_ARM}{RIGHT_ARM}</div>
            case 5:
                return <div>{HEAD}{BODY}{LEFT_ARM}{RIGHT_ARM}{LEFT_LEG}</div>
            case 6:
                return <div>{HEAD}{BODY}{LEFT_ARM}{RIGHT_ARM}{LEFT_LEG}{RIGHT_LEG}</div>
            default:
                return <div></div>
        }

    } 


    return (<div style={{position: "relative"}}>

        <div style={{height: "10px", width: "200px", background: "black", marginLeft: "120px"}} /> 
        <div style={{height: "50px", width: "10px", background: "black", position: "absolute", top: 0, right:0}} />
        {HANGMAN(numberOfGuess)}
        <div style={{height: "400px", width: "10px", background: "black", marginLeft: "120px"}} />
        <div style={{height: "10px", width: "250px", background: "black"}} />

        
    </div>)
}