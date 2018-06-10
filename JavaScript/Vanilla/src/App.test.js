
import { hello, add, removeSNames } from './App';

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello')
  });
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(-2, -2)).toBe(-4)
  });
  it('should not add string', () => {
    expect(add(2, '2')).toBe(null)
  });
  it('should not add objects', () => {
    expect(add(2, {})).toBe(null)
  });
  it('should not add array', () => {
    expect(add(2, [])).toBe(null)
  });
  it('should not add variable', () => {
    expect(add(2, test)).toBe(null)
  });
});

describe('removeSNames', () => {
  it('should remove all s names', () => {
    const names = ['Shak', 'Courtney', 'Shem', 'shad'];
    expect(removeSNames(names)).not.toContain('Shak');
    expect(removeSNames(names)).not.toContain('Shem');
    expect(removeSNames(names)).not.toContain('shad');
  });
  it('should not remove other names', () => {
    const names = ['Shak', 'Courtney', 'Wes'];
    expect(removeSNames(names)).toContain('Courtney');
    expect(removeSNames(names)).toContain('Wes');
  });
  it('should account for upper and lower case', () => {
    const names = ['Shak', 'Courtney', 'Wes', 'shad'];
    expect(removeSNames(names)).not.toContain('Shak');
    expect(removeSNames(names)).not.toContain('shad');
  });
});