class Solution {
    fun solution(queue1: IntArray, queue2: IntArray): Int {
        var q1Sum:Long = queue1.sum().toLong()
        var q2Sum:Long = queue2.sum().toLong()
        
        val half = (q1Sum + q2Sum) / 2
        
        val queue = queue1 + queue2
        val queueLength = queue.size
        
        var p1 = 0
        var p2 = queue1.size
        
        for(cnt in 0 until queue1.size * 3) {
            if(q1Sum == half) {
                return cnt
            }
            
            if(half < q1Sum) {
                q1Sum -= queue[p1++ % queueLength]
            }
            else {
                q1Sum += queue[p2++ % queueLength]
            }
        }
        return -1;
    }
}