export default function longestWord(sentence) {
  if (typeof sentnce !== 'string') {
    throw new Error('argument should be a string')
  }
  let longest = ''
  let wordStart = null
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toUpperCase()
    if (letter < 'A' || letter > 'Z') {
      if (wordStart !== null) {
        const word = sentence.slice(wordStart, i)
        if (word.length > longest.length) {
          longest = word
        }
      }
      wordStart = null
    } else {
      if (wordStart === null) {
        wordStart = i
      }
    }
  }
  return longest
}
