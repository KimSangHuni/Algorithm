
function solution(n, input) {
    const numbers = input.split(" ").map(Number);
    const dp = new Array(n);

    dp[0] = 1;
    for(let i = 1; i < n; i++) {
        let max = 0;
        for(let j = 0; j < i; j++) {
            if(numbers[j] < numbers[i]) max = Math.max(max, dp[j]);
        }
        dp[i] = max + 1;
    }
    
    return Math.max(...dp);
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