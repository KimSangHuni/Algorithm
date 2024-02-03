function solution(s) {
    const l = s.split(" ").map(Number).sort((a, b) => a - b);
    return `${l[0]} ${l.at(-1)}`;
}