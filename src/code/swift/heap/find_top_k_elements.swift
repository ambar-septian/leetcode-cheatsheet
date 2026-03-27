func fn(_ arr: [Int], _ k: Int) -> [Int] {
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
