import LinkedList from '../linked-list/linked-list'
import reorderStudents from './reorder-students'

test('[1, 2] => [1, 2]', () => {
  const l = new LinkedList(1, 2)
  reorderStudents(l)
  expect(l.toString()).toEqual('[1, 2]')
})

test('[1, 2, 3, 4] => [1, 2, 4, 3]', () => {
  const l = new LinkedList(1, 2, 3, 4)
  reorderStudents(l)
  expect(l.toString()).toEqual('[1, 2, 4, 3]')
})

test('[1, 2, 3, 4, 5, 6, 7, 8] => [1, 2, 3, 4, 8, 7, 6, 5]', () => {
  const l = new LinkedList(1, 2, 3, 4, 5, 6, 7, 8)
  reorderStudents(l)
  expect(l.toString()).toEqual('[1, 2, 3, 4, 8, 7, 6, 5]')
})
