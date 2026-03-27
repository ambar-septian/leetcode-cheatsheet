func quickSort(_ arr: [Int]) -> [Int] {
    if arr.count <= 1 { return arr }

    let pivot = arr[arr.count / 2]
    let left = arr.filter { $0 < pivot }
    let right = arr.filter { $0 > pivot }
    let equals = arr.filter { $0 == pivot }

    return quickSort(left) + equals + quickSort(right)
}
