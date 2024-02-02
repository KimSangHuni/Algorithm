const DIV = 1000000007;

function solution(n) {
    const t = [1, 2];
    
    for(let i = 2; i < n; i++) {
        t[i] = (t[i-1] + t[i-2]) % DIV;
    }
    
    return t[n-1];
}