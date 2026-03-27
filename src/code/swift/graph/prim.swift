func primMST(_ n: Int, _ edges: [(w: Int, u: Int, v: Int)]) -> [(Int, Int, Int)] {
    var mst = [(Int, Int, Int)]()
    let uf = UnionFind(n)
    var sortedEdges = edges.sorted { $0.w < $1.w }

    while !sortedEdges.isEmpty {
        let edge = sortedEdges.removeFirst()

        if !uf.connected(edge.u, edge.v) {
            uf.union(edge.u, edge.v)
            mst.append((edge.w, edge.u, edge.v))
        }
    }

    return mst
}
