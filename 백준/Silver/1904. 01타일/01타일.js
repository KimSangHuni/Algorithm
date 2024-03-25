function solution(line) {
    const input = Number(line);
    const memo = new Map();
    const MOD = 15746;
    memo.set(1, 1);
    memo.set(2, 2);
    
    for(let i = 3; i <= input; i++) {
        let sum = (memo.get(i-1) + memo.get(i-2)) % MOD;
        memo.set(i, sum);
    }
    
    const result = memo.get(input);
    console.log(result % 15746);
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
}).on("close", () => {
    process.exit();
});