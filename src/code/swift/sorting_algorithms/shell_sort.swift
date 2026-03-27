func shellSort(_ arr: inout [Int]) {
    let n = arr.count
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for gap in gaps {
        if gap >= n { continue }
        for i in gap..<n {
            let tmp = arr[i]
            var j = i

            while j >= gap && arr[j - gap] > tmp {
                arr[j] = arr[j - gap]
                j -= gap
            }
            if j != i {
                arr[j] = tmp
            }
        }
    }
}
