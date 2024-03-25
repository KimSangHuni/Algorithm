function solution(n, data) {
    const input = data.map(d => d.split(" ").map(Number));
    const dp = Array.from({length:n}, () => Array(3).fill(0));
    
    dp[0][0] = input[0][0];
    dp[0][1] = input[0][1];
    dp[0][2] = input[0][2];

    for(let i = 1; i < n; i++) {
        dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + input[i][0];
        dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + input[i][1];
        dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + input[i][2];
    }

    return Math.min(...dp.at(-1));
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

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
    console.log(solution(n, input));
    process.exit();
});