func dfs(_ root: TreeNode?) -> Int {
    guard let root = root else { return 0 }

    var ans = 0

    // TODO: logic
    _ = dfs(root.left)
    _ = dfs(root.right)

    return ans
}
