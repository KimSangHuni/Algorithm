function solution(sizes) {
    const x = [];
    const y = [];
    const list = sizes.map(size => {
        x.push(Math.max(...size));
        y.push(Math.min(...size));
    })
    
    return Math.max(...x) * Math.max(...y);
}