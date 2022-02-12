import LinkedList from './linked-list'

describe('toString()', () => {
  test('empty list', () => {
    const l = new LinkedList()
    expect(l.toString()).toEqual('[]')
  })

  test('[1, 2, 3]', () => {
    const l = new LinkedList(1, 2, 3)
    expect(l.toString()).toEqual('[1, 2, 3]')
  })
})
