/**
 *
 * @param a list of positive integers
 * @returns number of longest increasing subarrays of A
 */
export default function countLongSubarray(a: number[]): number {
  let count = 0
  let length = 0
  let maxLength = 0

  for (let i = 0; i <= a.length; i++) {
    if (i < a.length) {
      if (i == 0 || a[i] > a[i - 1]) {
        length++
        continue
      }
    }

    if (length > maxLength) {
      maxLength = length
      count = 1
    } else if (length == maxLength) {
      count += 1
    }

    length = 1
  }

  return count
}
