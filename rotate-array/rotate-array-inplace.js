export default function rotateArrayInplace(array, shift) {
  if (!Array.isArray(array)) {
    throw new Error('argument should be an array')
  }
  if (shift < 0) {
    throw new Error('argument should be positive')
  }
  if (!array.length) {
    return array
  }
  const result = []
  for (let i = 0; i < array.length; i++) {
    const index = (array.length + i - (shift % array.length)) % array.length
    result.push(array[index])
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = result[i]
  }
}
