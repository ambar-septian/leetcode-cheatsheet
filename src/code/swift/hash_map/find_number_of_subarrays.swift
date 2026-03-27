func fn(_ arr: [Int], _ k: Int) -> Int {
    var counts = [0: 1]
    var ans = 0
    var curr = 0

    for num in arr {
        // TODO: logic to change curr
        ans += counts[curr - k, default: 0]
        counts[curr, default: 0] += 1
    }

    return ans
}
