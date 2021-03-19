const jsFunctions = require('../src');
const {
  addTwo,
  repeatString,
  mostCommonItem,
  checkPalindrome,
  checkAnagram,
  evenNumbersFromStartToFinish,
} = jsFunctions;

describe('JS Functions Practice: Return', () => {
  it('AddTwo should add 5 and 5 and return 10', () => {
    const actualOutput = addTwo(5, 5);
    expect(actualOutput).toBe(10);
  });

  it('AddTwo should add 5 and 15', () => {
    const actualOutput = addTwo(5, 15);
    expect(actualOutput).toBe(20);
  });

  it('repeatString should repeat "Hello" 5 times', () => {
    const actualOutput = repeatString('Hello', 2);
    expect(actualOutput).toBe('HelloHello');
  });

  it('repeatString should repeat "Hello World!" 5 times', () => {
    const actualOutput = repeatString('Hello World!', 5);
    expect(actualOutput).toBe(
      'Hello World!Hello World!Hello World!Hello World!Hello World!',
    );
  });

  it('mostCommonItem of [1, 1, 1, 3, 2, 4] should be 1', () => {
    const actualOutput = mostCommonItem([1, 1, 1, 3, 2, 4]);
    expect(actualOutput).toBe(1);
  });

  it('mostCommonItem of [3, 2, 1, 3, 2, 4] should be [3, 2] or [2, 3]', () => {
    // TODO: take care of sorting edge case
    const actualOutput = mostCommonItem([3, 2, 1, 3, 2, 4]);
    expect(actualOutput).toEqual([3, 2]);
  });

  it('checkPalindrome "racecar" should be true', () => {
    const actualOutput = checkPalindrome('racecar');
    expect(actualOutput).toBe(true);
  });

  it('checkPalindrome "racecaer" should be false', () => {
    const actualOutput = checkPalindrome('racecaer');
    expect(actualOutput).toBe(false);
  });

  it('checkAnagram "debit card" should be an anagram of "dirty room"', () => {
    const actualOutput = checkAnagram('debit card', 'dirty room');
    expect(actualOutput).toBe(true);
  });

  it('checkAnagram "racecar" should not be an anagram of "football"', () => {
    const actualOutput = checkAnagram('racecar', 'football');
    expect(actualOutput).toBe(true);
  });

  it('evenNumbersFromStartToFinish from 5 to 12 should be [6, 8, 10, 12]', () => {
    const actualOutput = evenNumbersFromStartToFinish(5, 12);
    expect(actualOutput).toEqual([6, 8, 10, 12]);
  });

  it('evenNumbersFromStartToFinish from 0 to 10 should [0, 2, 4, 6, 8, 10]', () => {
    const actualOutput = evenNumbersFromStartToFinish(0, 10);
    expect(actualOutput).toBe([0, 2, 4, 6, 8, 10]);
  });
});
