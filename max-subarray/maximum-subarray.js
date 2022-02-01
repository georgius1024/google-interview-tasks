// export default function maximumSubArray(array) {
//   let bestSum = -Infinity
//   for (let left = 0; left < array.length; left++) {
//     for (let right = left; right < array.length; right++) {
//       let sum = 0
//       for (let i = left; i <= right; i++) {
//         sum += array[i]
//         if (sum > bestSum) {
//           bestSum = sum
//         }
//       }
//     }
//   }
//   return bestSum
// }

// export default function maximumSubArray(array) {
//   let bestSum = -Infinity
//   for (let left = 0; left < array.length; left++) {
//     let sum = 0
//     for (let right = left; right < array.length; right++) {
//       sum += array[right]
//       if (sum > bestSum) {
//         bestSum = sum
//       }
//     }
//   }
//   return bestSum
// }

export default function maximumSubArray(array) {
  let bestSubarray = 0
  let bestSum = -Infinity
  for (let i = 0; i < array.length; i++) {
    bestSubarray += array[i]
    if (bestSubarray > bestSum) {
      bestSum = bestSubarray
    }
    if (bestSubarray < 0) {
      bestSubarray = 0
    }
  }
  return bestSum
}
