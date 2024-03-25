function solution(line) {
    const input = Number(line);
    const memo = new Map([[1, 1], [2, 1], [3, 1], [4, 2], [5, 2], [6, 3], [7, 4], [8, 5], [9, 7], [10, 9]]);
    
    for(let i = 11; i <= input; i++) {
        let sum = (memo.get(i-1) + memo.get(i-5));
        memo.set(i, sum);
    }
    
    const result = memo.get(input);
    console.log(result);
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let n = -1;

rl.on("line", (line) => {
    if(0 <= n) {
        input.push(line);
        if(n <= input.length) rl.close();
    }
    else {
        n = Number(line);
    }
    
}).on("close", () => {
    input.map(data => solution(Number(data)));
    process.exit();
});