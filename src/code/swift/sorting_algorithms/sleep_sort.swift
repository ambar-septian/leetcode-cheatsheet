import Foundation

func sleepSort(_ arr: [Double]) {
    let group = DispatchGroup()
    var output = [Double]()
    var lock = os_unfair_lock()

    for num in arr {
        group.enter()
        DispatchQueue.global().asyncAfter(deadline: .now() + num / 1000.0) {
            os_unfair_lock_lock(&lock)
            output.append(num)
            os_unfair_lock_unlock(&lock)
            group.leave()
        }
    }

    group.wait()
}
