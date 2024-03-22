function solution(tickets) {
    const ICN = tickets.filter(ticket => ticket[0] === "ICN").sort();
    const NOT_ICN = tickets.filter(ticket => ticket[0] !== "ICN").sort();
    const newTicketList = [...ICN, ...NOT_ICN];
    
    const route = [];
    const used = Array.from({length: tickets.length}, () => false);
    
    dfs("ICN", null, newTicketList, used, [], route);
    return route[0];
}

function dfs(next, idx, tickets, used, history, route) {
    history.push(next);
    if(history.length === tickets.length + 1) route.push(history);
    for(let i = 0; i < tickets.length; i++) {
        if(tickets[i][0] === next && !used[i]) {
            used[i] = true;
            dfs(tickets[i][1], i, tickets, used, [...history], route);
            used[i] = false;
        }
    }
}