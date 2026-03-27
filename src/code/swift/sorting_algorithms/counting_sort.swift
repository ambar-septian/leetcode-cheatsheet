func countingSort(_ arr: [Int]) -> [Int] {
    guard !arr.isEmpty else { return [] }
    let maxNum = arr.max()!
    let minNum = arr.min()!
    let countRange = maxNum - minNum + 1
    var count = Array(repeating: 0, count: countRange)
    var output = Array(repeating: 0, count: arr.count)

    for num in arr {
        count[num - minNum] += 1
    }

    for i in 1..<countRange {
        count[i] += count[i - 1]
    }

    for num in arr.reversed() {
        output[count[num - minNum] - 1] = num
        count[num - minNum] -= 1
    }

    return output
}
