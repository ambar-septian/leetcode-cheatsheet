func timSort(_ arr: inout [Int]) {
    let n = arr.count
    let minRun = 32

    for start in stride(from: 0, to: n, by: minRun) {
        let end = min(start + minRun - 1, n - 1)
        insertionSortTim(&arr, start, end)
    }

    var size = minRun

    while size < n {
        for left in stride(from: 0, to: n, by: 2 * size) {
            let mid = min(n - 1, left + size - 1)
            let right = min(left + 2 * size - 1, n - 1)
            
            if mid < right {
                let merged = mergeTim(Array(arr[left...mid]), Array(arr[(mid + 1)...right]))
                for (index, val) in merged.enumerated() {
                    arr[left + index] = val
                }
            }
        }
        size *= 2
    }
}

func insertionSortTim(_ arr: inout [Int], _ left: Int, _ right: Int) {
    for i in (left + 1)...right {
        let key = arr[i]
        var j = i

        while j > left && arr[j - 1] > key {
            arr[j] = arr[j - 1]
            j -= 1
        }
        arr[j] = key
    }
}

func mergeTim(_ left: [Int], _ right: [Int]) -> [Int] {
    var output = [Int]()
    var l = 0, r = 0

    while l < left.count && r < right.count {
        if left[l] <= right[r] {
            output.append(left[l])
            l += 1
        } else {
            output.append(right[r])
            r += 1
        }
    }
    output.append(contentsOf: left[l...])
    output.append(contentsOf: right[r...])
    return output
}
