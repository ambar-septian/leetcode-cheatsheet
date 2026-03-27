func kadane(_ arr: [Int]) -> Int {
    guard !arr.isEmpty else { return 0 }
    
    var currSub = arr[0]
    var maxSub = arr[0]

    for num in arr.dropFirst() {
        currSub = max(currSub + num, num)
        maxSub = max(maxSub, currSub)
    }

    return maxSub
}
