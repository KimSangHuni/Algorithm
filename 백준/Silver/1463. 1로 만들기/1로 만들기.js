
function solution(input) {
    const dp = new Array(input + 1).fill(0);
    
    for(let i = 2; i <= input; i++) {
        dp[i] = dp[i-1] + 1;
        if(i % 3 === 0) dp[i] = Math.min(dp[i], dp[i/3] + 1);
        if(i % 2 === 0) dp[i] = Math.min(dp[i], dp[i/2] + 1);
    }

    return dp[input];
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];
let n = 1;

rl.on("line", (line) => {
    if(0 <= n) {
        input.push(line);
        if(n <= input.length) rl.close();
    }
    else {
        n = Number(line);
    }
    
}).on("close", () => {
    console.log(solution(Number(input[0])));
    process.exit();
});