func backtrack(_ curr: inout [Int]) -> Int {
    let BASE_CASE = false
    if BASE_CASE {
        // TODO: modify answer
        return 0
    }

    var ans = 0
    let ITERATE_OVER_INPUT = 0..<5

    for _ in ITERATE_OVER_INPUT {
        // TODO: modify current state
        ans += backtrack(&curr)
        // TODO: undo modification of current state
    }

    return ans
}
