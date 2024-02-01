function solution(friends, gifts) {
    // 친구의 이름을 index number로 나타내기 위한 객체
    const friendsList = {};
    
    // 선물을 주고받은 내역을 나타내는 테이블 값, 0으로 초기화
    const table = Array.from({ length: friends.length }, () => Array(friends.length).fill(0));
    
    // 선물지수 배열
    const score = [];
    
    // 정답 제출용
    const answer = [];
    
    // friendsList는 인덱싱용이므로 index값을 넣어주었습니다.
    // 스코어와 정답은 기본값이 0이므로 0으로 초기화했습니다.
    friends.forEach((friend, index) => {
        friendsList[friend] = index;
        score[index] = 0;
        answer[index] = 0;
        
        // table에서 본인이 본인에게 준 선물은 선물이 아니므로 -1로 제외했습니다. 
        // 현재코드에서는 필요없으므로 주석처리했습니다.
        // table[index][index] = -1;
    });
    
    // 선물내역을 순회
    gifts.forEach(gift => {
    	// " "으로 split하여 준 사람과 받은 사람을 나눠주었습니다.
        const [to, from] = gift.split(" ");
        
        // friendsList에서 준사람과 받은사람 이름으로 인덱스를 가져왔습니다.
        const toIndex = friendsList[to];
        const fromIndex = friendsList[from];
        
        // 구한 인덱스 값으로 테이블에 내역을 입력합니다.
        // table[to][from]값은 to가 from에게 선물을 준 개수를 의미합니다.
        table[toIndex][fromIndex]++;
        
        // 준 사람은 스코어를 +1, 받은사람은 -1 해줍니다.
        score[toIndex]++;
        score[fromIndex]--;
    });
    
    // 각각 서로를 매칭시켜 주기위한 반복문입니다.
    for(let to = 0; to < friends.length; to++) {
    	// 한번 비교한 사람과 본인은 비교할 필요가 없으므로 
        // from 초기화 때 to + 1를 넣어줍니다.
        for(let from = to + 1; from < friends.length; from++) {
        	// 대상 to와 from가 선물을 주고받은 횟수가 같다면?
            if(table[to][from] === table[from][to]) {
            	// 선물지수도 같다면 선물 교환은 없다고 했습니다.
                if(score[to] === score[from]) continue;
                
                // 선물지수가 높은 사람에게 +1 해줍니다.
                 answer[score[to] < score[from] ? from : to]++;
            }
            else {
            	// 선물을 많이 준 사람에게 +1 해줍니다.
                answer[table[to][from] < table[from][to] ? from : to]++;
            }
           
        }
    }
    
    // 가장 많이 받은 사람의 숫자를 구해옵니다.
    return Math.max(...answer);
}