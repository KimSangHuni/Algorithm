class Solution {
    fun solution(targets: Array<IntArray>): Int {
        var answer: Int = 0
        val sortedTarget = targets.sortedBy { it[1] }
        
        var e = 0
        for(target in sortedTarget) {
            if(e <= target[0]) {
                answer += 1
                e = target[1]
            }
        }
        return answer
    }
}