function solution(n, computers) {
    var answer = 0;
    let visited = Array.from({length:computers.length}, () => false);
    
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            dfs(computers, n, i, visited);
            answer++;
        }
    }
    
    return answer;
}

function dfs(computers, n, i, visited) {
    visited[i] = true;
    for(let j = 0; j < n; j++) {
        if(j !== i && !visited[j] && computers[i][j] === 1) {
            dfs(computers, n, j, visited);
        }
    }
}