import subject from './rotate-array'

describe('rotate array', () => {
  it('imports without errors', () => {
    expect(subject).toBeDefined()
    expect(typeof subject).toBe('function')
  })
  it('throws when params are wrong', () => {
    expect(() => subject('')).toThrow()
    expect(() => subject([], -1)).toThrow()
  })
  it('just works', () => {
    expect(subject([1], 1)).toEqual([1])
    expect(subject([1, 2], 1)).toEqual([2, 1])
    expect(subject([1, 2], 2)).toEqual([1, 2])
    expect(subject([1, 2], 3)).toEqual([2, 1])
    expect(subject(['x', 'y', 'z'], 1)).toEqual(['z', 'x', 'y'])
    expect(subject(['x', 'y', 'z'], 2)).toEqual(['y', 'z', 'x'])
    expect(subject(['x', 'y', 'z'], 3)).toEqual(['x', 'y', 'z'])
    expect(subject([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
    expect(subject([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
  })
})
