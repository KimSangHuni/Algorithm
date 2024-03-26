
function solution(input) {
    const MOD = 1000000000;
    const dp = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    for(let i = 1; i < input; i++) {
        const memo = [...dp];
        for(let j = 0; j < 10; j++) {
            if(j === 0) dp[j] = memo[1] % MOD;
            else if(j === 9) dp[j] = memo[8] % MOD;
            else dp[j] = (memo[j-1] + memo[j+1]) % MOD;
        }
    }

    return dp.reduce((prev, curr) => prev + curr, 0) % MOD;
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