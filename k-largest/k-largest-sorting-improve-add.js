class Sorter {
  constructor(list, k) {
    this.list = list.sort((a, b) => a - b)
    this.list.splice(0, 0, -1)
    this.k = k
  }

  add(n) {
    const firstGreater = this.list.findIndex((e) => e > n)
    if (firstGreater === -1) {
      this.list.push(n)
    } else {
      this.list.splice(firstGreater, 0, n)
    }
    return this.list[this.list.length - this.k]
  }
}
// Test1
const s1 = new Sorter([1, 2, 3, 1, 4, 5, 6, 7, 78, 8], 3)
console.log(s1.add(-1)) // 7
console.log(s1.add(77)) // 8
console.log(s1.add(79)) // 77

// // Test 2
const s2 = new Sorter([1, 2, 3, 1, 4, 5, 6, 7, 78, 8], 2)
console.log(s2.add(-1)) //8
console.log(s2.add(77)) // 77
console.log(s2.add(79)) // 78
