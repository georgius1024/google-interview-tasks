export default function reverse(str) {
  // simplest is
  // return str.split('').reverse().join('')
  const array = str.split('')
  const result = []
  for(let i = array.length - 1; i >= 0; i--) {
    result.push(array[i])
  }
  return result.join('')
}