function solution(n, times) {
    times.sort((a, b) => a - b);
    
    let left = 1;
    let right = times.at(-1) * n;
    
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
        sum < n ? left = mid + 1 : right = mid - 1;
    }
    
    return left;
}