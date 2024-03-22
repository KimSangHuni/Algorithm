function solution(N, number) {
    const dp = Array.from({length: 9}, () => new Set());
    dp[1].add(N);
    for(let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        for(let j = 1; j < i; j++) {
            for(const n1 of dp[j]) {
                for(const n2 of dp[i-j]) {
                    dp[i].add(n1 + n2);
                    dp[i].add(n1 - n2);
                    dp[i].add(n1 * n2);
                    dp[i].add(Math.floor(n1 / n2));
                }
            }
        }
        if (dp[i].has(number)) {
            return i;
        }
    }
    
    return -1;
}