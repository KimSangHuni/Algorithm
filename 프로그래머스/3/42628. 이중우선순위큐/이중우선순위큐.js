function solution(operations) {
    var answer = [];
    for(const op of operations) {
        const [cmd, value] = op.split(" ");
        
        switch(cmd) {
            case "I":
                answer.push(Number(value));
                answer.sort((a , b) => a - b);
                break;
                
            case "D":
                if(value == "1") answer.pop();
                else answer.shift();
                
                break;
        }
    }
    
    
    if(0 < answer.length) {
        answer.sort((a , b) => a - b);
        return [answer.at(-1), answer[0]];
    }
    
    return [0, 0];
}