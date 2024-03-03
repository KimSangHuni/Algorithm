const getCountOnes = (num) => num.toString(2).replaceAll("0", "").length;

function solution(n) {
    const nCnt = getCountOnes(n);
    let m = n + 1;
    
    while(true) {
        if(getCountOnes(m) === nCnt) {
            return m;
        }
        m++;
    }
}