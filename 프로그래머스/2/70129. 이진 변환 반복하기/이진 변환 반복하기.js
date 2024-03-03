function solution(s) {
    const answer = [0, 0];
    
    while(s.length > 1) {
        
        const sLen = s.length;
        s = s.replaceAll("0", "").length;
        
        answer[1] += sLen - s;
        answer[0]++;
        
        s = s.toString(2);
    }
    
    return answer;
}