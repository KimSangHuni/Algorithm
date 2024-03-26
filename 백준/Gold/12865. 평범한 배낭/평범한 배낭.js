
function solution(n, k, input) {
    const items = input.map(data => data.split(" ").map(Number));
    const dp = Array(k + 1).fill(0);

    for(let i = 0; i < n; i++) {
        const copy = [...dp];
        const [w, v] = items[i];
        for(let j = w; j <= k; j++) {
            dp[j] = Math.max(copy[j], copy[j-w] + v);
        }
    }
    return dp[k];
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];
let n = -1;
let k = -1;
rl.on("line", (line) => {
    if(0 <= n) {
        input.push(line);
        if(n <= input.length) rl.close();
    }
    else {
        const [_n, _k] = line.split(" ").map(Number);
        n = _n;
        k = _k;
    }
    
}).on("close", () => {
    console.log(solution(n, k, input));
    process.exit();
});