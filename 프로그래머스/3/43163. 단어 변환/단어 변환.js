function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    const queue = [[begin, 0]];
    
    while(0 < queue.length) {
        const [t, step] = queue.shift();
        if(t === target) return step;
        
        for(const word of words) {
            if(verify(t, word)) queue.push([word, step+1]);            
        }
    }
    
    return 0;
}


function verify(var1, var2) {
    let cnt = 0;
    for(let i = 0; i < var1.length; i++) {
        if(var1[i] !== var2[i]) cnt++;
    }
    
    return 1 === cnt;
}