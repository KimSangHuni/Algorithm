function solution(input, sum=1) {
    return 0 < input ? solution(input-1, sum * input) : sum;
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];
let n = 1;

rl.on("line", (line) => {
    if (0 <= n) {
        input.push(line);
        if (n <= input.length) rl.close();
    }
    else {
        n = Number(line);
    }

}).on("close", () => {
    console.log(solution(Number(input)));
    process.exit();
});