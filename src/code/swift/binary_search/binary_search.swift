func fn(_ arr: [Int], _ target: Int) -> Int? {
    var left = 0
    var right = arr.count - 1

    while left <= right {
        let mid = left + (right - left) / 2

        if arr[mid] == target {
            // TODO: logic
            return mid
        }
        if arr[mid] > target {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
