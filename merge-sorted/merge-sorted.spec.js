import subject from './merge-sorted'

describe('merge sorted arrays', () => {
  it('imports without errors', () => {
    expect(subject).toBeDefined()
    expect(typeof subject).toBe('function')
  })
  it('throws when params are wrong', () => {
    expect(() => subject('', [])).toThrow()
    expect(() => subject([], null)).toThrow()
  })
  it('not throws when one of the arrays is empty', () => {
    expect(subject([1, 2, 3], [])).toEqual([1, 2, 3])
    expect(subject([], [4, 5, 6])).toEqual([4, 5, 6])
  })
  it('returns merged array when arrays are of the same length', () => {
    expect(subject([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    expect(subject([1, 4, 6], [2, 3, 5])).toEqual([1, 2, 3, 4, 5, 6])
  })
  it('returns merged array when arrays are of the different length', () => {
    expect(subject([0, 3, 4, 31], [4, 6, 30])).toEqual([0, 3, 4, 4, 6, 30, 31])
    expect(subject([4, 6, 30], [0, 3, 4, 31])).toEqual([0, 3, 4, 4, 6, 30, 31])
  })
})
