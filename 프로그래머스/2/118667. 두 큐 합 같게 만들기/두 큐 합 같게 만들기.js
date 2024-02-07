function solution(queue1, queue2) {
    let q1Sum = 0, q2Sum = 0;
    
    for (let i = 0; i < queue1.length; i++) {
        q1Sum += queue1[i];
        q2Sum += queue2[i];
    }
    
    const HALF = (q1Sum + q2Sum) / 2;
    
    const queue = [...queue1, ...queue2];
    const queueLength = queue.length;
    
    let pointer1 = 0, pointer2 = queue1.length;
    
    for(let i = 0; i < queue1.length * 3; i++) {
        if(q1Sum === HALF) return i;
        if(HALF < q1Sum) q1Sum -= queue[pointer1++ % queueLength];
        else q1Sum += queue[pointer2++ % queueLength];
    }
    
    return -1;
}