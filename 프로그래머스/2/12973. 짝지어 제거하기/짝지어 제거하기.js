function solution(s) {
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        stack.at(-1) === s[i] ? stack.pop() : stack.push(s[i]);
    }

    return !stack.length * 1;
}