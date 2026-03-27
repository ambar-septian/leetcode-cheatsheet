class Array<T> {
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
