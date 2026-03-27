func getRightmostSetBit(_ num: Int) -> Int {
    return num & -num
}
