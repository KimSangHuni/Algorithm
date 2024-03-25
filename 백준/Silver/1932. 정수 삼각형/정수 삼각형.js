function solution(n, data) {
    const input = data.map(d => d.split(" ").map(Number));

    for(let i = n-1; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            input[i-1][j] += Math.max(input[i][j], input[i][j+1]);
        }
    }
    
    return input[0][0];
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