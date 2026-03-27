func insertionSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 1..<n {
        let key = arr[i]
        var j = i

        while j > 0 && key < arr[j - 1] {
            arr[j] = arr[j - 1]
            j -= 1
        }

        arr[j] = key
    }
}
