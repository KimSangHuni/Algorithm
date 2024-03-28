function recursion(str, left, right, cnt=1) {
    if(left >= right) return [1, cnt];
    else if(str[left] != str[right]) return [0, cnt];
    else {
        return recursion(str, left+1, right-1, cnt+1);
    }
}

function solution(n, input) {
    for(let i = 0; i < n; i++) {
        const res = recursion(input[i], 0, input[i].length-1);
        console.log(`${res[0]} ${res[1]}`);
    }
}

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const input = [];
let n = -1;

rl.on("line", (line) => {
    if (0 <= n) {
        input.push(line);
        if (n <= input.length) rl.close();
    }
    else {
        n = Number(line);
    }

}).on("close", () => {
    solution(n, input);
    process.exit();
});