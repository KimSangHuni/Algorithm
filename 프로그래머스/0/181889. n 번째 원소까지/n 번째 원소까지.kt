class Solution {
    fun solution(num_list: IntArray, n: Int): IntArray {
        return num_list.sliceArray(0..n-1)
    }
}