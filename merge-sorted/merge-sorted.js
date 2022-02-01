export default function mergeSorted(arr1, arr2) {
  if (!Array.isArray(arr1)) {
    throw new Error('first param should be an array!')
  }
  if (!Array.isArray(arr2)) {
    throw new Error('second param should be an array!')
  }
  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1
  }
  let p1 = 0
  let p2 = 0
  const result = []
  while (true) {
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1])
      p1++
    } else {
      result.push(arr2[p2])
      p2++
    }
    if (p1 === arr1.length) {
      return result.concat(arr2.slice(p2, arr2.length))
    }
    if (p2 === arr2.length) {
      return result.concat(arr1.slice(p1, arr1.length))
    }
  }
}
