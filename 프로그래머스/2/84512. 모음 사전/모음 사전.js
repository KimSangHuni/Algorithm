function solution(word) {
    const wordbook = [];
    dfs("", 5, wordbook);    
    return wordbook.sort().indexOf(word)+1;
}

function dfs(current, maxLength, wordbook) {
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    if(current.length + 1 <= maxLength) {
        for(let i = 0; i < alphabet.length; i++) {
            wordbook.push(current + alphabet[i]);
            dfs(current + alphabet[i], maxLength, wordbook);
        }
    }
}