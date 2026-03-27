import Foundation

// Assuming a basic MinHeap or PriorityQueue exists
func dijkstras(_ graph: [[(node: Int, weight: Int)]], _ source: Int) -> [Int] {
    let n = graph.count
    var distances = Array(repeating: Int.max / 2, count: n)
    distances[source] = 0

    // Omitted PriorityQueue implementation for brevity
    var heap = [(dist: 0, node: source)]

    while !heap.isEmpty {
        heap.sort { $0.dist < $1.dist }
        let current = heap.removeFirst()

        if current.dist > distances[current.node] { continue }

        for neighbor in graph[current.node] {
            let dist = current.dist + neighbor.weight

            if dist < distances[neighbor.node] {
                distances[neighbor.node] = dist
                heap.append((dist: dist, node: neighbor.node))
            }
        }
    }

    return distances
}
