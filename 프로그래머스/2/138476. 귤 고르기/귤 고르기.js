function solution(k, tangerine) {
    let answer = 0;
    let hashMap = new Map();
    let temp = [];

    tangerine.map(gyul => {
        if(hashMap.has(gyul)) {
            hashMap.set(gyul, hashMap.get(gyul) + 1);
        } else {
            hashMap.set(gyul, 1);
        }
    })

    for(let [key, value] of hashMap) {
        temp.push([key, value]);
    }
    
    temp = temp.sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < temp.length; i++) {
        if(k <= 0) break;
        k -= temp[i][1];
        answer += 1;
    }  

    return answer;
}