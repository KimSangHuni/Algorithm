function solution(sequence, k) {
    let start = 0;
    let end = 0;
    
    const table = [];
    let total = sequence[0];
    
    while(end < sequence.length) {
        if(total === k) {
            table.push([start, end]);
            total += sequence[++end];
        }
        else {
            total += total < k ? sequence[++end] : -sequence[start++];
        }
    }

    const result = table.sort((a, b) => {
        const diff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
        return diff !== 0 ? diff : a[0] - b[0];
    });
    
    return result[0];
}