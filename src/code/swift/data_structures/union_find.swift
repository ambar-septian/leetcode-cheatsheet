class UnionFind {
    var root: [Int]

    init(_ n: Int) {
        root = Array(0..<n)
    }

    func find(_ a: Int) -> Int {
        return a == root[a] ? a : find(root[a])
    }

    func union(_ a: Int, _ b: Int) {
        root[find(a)] = find(b)
    }

    func connected(_ a: Int, _ b: Int) -> Bool {
        return find(a) == find(b)
    }
}
