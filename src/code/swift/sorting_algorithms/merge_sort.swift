func mergeSort(_ arr: [Int]) -> [Int] {
    let n = arr.count
    if n <= 1 { return arr }

    let mid = n / 2
    let left = mergeSort(Array(arr[0..<mid]))
    let right = mergeSort(Array(arr[mid..<n]))

    return merge(left, right)
}

func merge(_ left: [Int], _ right: [Int]) -> [Int] {
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
