func pancakeSort(_ arr: inout [Int]) {
    let n = arr.count

    for size in stride(from: n, to: 1, by: -1) {
        let maxIdx = findMaxIndex(arr, size)

        if maxIdx != size - 1 {
            flip(&arr, maxIdx)
            flip(&arr, size - 1)
        }
    }
}

func flip(_ arr: inout [Int], _ i: Int) {
    var left = 0
    var right = i

    while left < right {
        arr.swapAt(left, right)
        left += 1
        right -= 1
    }
}

func findMaxIndex(_ arr: [Int], _ n: Int) -> Int {
    var maxIdx = 0
    for i in 0..<n {
        if arr[i] > arr[maxIdx] { maxIdx = i }
    }
    return maxIdx
}
