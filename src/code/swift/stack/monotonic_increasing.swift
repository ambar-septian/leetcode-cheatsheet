func fn(_ arr: [Int]) -> Int {
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
