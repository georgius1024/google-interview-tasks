const list1 = [1, 2, 3, 4]
const list2 = [4, 5, 6, 7]
const list3 = [5, 6, 7, 8]

function hasCommonElements(list1, list2) {
  // make sure that list 1 is shorter then list2
  if (list1.length > list2.length) {
    return hasCommonElements(list2, list1)
  }
  const set = new Set(list1)
  const foundAt = list2.findIndex((e) => set.has(e))
  return foundAt >= 0
}

console.log(hasCommonElements(list1, list2)) // true
console.log(hasCommonElements(list2, list3)) // true
console.log(hasCommonElements(list1, list3)) // false
