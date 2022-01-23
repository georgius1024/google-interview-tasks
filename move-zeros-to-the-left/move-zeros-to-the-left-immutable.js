// This is naive java-script style that creates new array
function moveZerosToLeft(list) {
  const zeros = list.filter((e) => e === 0)
  const nonZeros = list.filter((e) => e !== 0)
  return zeros.concat(nonZeros)
}

export default moveZerosToLeft
