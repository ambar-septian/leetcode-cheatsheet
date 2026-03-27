func selectionSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 0..<n {
        var minI = i

        for j in (i + 1)..<n {
            if arr[j] < arr[minI] {
                minI = j
            }
        }

        if minI != i {
            arr.swapAt(i, minI)
        }
    }
}
