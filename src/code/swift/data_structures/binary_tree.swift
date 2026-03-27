class TreeNode<T> {
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
