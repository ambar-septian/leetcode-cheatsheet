func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count

    let createMatrix = Array(repeating: Array(repeating: 0, count: c), count: r)
    let copyMatrix = matrix.map { $0 }
}
