function solution(numbers) {
    const isPrime = (num) => {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const generatePermutations = (current, remaining) => {
        if (current !== "") {
            const num = parseInt(current);
            if (isPrime(num)) primes.add(num);   
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextCurrent = current + remaining[i];
            const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            generatePermutations(nextCurrent, nextRemaining);
        }
    };

    const primes = new Set();

    for (let i = 0; i < numbers.length; i++) {
        generatePermutations(numbers[i], numbers.slice(0, i) + numbers.slice(i + 1));
    }

    return primes.size;
}
