function solution(friends, gifts) {
    
    const friendsList = {};
    
    const table = Array.from({ length: friends.length }, () => Array(friends.length).fill(0));
    const score = [];
    const answer = [];
    
    // initial, friend indexing
    friends.forEach((friend, index) => {
        friendsList[friend] = index;
        score[index] = 0;
        answer[index] = 0;
        table[index][index] = -1;
    });
    
    gifts.forEach(gift => {
        const [to, from] = gift.split(" ");
        
        const toIndex = friendsList[to];
        const fromIndex = friendsList[from];
        
        // log
        table[toIndex][fromIndex] += 1;
        
        // score
        score[toIndex] += 1;
        score[fromIndex] -= 1;
    });
    
    for(let to = 0; to < friends.length; to++) {
        for(let from = to; from < friends.length; from++) {
            if(to === from) continue;
            console.log(friends[to], friends[from])
            
            // 두명이 같을 때
            if(table[to][from] === table[from][to]) {
                // 선물지수 비교
                if(score[to] === score[from]) continue;
                 answer[score[to] < score[from] ? from : to]++;
            }
            else {
                answer[table[to][from] < table[from][to] ? from : to]++;
            }
           
        }
    }
    
    return Math.max(...answer);
}