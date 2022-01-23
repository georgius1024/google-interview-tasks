// This functon mutates array and returns nothing
function moveZerosToLeft(varList) {
  if (varList.length < 2) {
    return
  }
  let reading = varList.length - 1
  let writing = varList.length - 1
  while (reading > -1) {
    if (varList[reading] !== 0) {
      varList[writing] = varList[reading]
      writing -= 1
    }
    reading -= 1
  }
  while (writing > -1) {
    varList[writing] = 0
    writing -= 1
  }
}

export default moveZerosToLeft
