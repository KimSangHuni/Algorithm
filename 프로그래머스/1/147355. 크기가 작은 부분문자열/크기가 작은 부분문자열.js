function solution(t, p) {
    var answer = 0;
    const PValue = Number(p);
    const pLen = p.length;
    for(let i = 0; i <= t.length-pLen; i++) {
        if(Number(t.slice(i,i+pLen)) <= PValue) answer++;
    }
    return answer;
}