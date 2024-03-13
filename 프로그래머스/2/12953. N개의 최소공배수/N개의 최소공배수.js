function solution(arr) {
    arr.sort((a, b) => a - b);
    let init = arr.at(-1);
    let max = init;
    
    while(true) {
        if(arr.every(item => init % item === 0)) return init;
        init += max;
    }
    return answer;
}