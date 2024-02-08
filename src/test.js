const KEYS = []

// 알파벳 A부터 Z까지 배열에 추가
for (let i = 65; i <= 90; i++) {
    KEYS.push(String.fromCharCode(i));
}
console.log(KEYS);
console.log(KEYS.length);