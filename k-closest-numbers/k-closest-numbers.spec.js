import subject from './k-closest-numbers'

describe('k closest numbers', () => {
  const list = [-35, -7, -1, 0, 1, 5, 10, 11, 25]
  it('imports without errors', () => {
    expect(subject).toBeDefined()
    expect(typeof subject).toBe('function')
  })
  it('solves the task for small arrays', () => {
    expect(subject([1, 10, 20], 9, 5)).toEqual([1, 10, 20])
    expect(subject([], 9, 5)).toEqual([])
    expect(subject(list, 9, 3)).not.toEqual(list)
  })
  it('solves the task for edge cases', () => {
    expect(subject(list, -100, 3)).toEqual(list.slice(0, 3))
    expect(subject(list, 100, 3)).toEqual(list.slice(-3))
  })
  it('solves the task for the middle of the list', () => {
    expect(subject(list, 0, 3)).toEqual([-1, 0, 1])
    expect(subject(list, 0, 5)).toEqual([-7, -1, 0, 1, 5])
    expect(subject(list, -1, 3)).toEqual([-1, 0, 1])
  })
  it('solves the task for the beginning of the list', () => {
    expect(subject(list, -5, 3)).toEqual([-7, -1, 0])
    expect(subject(list, -8, 5)).toEqual([-7, -1, 0, 1, 5])
    expect(subject(list, -30, 5)).toEqual([-35, -7, -1, 0, 1])
    expect(subject(list, -35, 5)).toEqual([-35, -7, -1, 0, 1])
  })
  it('solves the task for the end of the list', () => {
    expect(subject(list, 16, 3)).toEqual([10, 11, 25])
    expect(subject(list, 16, 5)).toEqual([1, 5, 10, 11, 25])
  })
})
