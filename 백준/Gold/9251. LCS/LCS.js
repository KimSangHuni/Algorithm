function solution(input) {
    const str1 = input[0].split("");
    const str2 = input[1].split("");

    const dp = Array.from(Array(input[0].length + 1), () => Array(input[1].length + 1).fill(0));

    for (let i = 1; i < str1.length+1; i++) {
        for (let j = 1; j < str2.length+1; j++) {
            if (str1[i-1] === str2[j-1]) dp[i][j] = dp[i-1][j-1] + 1; 
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[dp.length-1][dp[0].length-1];
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
    console.log(solution(input));
    process.exit();
});