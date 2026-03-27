import fs from 'fs';
import path from 'path';

const files = {
  "src/code/swift/graph/bellman_ford.swift": `func bellmanFord(_ n: Int, _ edges: [(u: Int, v: Int, w: Int)], _ source: Int) -> [Int] {
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
`,
  "src/code/swift/graph/bfs.swift": `func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
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
`,
  "src/code/swift/graph/dfs_iterative.swift": `func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
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
`,
  "src/code/swift/graph/dfs_recursive.swift": `func fn(_ graph: [Int: [Int]], _ startNode: Int) -> Int {
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
`,
  "src/code/swift/graph/dijkstra.swift": `import Foundation

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
`,
  "src/code/swift/graph/kahn.swift": `func kahnTopologicalSort(_ graph: [Int: [Int]]) -> [Int] {
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
`,
  "src/code/swift/graph/kruskal.swift": `func kruskalMST(_ n: Int, _ edges: [(w: Int, u: Int, v: Int)]) -> [(Int, Int, Int)] {
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
`,
  "src/code/swift/graph/prim.swift": `func primMST(_ n: Int, _ edges: [(w: Int, u: Int, v: Int)]) -> [(Int, Int, Int)] {
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
`,
  "src/code/swift/hash_map/find_number_of_subarrays.swift": `func fn(_ arr: [Int], _ k: Int) -> Int {
    var counts = [0: 1]
    var ans = 0
    var curr = 0

    for num in arr {
        // TODO: logic to change curr
        ans += counts[curr - k, default: 0]
        counts[curr, default: 0] += 1
    }

    return ans
}
`,
  "src/code/swift/hash_map/sliding_window.swift": `func fn(_ arr: [Int]) -> Int {
    var window = Set<Int>()
    var ans = 0
    var left = 0

    for right in 0..<arr.count {
        // TODO: add arr[right] to window

        while false { // WINDOW_CONDITION_BROKEN
            // TODO: remove arr[left] from window
            left += 1
        }

        // TODO: update ans
    }

    return ans
}
`,
  "src/code/swift/heap/find_top_k_elements.swift": `func fn(_ arr: [Int], _ k: Int) -> [Int] {
    var heap = [Int]() // Assuming a MinHeap array structure

    for num in arr {
        // TODO: logic to push onto heap according to problem's criteria
        heap.append(num)
        heap.sort() // Naive for simplicity here
        
        if heap.count > k {
            heap.removeFirst()
        }
    }

    return heap
}
`,
  "src/code/swift/linked_list/fast_and_slow_pointer.swift": `func fn(_ head: ListNode<Int>?) -> Int {
    var slow = head
    var fast = head
    var ans = 0

    while fast != nil && fast?.next != nil {
        // TODO: logic
        slow = slow?.next
        fast = fast?.next?.next
    }

    return ans
}
`,
  "src/code/swift/linked_list/reverse_linked_list.swift": `func fn(_ head: ListNode<Int>?) -> ListNode<Int>? {
    var prev: ListNode<Int>? = nil
    var curr = head

    while let node = curr {
        let nxt = node.next
        node.next = prev
        prev = node
        curr = nxt
    }

    return prev
}
`,
  "src/code/swift/matrix/create_copy.swift": `func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count

    let createMatrix = Array(repeating: Array(repeating: 0, count: c), count: r)
    let copyMatrix = matrix.map { $0 }
}
`,
  "src/code/swift/matrix/diagonals.swift": `func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count
    let limit = min(r, c)

    var mainDiagonal = [Int]()
    var antiDiagonal = [Int]()

    for i in 0..<limit {
        mainDiagonal.append(matrix[i][i])
        antiDiagonal.append(matrix[i][c - 1 - i])
    }
}
`,
  "src/code/swift/matrix/rotate_transpose.swift": `func fn(_ matrix: [[Int]]) {
    let r = matrix.count
    let c = matrix[0].count

    var transpose = Array(repeating: Array(repeating: 0, count: r), count: c)
    for i in 0..<r {
        for j in 0..<c {
            transpose[j][i] = matrix[i][j]
        }
    }

    let rotateLeft = transpose.reversed()
    let rotateRight = transpose.map { $0.reversed() }
}
`,
  "src/code/swift/sorting_algorithms/bogo_sort.swift": `func bogoSort(_ arr: inout [Int]) {
    let target = arr.sorted()

    while arr != target {
        arr.shuffle() // Swift 4.2+
    }
}
`,
  "src/code/swift/sorting_algorithms/bubble_sort.swift": `func bubbleSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 0..<n {
        var swapped = false

        for j in 0..<(n - i - 1) {
            if arr[j] > arr[j + 1] {
                arr.swapAt(j, j + 1)
                swapped = true
            }
        }

        if !swapped {
            break
        }
    }
}
`,
  "src/code/swift/sorting_algorithms/bucket_sort.swift": `func bucketSort(_ arr: [Double]) -> [Double] {
    if arr.isEmpty { return [] }
    let numBuckets = 10
    let minNum = arr.min()!
    let maxNum = arr.max()!
    let bucketSize = (maxNum - minNum) / Double(numBuckets)
    var buckets = Array(repeating: [Double](), count: numBuckets)

    for num in arr {
        let index = min(Int((num - minNum) / bucketSize), numBuckets - 1)
        buckets[index].append(num)
    }

    return buckets.flatMap { $0.sorted() }
}
`,
  "src/code/swift/sorting_algorithms/counting_sort.swift": `func countingSort(_ arr: [Int]) -> [Int] {
    guard !arr.isEmpty else { return [] }
    let maxNum = arr.max()!
    let minNum = arr.min()!
    let countRange = maxNum - minNum + 1
    var count = Array(repeating: 0, count: countRange)
    var output = Array(repeating: 0, count: arr.count)

    for num in arr {
        count[num - minNum] += 1
    }

    for i in 1..<countRange {
        count[i] += count[i - 1]
    }

    for num in arr.reversed() {
        output[count[num - minNum] - 1] = num
        count[num - minNum] -= 1
    }

    return output
}
`,
  "src/code/swift/sorting_algorithms/cube_sort.swift": `func cubeSort(_ arr: inout [Int], _ processors: Int) {
    // Advanced dimensional merge sort algorithm
    // Requires concurrent processing arrays, naive representation here
    arr.sort() // Placeholder
}
`,
  "src/code/swift/sorting_algorithms/heap_sort.swift": `func heapSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in stride(from: n / 2 - 1, through: 0, by: -1) {
        heapify(&arr, n, i)
    }
    for i in stride(from: n - 1, through: 1, by: -1) {
        arr.swapAt(i, 0)
        heapify(&arr, i, 0)
    }
}

func heapify(_ arr: inout [Int], _ n: Int, _ i: Int) {
    var largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if left < n && arr[left] > arr[largest] { largest = left }
    if right < n && arr[right] > arr[largest] { largest = right }

    if largest != i {
        arr.swapAt(i, largest)
        heapify(&arr, n, largest)
    }
}
`,
  "src/code/swift/sorting_algorithms/insertion_sort.swift": `func insertionSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 1..<n {
        let key = arr[i]
        var j = i

        while j > 0 && key < arr[j - 1] {
            arr[j] = arr[j - 1]
            j -= 1
        }

        arr[j] = key
    }
}
`,
  "src/code/swift/sorting_algorithms/merge_sort.swift": `func mergeSort(_ arr: [Int]) -> [Int] {
    let n = arr.count
    if n <= 1 { return arr }

    let mid = n / 2
    let left = mergeSort(Array(arr[0..<mid]))
    let right = mergeSort(Array(arr[mid..<n]))

    return merge(left, right)
}

func merge(_ left: [Int], _ right: [Int]) -> [Int] {
    var output = [Int]()
    var l = 0, r = 0

    while l < left.count && r < right.count {
        if left[l] <= right[r] {
            output.append(left[l])
            l += 1
        } else {
            output.append(right[r])
            r += 1
        }
    }
    output.append(contentsOf: left[l...])
    output.append(contentsOf: right[r...])

    return output
}
`,
  "src/code/swift/sorting_algorithms/pancake_sort.swift": `func pancakeSort(_ arr: inout [Int]) {
    let n = arr.count

    for size in stride(from: n, to: 1, by: -1) {
        let maxIdx = findMaxIndex(arr, size)

        if maxIdx != size - 1 {
            flip(&arr, maxIdx)
            flip(&arr, size - 1)
        }
    }
}

func flip(_ arr: inout [Int], _ i: Int) {
    var left = 0
    var right = i

    while left < right {
        arr.swapAt(left, right)
        left += 1
        right -= 1
    }
}

func findMaxIndex(_ arr: [Int], _ n: Int) -> Int {
    var maxIdx = 0
    for i in 0..<n {
        if arr[i] > arr[maxIdx] { maxIdx = i }
    }
    return maxIdx
}
`,
  "src/code/swift/sorting_algorithms/quick_sort.swift": `func quickSort(_ arr: [Int]) -> [Int] {
    if arr.count <= 1 { return arr }

    let pivot = arr[arr.count / 2]
    let left = arr.filter { $0 < pivot }
    let right = arr.filter { $0 > pivot }
    let equals = arr.filter { $0 == pivot }

    return quickSort(left) + equals + quickSort(right)
}
`,
  "src/code/swift/sorting_algorithms/radix_sort.swift": `func radixSort(_ arr: inout [Int]) {
    guard let maxVal = arr.max() else { return }
    var exp = 1

    while maxVal / exp > 0 {
        countingSortRadix(&arr, exp)
        exp *= 10
    }
}

func countingSortRadix(_ arr: inout [Int], _ exp: Int) {
    let n = arr.count
    var output = Array(repeating: 0, count: n)
    var count = Array(repeating: 0, count: 10)

    for i in 0..<n {
        let idx = (arr[i] / exp) % 10
        count[idx] += 1
    }

    for i in 1..<10 {
        count[i] += count[i - 1]
    }

    for i in stride(from: n - 1, through: 0, by: -1) {
        let idx = (arr[i] / exp) % 10
        output[count[idx] - 1] = arr[i]
        count[idx] -= 1
    }

    for i in 0..<n {
        arr[i] = output[i]
    }
}
`,
  "src/code/swift/sorting_algorithms/selection_sort.swift": `func selectionSort(_ arr: inout [Int]) {
    let n = arr.count

    for i in 0..<n {
        var minI = i

        for j in (i + 1)..<n {
            if arr[j] < arr[minI] {
                minI = j
            }
        }

        if minI != i {
            arr.swapAt(i, minI)
        }
    }
}
`,
  "src/code/swift/sorting_algorithms/shell_sort.swift": `func shellSort(_ arr: inout [Int]) {
    let n = arr.count
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for gap in gaps {
        if gap >= n { continue }
        for i in gap..<n {
            let tmp = arr[i]
            var j = i

            while j >= gap && arr[j - gap] > tmp {
                arr[j] = arr[j - gap]
                j -= gap
            }
            if j != i {
                arr[j] = tmp
            }
        }
    }
}
`,
  "src/code/swift/sorting_algorithms/sleep_sort.swift": `import Foundation

func sleepSort(_ arr: [Double]) {
    let group = DispatchGroup()
    var output = [Double]()
    var lock = os_unfair_lock()

    for num in arr {
        group.enter()
        DispatchQueue.global().asyncAfter(deadline: .now() + num / 1000.0) {
            os_unfair_lock_lock(&lock)
            output.append(num)
            os_unfair_lock_unlock(&lock)
            group.leave()
        }
    }

    group.wait()
}
`,
  "src/code/swift/sorting_algorithms/tim_sort.swift": `func timSort(_ arr: inout [Int]) {
    let n = arr.count
    let minRun = 32

    for start in stride(from: 0, to: n, by: minRun) {
        let end = min(start + minRun - 1, n - 1)
        insertionSortTim(&arr, start, end)
    }

    var size = minRun

    while size < n {
        for left in stride(from: 0, to: n, by: 2 * size) {
            let mid = min(n - 1, left + size - 1)
            let right = min(left + 2 * size - 1, n - 1)
            
            if mid < right {
                let merged = mergeTim(Array(arr[left...mid]), Array(arr[(mid + 1)...right]))
                for (index, val) in merged.enumerated() {
                    arr[left + index] = val
                }
            }
        }
        size *= 2
    }
}

func insertionSortTim(_ arr: inout [Int], _ left: Int, _ right: Int) {
    for i in (left + 1)...right {
        let key = arr[i]
        var j = i

        while j > left && arr[j - 1] > key {
            arr[j] = arr[j - 1]
            j -= 1
        }
        arr[j] = key
    }
}

func mergeTim(_ left: [Int], _ right: [Int]) -> [Int] {
    var output = [Int]()
    var l = 0, r = 0

    while l < left.count && r < right.count {
        if left[l] <= right[r] {
            output.append(left[l])
            l += 1
        } else {
            output.append(right[r])
            r += 1
        }
    }
    output.append(contentsOf: left[l...])
    output.append(contentsOf: right[r...])
    return output
}
`,
  "src/code/swift/stack/monotonic_decreasing.swift": `func fn(_ arr: [Int]) -> Int {
    var stack = [Int]()
    var ans = 0

    for num in arr {
        while !stack.isEmpty && stack.last! < num {
            // TODO: logic
            stack.removeLast()
        }
        stack.append(num)
    }

    return ans
}
`,
  "src/code/swift/stack/monotonic_increasing.swift": `func fn(_ arr: [Int]) -> Int {
    var stack = [Int]()
    var ans = 0

    for num in arr {
        while !stack.isEmpty && stack.last! > num {
            // TODO: logic
            stack.removeLast()
        }
        stack.append(num)
    }

    return ans
}
`
};

for (const [filePath, content] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Wrote writer_swift2.js files!");
