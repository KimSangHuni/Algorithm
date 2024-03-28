function solution(answers) {
    
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const counter = [0, 0, 0];
    
    answers.forEach((answer, i) => {
        if(a[i % a.length] === answer) counter[0]++;
        if(b[i % b.length] === answer) counter[1]++;
        if(c[i % c.length] === answer) counter[2]++;
    })
    
    const maxValue = Math.max(...counter);

    const maxIndexes = [];
    counter.forEach((value, index) => {
        if (value === maxValue) {
            maxIndexes.push(index + 1);
        }
    });

    return maxIndexes;
}