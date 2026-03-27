class UnionFind {
    var root: [Int]
    var rank: [Int]

    init(_ n: Int) {
        root = Array(0..<n)
        rank = Array(repeating: 1, count: n)
    }

    func find(_ a: Int) -> Int {
        if a == root[a] { return a }
        root[a] = find(root[a])
        return root[a]
    }

    func union(_ a: Int, _ b: Int) {
        let rootA = find(a)
        let rootB = find(b)

        if rootA != rootB {
            if rank[rootA] < rank[rootB] {
                root[rootA] = rootB
            } else if rank[rootA] > rank[rootB] {
                root[rootB] = rootA
            } else {
                root[rootB] = rootA
                rank[rootA] += 1
            }
        }
    }

    func connected(_ a: Int, _ b: Int) -> Bool {
        return find(a) == find(b)
    }
}
