
function solution(n, input) {
    const nums = [0, ...input.map(Number)];
    const dp = Array(n+1).fill(0);
    
    dp[1] = nums[1];
    dp[2] = dp[1] + nums[2];
    dp[3] = Math.max(nums[1]+nums[2], nums[1]+nums[3], nums[2]+nums[3]);

    for(let i = 4; i <= n; i++) {
        dp[i] = Math.max(dp[i-3]+nums[i-1]+nums[i], dp[i-2]+nums[i], dp[i-1]);
    }
    return dp[n];
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