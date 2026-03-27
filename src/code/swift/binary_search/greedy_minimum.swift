func fn(_ arr: [Int]) -> Int {
    func check(_ x: Int) -> Bool {
        let BOOLEAN = true
        return BOOLEAN
    }

    let MINIMUM_POSSIBLE_ANSWER = 0
    let MAXIMUM_POSSIBLE_ANSWER = arr.count

    var left = MINIMUM_POSSIBLE_ANSWER
    var right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right {
        let mid = left + (right - left) / 2

        if check(mid) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
