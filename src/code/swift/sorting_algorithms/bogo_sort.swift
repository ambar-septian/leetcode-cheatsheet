func bogoSort(_ arr: inout [Int]) {
    let target = arr.sorted()

    while arr != target {
        arr.shuffle() // Swift 4.2+
    }
}
