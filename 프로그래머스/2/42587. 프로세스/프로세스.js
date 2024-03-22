function solution(priorities, location) {
    let answer = 0;
    let indxArray = []

    for(let i = 0; i < priorities.length; i++) indxArray.push(i);

    while(0 < priorities.length){        
        if(priorities[0] < Math.max(...priorities)){
            priorities.push(priorities.shift());
            indxArray.push(indxArray.shift());
        }
        else {
            answer++;
            priorities.shift();
            if(indxArray.shift() == location) return answer;
            
        }
    }
}
