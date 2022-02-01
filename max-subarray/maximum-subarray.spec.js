import subject from './maximum-subarray'

describe('maximum subarray', () => {
  it('imports without errors', () => {
    expect(subject).toBeDefined()
    expect(typeof subject).toBe('function')
  })
  it('just works', () => {
    expect(subject([1])).toBe(1)
    expect(subject([5, 4, -1, 7, 8])).toBe(23)
    expect(subject([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })
})
