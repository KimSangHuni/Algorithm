
function solution(n, input) {
    const numbers = input.split(" ").map(Number);
    const dp = Array.from({ length:2 }, () => Array(n).fill(1));

    for(let i = 1; i < n; i++) {
        let max = 0;
        for(let j = 0; j < i; j++) {
            if(numbers[j] < numbers[i]) max = Math.max(max, dp[0][j]);
        }
        dp[0][i] = max + 1;
    }

    for(let i = n-1; i >= 0; i--) {
        let max = 0;
        for(let j = n-1; j > i; j--) {
            if(numbers[j] < numbers[i]) max = Math.max(max, dp[1][j]);
        }
        dp[1][i] = max + 1;
    }
    
    const total = [];
    for(let i = 0; i < n; i++) {
        total[i] = dp[0][i] + dp[1][i];
    }

    return Math.max(...total) - 1;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];
let n = 2;
rl.on("line", (line) => {
    if (0 <= n) {
        input.push(line);
        if (n <= input.length) rl.close();
    }
    else {
        n = Number(line);
    }

}).on("close", () => {
    console.log(solution(Number(input[0]), input[1]));
    process.exit();
});