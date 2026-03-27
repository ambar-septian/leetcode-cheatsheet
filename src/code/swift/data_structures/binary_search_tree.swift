class TreeNode<T: Comparable> {
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
