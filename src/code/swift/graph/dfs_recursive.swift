func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
    var seen = Set([startNode])

    func dfs(_ node: Int) -> Int {
        var ans = 0
        // TODO: logic
        if let neighbors = graph[node] {
            for neighbor in neighbors {
                if !seen.contains(neighbor) {
                    seen.insert(neighbor)
                    ans += dfs(neighbor)
                }
            }
        }
        return ans
    }

    return dfs(startNode)
}
