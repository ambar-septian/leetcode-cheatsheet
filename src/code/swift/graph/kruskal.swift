func kruskalMST(_ n: Int, _ edges: [(w: Int, u: Int, v: Int)]) -> [(Int, Int, Int)] {
    var mst = [(Int, Int, Int)]()
    let uf = UnionFind(n) // Assuming UnionFind exists
    let sortedEdges = edges.sorted { $0.w < $1.w }

    for edge in sortedEdges {
        if !uf.connected(edge.u, edge.v) {
            uf.union(edge.u, edge.v)
            mst.append((edge.w, edge.u, edge.v))
        }
    }

    return mst
}
