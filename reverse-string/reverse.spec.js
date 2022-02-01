import subject from './reverse'

describe('reverse string', () => {
  it('imports without errors', () => {
    expect(subject).toBeDefined()
    expect(typeof subject).toBe('function')
  })
  it('reverses string', () => {
    expect(subject('Hello')).toBe('olleH')
  })
})