function solution(targets) {
    var answer = 0;
    const sortedTargets = targets.sort((a, b) => a[1] - b[1]);
    let e = 0;
    sortedTargets.forEach(target => {
        if(e <= target[0]) {
            answer++;
            e = target[1]
        }
    })
    return answer;
}