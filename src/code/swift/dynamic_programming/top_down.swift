func fn(_ arr: [Int]) -> Int {
    var memo = [Int: Int]()
    
    func dp(_ state: Int) -> Int {
        let BASE_CASE = state == 0
        if BASE_CASE {
            return 0
        }
        if let cached = memo[state] {
            return cached
        }
        // RECURRENCE_RELATION
        let result = state // Placeholder
        memo[state] = result
        return result
    }

    return dp(arr.count)
}
