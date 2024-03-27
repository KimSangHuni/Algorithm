function solution(n, input) {
    const dp = Array(n).fill(1);
    const datas = input.map(data => data.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);
    
    for(let i = 1; i < n; i++) {
        let max = 0;
        for(let j = 0; j < i; j++) {
            if(datas[j][1] < datas[i][1]) {
                   max = Math.max(dp[j], max);
            }
        }
        dp[i] = max + 1;
    }
    
    return n - Math.max(...dp);
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