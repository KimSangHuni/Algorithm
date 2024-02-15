function searchPoint(map, target) {
    for(let i = 0; i < map.length; i++)
        for(let j = 0; j < map[0].length; j++) 
            if(map[i][j] === target) return [i, j];
}


function movePoint(map, now, direction, distance) {
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    const t = { 'N': 0, 'S': 1, 'W': 2, 'E': 3 };
    
    const ny = dy[t[direction]];
    const nx = dx[t[direction]];
    
    if(!(0 <= now[0] + ny * distance && now[0] + ny * distance < map.length &&
        0 <= now[1] + nx * distance && now[1] + nx * distance < map[0].length)) {
        return now;
    }
    
    for(let i = 1; i <= distance; i++) {
        if(map[now[0] + ny * i][now[1] + nx * i] === 'X') return now;
    }
    
    return [now[0] + ny * distance, now[1] + nx * distance];
}


function stringToCharArray(str) {
  return str.split('');
}


function solution(park, routes) {
    const map = park.map(row => row.split(''));
    let start = searchPoint(park, 'S');
    
    for(const route of routes) {
        start = movePoint(map, start, route[0], Number(route[2]));
    }
    
    return start;
}