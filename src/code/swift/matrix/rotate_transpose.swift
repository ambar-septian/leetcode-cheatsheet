func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count

    var transpose = Array(repeating: Array(repeating: 0, count: r), count: c)
    for i in 0..<r {
        for j in 0..<c {
            transpose[j][i] = matrix[i][j]
        }
    }

    let rotateLeft = transpose.reversed()
    let rotateRight = transpose.map { $0.reversed() }
}
