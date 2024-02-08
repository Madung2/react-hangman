import styles from "./Keybord.module.css"
const KEYS = []

// 알파벳 A부터 Z까지 배열에 추가
for (let i = 65; i <= 90; i++) {
    KEYS.push(String.fromCharCode(i));
}


export function Keybord({onKeyPress}) {
    const handleClick = (key) => onKeyPress(key);
    return (
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".2rem"}}>
            {KEYS.map(key => {
                // return <button key={key} style={{}}>1</button>
                return <button className={`${styles.btn}`} key={key} onClick={()=>handleClick(key)}>{key}</button>
            })}
        </div>
    )
}