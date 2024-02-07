function solution(nums) {
    const set = new Set(nums).size;
    const l = nums.length / 2;
    return set < l ? set : l;
}