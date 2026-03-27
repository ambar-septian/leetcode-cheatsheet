func bucketSort(_ arr: [Double]) -> [Double] {
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
