func testKthBit(_ num: Int, _ k: Int) -> Bool {
    return (num & (1 << k)) != 0
}
