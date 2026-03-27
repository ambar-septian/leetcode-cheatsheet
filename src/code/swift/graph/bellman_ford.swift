func bellmanFord(_ n: Int, _ edges: [(u: Int, v: Int, w: Int)], _ source: Int) -> [Int] {
    var distances = Array(repeating: Int.max / 2, count: n)
    distances[source] = 0

    for _ in 0..<(n - 1) {
        for edge in edges {
            if distances[edge.u] != Int.max / 2 && distances[edge.u] + edge.w < distances[edge.v] {
                distances[edge.v] = distances[edge.u] + edge.w
            }
        }
    }

    // Check for negative-weight cycles
    for edge in edges {
        if distances[edge.u] != Int.max / 2 && distances[edge.u] + edge.w < distances[edge.v] {
            return []
        }
    }

    return distances
}
