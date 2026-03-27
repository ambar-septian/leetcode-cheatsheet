func clearKthBit(_ num: Int, _ k: Int) -> Int {
    return num & ~(1 << k)
}
