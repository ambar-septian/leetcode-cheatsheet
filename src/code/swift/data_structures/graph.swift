class Graph {
    var graph = [String: [String]]()

    func addVertex(_ vertex: String) {
        if graph[vertex] == nil {
            graph[vertex] = []
        }
    }

    func addEdge(_ a: String, _ b: String) {
        addVertex(a)
        addVertex(b)
        graph[a]?.append(b)
        graph[b]?.append(a)
    }

    func getNeighbors(_ vertex: String) -> [String] {
        return graph[vertex] ?? []
    }
}
