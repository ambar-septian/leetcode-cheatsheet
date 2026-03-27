func fn(_ arr: [Int]) -> [Int] {
    let n = arr.count
    var prefix = [arr[0]]

    for i in 1..<n {
        prefix.append(prefix.last! + arr[i])
    }

    return prefix
}
