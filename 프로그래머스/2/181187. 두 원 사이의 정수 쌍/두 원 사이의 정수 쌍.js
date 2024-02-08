function solution(r1, r2) {
    let dots = [0, 0];
    const calculator = (r, x) => (r ** 2 - x ** 2) ** 0.5;
    
    for(let i = 1; i < r2; i++) {
        if(i < r1) {
            let res = calculator(r1, i);
            dots[0] += Math.floor(Number.isInteger(res) ? res - 1 : res);
        }
        dots[1] += Math.floor(calculator(r2, i));
    }
    
    return ((dots[1] - dots[0]) * 4) + (r2 - r1 + 1) * 4;
}
