func swapVariables(_ num1: inout Int, _ num2: inout Int) {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
}
