function solution(bridge_length, weight, truck_weights) {
    
    const COMPLETE_LENGTH = truck_weights.length;
    
    const queue = Array.from({ length:bridge_length }, () => 0);
    
    let successCount = 0;
    let currentWeight = truck_weights.shift();
    queue.push(currentWeight);
    queue.shift();
    
    let answer = 1;
    while(successCount < COMPLETE_LENGTH) {
        let poped = queue.shift();
        
        if(0 < poped) {
            currentWeight -= poped;
            successCount++;
        }
        
        if(currentWeight + truck_weights[0] <= weight) {
            const w = truck_weights.shift();
            queue.push(w);
            currentWeight += w;
        }
        else queue.push(0);
        answer++;
    }
    
    return answer;
}