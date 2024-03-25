function solution(line) {
    const input = line[1].split(" ").map(Number);
    const dp = [input[0]];

    for(let i = 1; i < input.length; i++) {
        dp[i] = input[i] > input[i] + dp[i-1] ? input[i] : input[i] + dp[i-1];
    }
    
    console.log(Math.max(...dp));
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];
let n = 2;

rl.on("line", (line) => {
    if(0 <= n) {
        input.push(line);
        if(n <= input.length) rl.close();
    }
    else {
        n = Number(line);
    }
    
}).on("close", () => {
    solution(input);
    process.exit();
});