func radixSort(_ arr: inout [Int]) {
    guard let maxVal = arr.max() else { return }
    var exp = 1

    while maxVal / exp > 0 {
        countingSortRadix(&arr, exp)
        exp *= 10
    }
}

func countingSortRadix(_ arr: inout [Int], _ exp: Int) {
    let n = arr.count
    var output = Array(repeating: 0, count: n)
    var count = Array(repeating: 0, count: 10)

    for i in 0..<n {
        let idx = (arr[i] / exp) % 10
        count[idx] += 1
    }

    for i in 1..<10 {
        count[i] += count[i - 1]
    }

    for i in stride(from: n - 1, through: 0, by: -1) {
        let idx = (arr[i] / exp) % 10
        output[count[idx] - 1] = arr[i]
        count[idx] -= 1
    }

    for i in 0..<n {
        arr[i] = output[i]
    }
}
