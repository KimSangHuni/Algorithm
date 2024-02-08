function bfs(maps) {
    
    const end_y = maps.length-1;
    const end_x = maps[0].length-1;
    
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    const queue = [[0, 0, 1]];
    
    while(0 < queue.length) {
        const [y, x, cost] = queue.shift();
        if(end_y === y && end_x === x) return cost;
        for(let i = 0; i < 4; i++) {
            const ny = y - dy[i];
            const nx = x - dx[i];
            
            if(0 <= ny && ny <= end_y && 0 <= nx && nx <= end_x && maps[ny][nx] != 0) {
                    maps[ny][nx] = 0;
                    queue.push([ny, nx, cost+1]);
            }
        }
    }
    
    return -1;
}

function solution(maps) {
    return bfs(maps);
}