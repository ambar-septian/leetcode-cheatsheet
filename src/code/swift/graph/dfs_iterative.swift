func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
    var stack = [startNode]
    var seen = Set([startNode])
    var ans = 0

    while !stack.isEmpty {
        let node = stack.removeLast()
        // TODO: logic
        if let neighbors = graph[node] {
            for neighbor in neighbors {
                if !seen.contains(neighbor) {
                    seen.insert(neighbor)
                    stack.append(neighbor)
                }
            }
        }
    }

    return ans
}
