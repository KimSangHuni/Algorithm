function solution(input) {
    const inputs = input.split(" ").map(Number)
    const endpoint = inputs.every(num => num === -1);
    if(endpoint) return;
    const print = (a, b, c, result) => console.log(`w(${a}, ${b}, ${c}) = ${result}`);

    const [a, b, c] = inputs;
    const memo = [];

    for(let i = 0; i <= 20; i++) {
            memo[i] = [];
        for(let j = 0; j <= 20; j++) {
                memo[i][j] = [];
            for(let k = 0; k <= 20; k++) {
                memo[i][j][k] = null;
            }
        }   
    }

    const result = w(a, b, c, memo);
    print(a, b, c, result);

}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    solution(line);
}).on("close", () => {
    process.exit();
});

function w(a, b, c, memo) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1;
    } 
    else if (a > 20 || b > 20 || c > 20) {
        return w(20, 20, 20, memo);
    } 
    
    if(memo[a][b][c]) {
        return memo[a][b][c];
    }

    if (a < b && b < c) {
        memo[a][b][c] =  w(a, b, c-1, memo) + w(a, b-1, c-1, memo) - w(a, b-1, c, memo);
    } else {
        memo[a][b][c] =  w(a-1, b, c, memo) + w(a-1, b-1, c, memo) + w(a-1, b, c-1, memo) - w(a-1, b-1, c-1, memo);
    }

    return memo[a][b][c];
}