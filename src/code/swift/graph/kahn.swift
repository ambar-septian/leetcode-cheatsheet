func kahnTopologicalSort(_ graph: [Int: [Int]]) -> [Int] {
    var result = [Int]()
    var indegree = [Int: Int]()

    for vertices in graph.values {
        for v in vertices {
            indegree[v, default: 0] += 1
        }
    }

    var que = [Int]()
    for node in graph.keys {
        if indegree[node] == nil || indegree[node]! == 0 {
            que.append(node)
        }
    }

    while !que.isEmpty {
        let node = que.removeFirst()
        result.append(node)

        if let neighbors = graph[node] {
            for neighbor in neighbors {
                indegree[neighbor]! -= 1
                if indegree[neighbor]! == 0 {
                    que.append(neighbor)
                }
            }
        }
    }

    return result.count == graph.count ? result : []
}
