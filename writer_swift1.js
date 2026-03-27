import fs from 'fs';
import path from 'path';

const files = {
  "src/code/swift/array/prefix_sum.swift": `func fn(_ arr: [Int]) -> [Int] {
    let n = arr.count
    var prefix = [arr[0]]

    for i in 1..<n {
        prefix.append(prefix.last! + arr[i])
    }

    return prefix
}
`,
  "src/code/swift/array/sliding_window.swift": `func fn(_ arr: [Int]) -> Int {
    let n = arr.count
    var window = 0
    var left = 0
    var ans = 0

    for right in 0..<n {
        // TODO: add arr[right] to window

        // while WINDOW_CONDITION_BROKEN
        while false {
            // TODO: remove arr[left] from window
            left += 1
        }

        // TODO: update ans
    }

    return ans
}
`,
  "src/code/swift/array/string_building.swift": `func fn(_ strs: [Character]) -> String {
    var ans = [Character]()

    for char in strs {
        ans.append(char)
    }

    return String(ans)
}
`,
  "src/code/swift/array/two_pointers_one_input.swift": `func fn(_ arr: [Int]) -> Int {
    var ans = 0
    var left = 0
    var right = arr.count - 1

    while left < right {
        // TODO: logic with left and right
        let CONDITION = true
        if CONDITION {
            left += 1
        } else {
            right -= 1
        }
    }

    return ans
}
`,
  "src/code/swift/array/two_pointers_two_inputs.swift": `func fn(_ arr1: [Int], _ arr2: [Int]) -> Int {
    var i = 0
    var j = 0
    var ans = 0

    while i < arr1.count && j < arr2.count {
        // TODO: logic
        let CONDITION = true
        if CONDITION {
            i += 1
        } else {
            j += 1
        }
    }

    while i < arr1.count {
        // TODO: logic
        i += 1
    }

    while j < arr2.count {
        // TODO: logic
        j += 1
    }

    return ans
}
`,
  "src/code/swift/backtracking/backtracking.swift": `func backtrack(_ curr: inout [Int]) -> Int {
    let BASE_CASE = false
    if BASE_CASE {
        // TODO: modify answer
        return 0
    }

    var ans = 0
    let ITERATE_OVER_INPUT = 0..<5

    for _ in ITERATE_OVER_INPUT {
        // TODO: modify current state
        ans += backtrack(&curr)
        // TODO: undo modification of current state
    }

    return ans
}
`,
  "src/code/swift/binary_search/binary_search.swift": `func fn(_ arr: [Int], _ target: Int) -> Int? {
    var left = 0
    var right = arr.count - 1

    while left <= right {
        let mid = left + (right - left) / 2

        if arr[mid] == target {
            // TODO: logic
            return mid
        }
        if arr[mid] > target {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,
  "src/code/swift/binary_search/duplicate_elements_left_insertion.swift": `func fn(_ arr: [Int], _ target: Int) -> Int {
    var left = 0
    var right = arr.count

    while left < right {
        let mid = left + (right - left) / 2

        if arr[mid] >= target {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,
  "src/code/swift/binary_search/duplicate_elements_right_insertion.swift": `func fn(_ arr: [Int], _ target: Int) -> Int {
    var left = 0
    var right = arr.count

    while left < right {
        let mid = left + (right - left) / 2

        if arr[mid] > target {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,
  "src/code/swift/binary_search/greedy_maximum.swift": `func fn(_ arr: [Int]) -> Int {
    func check(_ x: Int) -> Bool {
        let BOOLEAN = true
        return BOOLEAN
    }

    let MINIMUM_POSSIBLE_ANSWER = 0
    let MAXIMUM_POSSIBLE_ANSWER = arr.count

    var left = MINIMUM_POSSIBLE_ANSWER
    var right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right {
        let mid = left + (right - left) / 2

        if check(mid) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}
`,
  "src/code/swift/binary_search/greedy_minimum.swift": `func fn(_ arr: [Int]) -> Int {
    func check(_ x: Int) -> Bool {
        let BOOLEAN = true
        return BOOLEAN
    }

    let MINIMUM_POSSIBLE_ANSWER = 0
    let MAXIMUM_POSSIBLE_ANSWER = arr.count

    var left = MINIMUM_POSSIBLE_ANSWER
    var right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right {
        let mid = left + (right - left) / 2

        if check(mid) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,
  "src/code/swift/binary_tree/bfs.swift": `class TreeNode {
    var val: Int
    var left: TreeNode?
    var right: TreeNode?
    init(_ val: Int) { self.val = val }
}

func fn(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }
    var que = [root]
    var ans = 0

    while !que.isEmpty {
        let currentLength = que.count
        // TODO: logic for current level
        for _ in 0..<currentLength {
            let node = que.removeFirst()
            // TODO: logic
            if let left = node.left {
                que.append(left)
            }
            if let right = node.right {
                que.append(right)
            }
        }
    }

    return ans
}
`,
  "src/code/swift/binary_tree/dfs_iterative.swift": `func dfs(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }
    var stack = [root]
    var ans = 0

    while !stack.isEmpty {
        let node = stack.removeLast()
        // TODO: logic
        if let left = node.left {
            stack.append(left)
        }
        if let right = node.right {
            stack.append(right)
        }
    }

    return ans
}
`,
  "src/code/swift/binary_tree/dfs_recursive.swift": `func dfs(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }

    var ans = 0

    // TODO: logic
    _ = dfs(root.left)
    _ = dfs(root.right)

    return ans
}
`,
  "src/code/swift/bit_manipulation/check_power_of_two.swift": `func isPowerOfTwo(_ num: Int) -> Bool {
    return num > 0 && (num & (num - 1)) == 0
}
`,
  "src/code/swift/bit_manipulation/clear_kth_bit.swift": `func clearKthBit(_ num: Int, _ k: Int) -> Int {
    return num & ~(1 << k)
}
`,
  "src/code/swift/bit_manipulation/count_set_bits.swift": `func countSetBits(_ num: Int) -> Int {
    return num.nonzeroBitCount
}
`,
  "src/code/swift/bit_manipulation/divide_power_of_two.swift": `func divideByPowerOfTwo(_ num: Int, _ k: Int) -> Int {
    return num >> k
}
`,
  "src/code/swift/bit_manipulation/get_rightmost_bit.swift": `func getRightmostSetBit(_ num: Int) -> Int {
    return num & -num
}
`,
  "src/code/swift/bit_manipulation/multiply_power_of_two.swift": `func multiplyByPowerOfTwo(_ num: Int, _ k: Int) -> Int {
    return num << k
}
`,
  "src/code/swift/bit_manipulation/set_kth_bit.swift": `func setKthBit(_ num: Int, _ k: Int) -> Int {
    return num | (1 << k)
}
`,
  "src/code/swift/bit_manipulation/swap_variables.swift": `func swapVariables(_ num1: inout Int, _ num2: inout Int) {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
}
`,
  "src/code/swift/bit_manipulation/test_kth_bit.swift": `func testKthBit(_ num: Int, _ k: Int) -> Bool {
    return (num & (1 << k)) != 0
}
`,
  "src/code/swift/bit_manipulation/toggle_kth_bit.swift": `func toggleKthBit(_ num: Int, _ k: Int) -> Int {
    return num ^ (1 << k)
}
`,
  "src/code/swift/data_structures/array.swift": `class Array<T> {
    var size: Int
    var data: [T?]

    init(size: Int) {
        self.size = size
        self.data = Array(repeating: nil, count: size)
    }

    subscript(index: Int) -> T? {
        get { return data[index] }
        set { data[index] = newValue }
    }

    var count: Int { return data.count }
}
`,
  "src/code/swift/data_structures/binary_search_tree.swift": `class TreeNode<T: Comparable> {
    var data: T
    var left: TreeNode?
    var right: TreeNode?
    init(_ data: T) { self.data = data }
}

class BinarySearchTree<T: Comparable> {
    var root: TreeNode<T>?

    func insert(_ data: T) {
        if let root = root {
            insertNode(root, data)
        } else {
            root = TreeNode(data)
        }
    }

    private func insertNode(_ node: TreeNode<T>, _ data: T) {
        if data < node.data {
            if let left = node.left {
                insertNode(left, data)
            } else {
                node.left = TreeNode(data)
            }
        } else {
            if let right = node.right {
                insertNode(right, data)
            } else {
                node.right = TreeNode(data)
            }
        }
    }
}
`,
  "src/code/swift/data_structures/binary_tree.swift": `class TreeNode<T> {
    var data: T
    var left: TreeNode?
    var right: TreeNode?
    init(_ data: T) { self.data = data }
}

class BinaryTree<T> {
    var root: TreeNode<T>?

    func insert(_ data: T) {
        if let root = root {
            _ = insertNode(root, data)
        } else {
            root = TreeNode(data)
        }
    }

    private func insertNode(_ node: TreeNode<T>?, _ data: T) -> TreeNode<T> {
        guard let node = node else { return TreeNode(data) }
        
        if node.left == nil {
            node.left = TreeNode(data)
        } else if node.right == nil {
            node.right = TreeNode(data)
        } else {
            node.left = insertNode(node.left, data)
        }
        return node
    }
}
`,
  "src/code/swift/data_structures/doubly_linked_list.swift": `class ListNode<T: Equatable> {
    var data: T
    var prev: ListNode?
    var next: ListNode?
    init(_ data: T) { self.data = data }
}

class DoublyLinkedList<T: Equatable> {
    var head: ListNode<T>?

    func append(_ data: T) {
        let newNode = ListNode(data)
        guard let head = head else {
            self.head = newNode
            return
        }
        var curr = head
        while let next = curr.next { curr = next }
        curr.next = newNode
        newNode.prev = curr
    }

    func delete(_ data: T) {
        var curr = head
        while let node = curr {
            if node.data == data {
                node.prev?.next = node.next
                node.next?.prev = node.prev
                if node === head { head = node.next }
                return
            }
            curr = node.next
        }
    }

    func reverse() {
        var curr = head
        var prevNode: ListNode<T>? = nil

        while let node = curr {
            let nextNode = node.next
            node.next = prevNode
            node.prev = nextNode
            prevNode = node
            curr = nextNode
        }
        head = prevNode
    }
}
`,
  "src/code/swift/data_structures/graph.swift": `class Graph {
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
`,
  "src/code/swift/data_structures/hash_map.swift": `class HashMap<T> {
    let size = 100000
    var bucket: [T?]

    init() {
        self.bucket = Array(repeating: nil, count: size)
    }

    private func hash(_ key: Int) -> Int {
        return abs(key) % size
    }

    func set(_ key: Int, _ value: T) {
        bucket[hash(key)] = value
    }

    func get(_ key: Int) -> T? {
        return bucket[hash(key)]
    }

    func remove(_ key: Int) {
        bucket[hash(key)] = nil
    }
}
`,
  "src/code/swift/data_structures/linked_list.swift": `class ListNode<T: Equatable> {
    var data: T
    var next: ListNode?
    init(_ data: T) { self.data = data }
}

class LinkedList<T: Equatable> {
    var head: ListNode<T>?

    func append(_ data: T) {
        guard let head = head else {
            self.head = ListNode(data)
            return
        }
        var curr = head
        while let next = curr.next { curr = next }
        curr.next = ListNode(data)
    }

    func delete(_ data: T) {
        if head?.data == data {
            head = head?.next
            return
        }
        var prev: ListNode<T>? = nil
        var curr = head
        while let node = curr {
            if node.data == data {
                prev?.next = node.next
                return
            }
            prev = node
            curr = node.next
        }
    }

    func reverse() {
        var prev: ListNode<T>? = nil
        var curr = head

        while let node = curr {
            let nxt = node.next
            node.next = prev
            prev = node
            curr = nxt
        }
        head = prev
    }
}
`,
  "src/code/swift/data_structures/trie.swift": `class TrieNode {
    var children = [Character: TrieNode]()
    var isWord = false
}

class Trie {
    let root = TrieNode()

    func insert(_ word: String) {
        var node = root
        for char in word {
            if node.children[char] == nil {
                node.children[char] = TrieNode()
            }
            node = node.children[char]!
        }
        node.isWord = true
    }

    func search(_ word: String) -> Bool {
        var node = root
        for char in word {
            guard let nextNode = node.children[char] else { return false }
            node = nextNode
        }
        return node.isWord
    }

    func startsWith(_ prefix: String) -> Bool {
        var node = root
        for char in prefix {
            guard let nextNode = node.children[char] else { return false }
            node = nextNode
        }
        return true
    }
}
`,
  "src/code/swift/data_structures/union_find.swift": `class UnionFind {
    var root: [Int]

    init(_ n: Int) {
        root = Array(0..<n)
    }

    func find(_ a: Int) -> Int {
        return a == root[a] ? a : find(root[a])
    }

    func union(_ a: Int, _ b: Int) {
        root[find(a)] = find(b)
    }

    func connected(_ a: Int, _ b: Int) -> Bool {
        return find(a) == find(b)
    }
}
`,
  "src/code/swift/data_structures/union_find_optimized.swift": `class UnionFind {
    var root: [Int]
    var rank: [Int]

    init(_ n: Int) {
        root = Array(0..<n)
        rank = Array(repeating: 1, count: n)
    }

    func find(_ a: Int) -> Int {
        if a == root[a] { return a }
        root[a] = find(root[a])
        return root[a]
    }

    func union(_ a: Int, _ b: Int) {
        let rootA = find(a)
        let rootB = find(b)

        if rootA != rootB {
            if rank[rootA] < rank[rootB] {
                root[rootA] = rootB
            } else if rank[rootA] > rank[rootB] {
                root[rootB] = rootA
            } else {
                root[rootB] = rootA
                rank[rootA] += 1
            }
        }
    }

    func connected(_ a: Int, _ b: Int) -> Bool {
        return find(a) == find(b)
    }
}
`,
  "src/code/swift/dynamic_programming/bottom_up.swift": `func fn(_ arr: [Int]) -> Int {
    let BASE_CASE = 0
    let STATE_FOR_WHOLE_INPUT = arr.count
    let SMALLEST_SUBPROBLEM = 1
    
    if BASE_CASE > 0 {
        return 0
    }

    var dp = Array(repeating: BASE_CASE, count: STATE_FOR_WHOLE_INPUT + 1)

    for state in SMALLEST_SUBPROBLEM...STATE_FOR_WHOLE_INPUT {
        // RECURRENCE_RELATION
        dp[state] = dp[state - 1] // Example placeholder
    }

    return dp[STATE_FOR_WHOLE_INPUT]
}
`,
  "src/code/swift/dynamic_programming/kadane.swift": `func kadane(_ arr: [Int]) -> Int {
    guard !arr.isEmpty else { return 0 }
    
    var currSub = arr[0]
    var maxSub = arr[0]

    for num in arr.dropFirst() {
        currSub = max(currSub + num, num)
        maxSub = max(maxSub, currSub)
    }

    return maxSub
}
`,
  "src/code/swift/dynamic_programming/top_down.swift": `func fn(_ arr: [Int]) -> Int {
    var memo = [Int: Int]()
    
    func dp(_ state: Int) -> Int {
        let BASE_CASE = state == 0
        if BASE_CASE {
            return 0
        }
        if let cached = memo[state] {
            return cached
        }
        // RECURRENCE_RELATION
        let result = state // Placeholder
        memo[state] = result
        return result
    }

    return dp(arr.count)
}
`
};

for (const [filePath, content] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Wrote writer_swift1.js files!");
