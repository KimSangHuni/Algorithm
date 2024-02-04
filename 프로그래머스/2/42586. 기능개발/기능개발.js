function solution(progresses, speeds) {
    var answer = [];
    
    while (progresses.length > 0) {
        const daysNeeded = Math.ceil((100 - progresses[0]) / speeds[0]);
        
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i] * daysNeeded;
        }
        
        let completedJobs = 0;
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            completedJobs++;
        }
        
        if (completedJobs > 0) {
            answer.push(completedJobs);
        }
    }

    return answer;
}
