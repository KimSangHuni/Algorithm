function solution(n, k) {
    var answer = 0;
    const table = n.toString(k).split("0");
    for(const num of table){
        if(isPrime(num)) answer++;
    }
    return answer;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}