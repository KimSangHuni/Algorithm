function findChar(target, maps) {
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            if(maps[i][j] === target) return [i, j];
        }
    }
    return null;
}

function bfs(start, end, maps) {
    const max_y = maps.length;
    const max_x = maps[0].length;
    
    const dy = [-1, 1, 0, 0]; 
    const dx = [0, 0, -1, 1];
    
    const queue = [];
    const startPoint = findChar(start, maps);
    if(!startPoint) return -1;
    
    queue[0] = [...startPoint, 0];
    const visited = new Array(max_y).fill(0).map(() => new Array(max_x).fill(false));
    
    while(0 < queue.length) {
        const [ y, x, cost ] = queue.shift();
        if(maps[y][x] === end) return cost;
        // visited[y][x] = true;
        
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if(0 <= ny && ny < max_y && 0 <= nx && nx < max_x && maps[ny][nx] !== 'X') {
                // if(!visited[ny][nx]) queue.push([ny, nx, cost + 1]);
                if(!visited[ny][nx]) {
                    queue.push([ny, nx, cost+1]);
                    visited[ny][nx] = true;
                }
            }
        } 
    }

    return -1;
}

function solution(maps) {
    const findL = bfs('S', 'L', maps);
    const findE = bfs('L', 'E', maps);
    
    if(findL != -1 && findE != -1) {
        return findL + findE;
    }
    return -1;
}