function solution(s){
    var answer = true;
    const stack = [];
    for(let i = 0 ; i < s.length; i++) {
        if(stack.length === 0) {
            if(s[i] === `)`) return false;
            else stack.push(`(`);
        }
        else {
            if(stack.at(-1) === `(`) {
                if(s[i] === `)`) stack.pop();
                else stack.push(`(`);
            }
            else {
                stack.push(`(`);
            }
        }
    }
    
    return stack.length == 0 && true;
}