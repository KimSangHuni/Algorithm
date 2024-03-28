function solution(brown, yellow) {
    if(yellow === 1) return [3, 3];
    if(yellow === 2) return [4, 3];
    
    for(let i = 2; i < yellow; i++) {
        if(yellow % i === 0) {
            const div = Math.floor(yellow / i);
            const t = i;
            if(((div+t) * 2) + 4 === brown) return [div+2, t+2];
        }
    }
}