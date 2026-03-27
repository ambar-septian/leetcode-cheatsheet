func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count
    let limit = min(r, c)

    var mainDiagonal = [Int]()
    var antiDiagonal = [Int]()

    for i in 0..<limit {
        mainDiagonal.append(matrix[i][i])
        antiDiagonal.append(matrix[i][c - 1 - i])
    }
}
