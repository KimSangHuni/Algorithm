function solution(n, words) {
    var answer = [];
    const history = [words[0]];
    for(let i = 1; i < words.length; i++) {
        if(history.at(-1).at(-1) !== words[i][0]) return [(i % n) + 1, Math.floor(i / n) + 1];
        else if(history.includes(words[i])) return [(i % n) + 1, Math.floor(i / n) + 1];
        else if(words[i].length <= 1)  return [(i % n) + 1, Math.floor(i / n) + 1];
        else history.push(words[i]);
    }

    return [0, 0];
}