import subject from './sum-of-two-values'

describe('sumOfTwoValues', () => {
  it('imports without errors', () => {
    expect(subject).toBeDefined()
    expect(typeof subject).toBe('function')
  })
  it('solves a task', () => {
    const given = [5, 7, 1, 2, 8, 4, 3]
    expect(subject(given, 10)).toBe(true)
    expect(subject(given, 19)).toBe(false)
  })
})
