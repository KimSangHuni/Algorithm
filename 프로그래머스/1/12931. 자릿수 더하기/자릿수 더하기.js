function solution(n)
{
    var answer = 0;

    while(0 < n) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }

    return answer;
}