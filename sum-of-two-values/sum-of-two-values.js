function sumOfTwoValues(list, sum) {
  const elements = new Set()
  for (let i = 0; i < list.length; i++) {
    const diff = sum - list[i]
    if (elements.has(diff)) {
      return true
    }
    elements.add(list[i])
  }
  return false
}

export default sumOfTwoValues
