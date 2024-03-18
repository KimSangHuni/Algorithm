function solution(n, works) {
    if(works.reduce((a, b) => a + b) <= n) return 0;
    
    works.sort((a, b) => b - a);
    const workLength = works.length;
    
    doWork(n, works, workLength);
    
    return getFatigue(works);
}


function getFatigue(works) {
    return works.reduce((a, b) => a + Math.pow(b, 2), 0);
}


function doWork(n, works, workLength) {
    
    while(0 < n) {
        const max = works[0];
        for(let i = 0; i < workLength; i++) {
            if(max <= works[i]) {
                n--;
                works[i]--;
            }
            if(!n) break;
        }
    }
}