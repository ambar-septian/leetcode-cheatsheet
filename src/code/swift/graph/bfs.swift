func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
    var que = [startNode]
    var seen = Set([startNode])
    var ans = 0

    while !que.isEmpty {
        let node = que.removeFirst()
        // TODO: logic
        if let neighbors = graph[node] {
            for neighbor in neighbors {
                if !seen.contains(neighbor) {
                    seen.insert(neighbor)
                    que.append(neighbor)
                }
            }
        }
    }

    return ans
}
