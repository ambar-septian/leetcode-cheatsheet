func fn(_ arr: [Int]) -> Int {
    let BASE_CASE = 0
    let STATE_FOR_WHOLE_INPUT = arr.count
    let SMALLEST_SUBPROBLEM = 1
    
    if BASE_CASE > 0 {
        return 0
    }

    var dp = Array(repeating: BASE_CASE, count: STATE_FOR_WHOLE_INPUT + 1)

    for state in SMALLEST_SUBPROBLEM...STATE_FOR_WHOLE_INPUT {
        // RECURRENCE_RELATION
        dp[state] = dp[state - 1] // Example placeholder
    }

    return dp[STATE_FOR_WHOLE_INPUT]
}
