import countLongSubarray from './count-long-subarray'

test('test 1', () => {
  expect(countLongSubarray([2, 2, 4, 1, 4])).toEqual(2)
})

test('test 2', () => {
  expect(countLongSubarray([7, 8, 5, 7, 7, 3, 2, 8])).toEqual(3)
})

test('test 3', () => {
  expect(countLongSubarray([7, 7, 9, 1, 2, 11, 9, 6, 2, 8, 9])).toEqual(2)
})

test('test 4', () => {
  expect(
    countLongSubarray([
      4, 18, 10, 8, 13, 16, 18, 1, 9, 6, 11, 13, 12, 5, 7, 17, 13, 3,
    ])
  ).toEqual(1)
})

test('test 5', () => {
  expect(
    countLongSubarray([
      11, 16, 10, 19, 20, 18, 3, 19, 2, 1, 8, 17, 7, 13, 1, 11, 1, 18, 19, 9, 7,
      19, 24, 2, 12,
    ])
  ).toBe(4)
})

test('test 6', () => {
  expect(countLongSubarray([1])).toBe(1)
})

test('test 7', () => {
  expect(countLongSubarray([1, 2, 6, 2, 8, 9, 1, 10, 1, 22, 11, 17])).toBe(2)
})
