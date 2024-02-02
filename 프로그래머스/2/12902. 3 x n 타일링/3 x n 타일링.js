const DIV = 1000000007;

function solution(n) {
    if(n % 2 === 1) return 0;
    
    let table = [0, 3, 11];
    
    for(let i = 3; i <= n / 2; i++) {
        let total = table[i-1] * 3;
        
        for(let j = i-2 ; j > 0 ; j--) {
            total += table[j] * 2;
        }
        table[i] =(total + 2) % DIV;
    }
    
    return table.at(-1);
}
