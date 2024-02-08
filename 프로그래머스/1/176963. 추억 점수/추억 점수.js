function solution(name, yearning, photo) {
    const table = {};
    
    for(let i = 0; i < name.length; i++) {
        table[name[i]] = yearning[i];
    }
    
    return photo.map(list => list.reduce((sum, person) => sum + (table[person] || 0), 0));
}