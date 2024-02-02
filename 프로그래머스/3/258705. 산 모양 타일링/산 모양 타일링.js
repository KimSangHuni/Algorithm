function solution(n, tops) {
    let a = [1];
    let b = [2 + tops[0]];
    
    for(let i = 1; i < n; i++) {
        a[i] = (a[i-1] + b[i-1]) % 10007;
        b[i] = ((1 + tops[i]) * a[i-1] + (2 + tops[i]) * b[i-1]) % 10007;
    }
    
    return (a[n-1] + b[n-1]) % 10007;
}