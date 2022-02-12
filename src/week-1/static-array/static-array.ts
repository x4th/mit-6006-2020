/**
 * The cutest.
 */
export default class StaticArray<T> {
  constructor(n: number) {
    this.data = new Array(n).fill(0)
  }

  getAt(i: number) {
    if (i < 0 || i >= this.data.length)
      throw new RangeError(`Index ${i} out of bounds`)
    return this.data[i]
  }

  setAt(i: number, x: T) {
    if (i < 0 || i >= this.data.length)
      throw new RangeError(`Index ${i} out of bounds`)
    this.data[i] = x
  }
}
