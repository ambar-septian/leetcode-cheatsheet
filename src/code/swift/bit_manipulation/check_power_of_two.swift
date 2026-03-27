func isPowerOfTwo(_ num: Int) -> Bool {
    return num > 0 && (num & (num - 1)) == 0
}
