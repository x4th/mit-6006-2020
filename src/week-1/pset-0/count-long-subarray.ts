/**
 *
 * @param A list of positive integers
 * @returns number of longest increasing subarrays of A
 */
export default function countLongSubarray(A: number[]): number {
  let count = 0
  let length = 0
  let maxLength = 0

  for (let i = 0; i <= A.length; i++) {
    if (i < A.length) {
      if (i == 0 || A[i] > A[i - 1]) {
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
