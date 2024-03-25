function solution(n, line) {
    const input = line.map(Number);
    const dp = new Array(n);

    dp[0] = input[0];
    dp[1] = Math.max(input[0] + input[1], input[1]);
    dp[2] = Math.max(input[1], input[0]) + input[2];
    
    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i - 3] + input[i - 1], dp[i - 2]) + input[i];
    }

    return dp[n-1];
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