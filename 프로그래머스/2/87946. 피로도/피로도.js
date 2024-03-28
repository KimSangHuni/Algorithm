function solution(k, dungeons) {
    const memo = [];
    const visited = Array(dungeons.length).fill(false);
    adventure(k, dungeons, visited, 0, memo);
    return Math.max(...memo);
}

function adventure(k, dungeons, visited, cnt, memo) {
    for(let i = 0; i < dungeons.length; i++) {
        if(dungeons[i][0] <= k && !visited[i]) {
            const copy = [...visited];
            copy[i] = true;
            adventure(k-dungeons[i][1], dungeons, copy, cnt+1, memo);
        }
    }
    memo.push(cnt);
}