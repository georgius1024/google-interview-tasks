function findKClosest(list, x, k) {
  if (list.length <= k) {
    return list
  }
  if (x <= list[0]) {
    return list.slice(0, k)
  }
  if (x >= list[list.length - 1]) {
    return list.slice(-k)
  }
  let right = 0
  // find x position within list
  while (right < list.length - 1) {
    if (x <= list[right]) {
      break
    }
    right += 1
  }
  let left = right - 1
  let result = []
  while (result.length < k) {
    const leftDiff = x - list[left]
    const rightDiff = list[right] - x
    if (leftDiff < rightDiff) {
      result.push(list[left])
      left -= 1
    } else {
      result.push(list[right])
      right += 1
    }
    if (left === -1) {
      while (result.length < k) {
        result.push(list[right])
        right += 1
      }
      break
    }
    if (right === list.length) {
      while (result.length < k) {
        result.push(list[left])
        left -= 1
      }
      break
    }
  }
  return result.sort((a, b) => a - b)
}

export default findKClosest
