function solution(numbers, target) {
    var answer = 0;
    
    function test(index, total) {
        const next = index + 1;
        if(next < numbers.length) {
            test(next, total-numbers[next]);
            test(next, total+numbers[next]);
        }
        else if(total === target) answer++;
    }
    test(-1, 0);
    
    return answer;
}