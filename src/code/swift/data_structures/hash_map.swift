class HashMap<T> {
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
