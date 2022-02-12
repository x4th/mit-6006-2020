import StaticArray from './static-array'

test('setting and getting an item', () => {
  const a = new StaticArray(1)
  a.setAt(0, 1)
  expect(a.getAt(0)).toBe(1)
})
