import subject from './move-zeros-to-the-left'

describe('moveZerosToLeft', () => {
  it('imports without errors', () => {
    expect(subject).toBeDefined()
    expect(typeof subject).toBe('function')
  })
  it('solves the task', () => {
    expect(subject([1, 10, 20, 0, 59, 63, 0, 88, 0])).toEqual([
      0, 0, 0, 1, 10, 20, 59, 63, 88,
    ])

    expect(subject([1, 10, -1, 11, 5, 0, -7, 0, 25, -35])).toEqual([
      0, 0, 1, 10, -1, 11, 5, -7, 25, -35,
    ])
  })
})
