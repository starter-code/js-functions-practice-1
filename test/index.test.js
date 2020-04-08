const jsFunctions = require('../src');
const {
  addTwo,
  repeatString,
  mostCommonItem,
  checkPalindrome,
  checkAnagram,
} = jsFunctions;

const paramsOne = {
  addTwo: [5, 5],
  repeatString: ['Hello', 5],
  mostCommonItem: [1, 1, 1, 3, 2, 4],
  checkPalindrome: 'racecar',
  checkAnagram: ['debit card', 'dirty room'],
};

const paramsTwo = {
  addTwo: [5, 15],
  repeatString: ['Hello World!', 2],
  mostCommonItem: [3, 2, 1, 3, 2, 4],
  checkPalindrome: 'racecare',
  checkAnagram: ['racecar', 'football'],
};

const expectedOutputOne = {
  addTwo: 10,
  repeatString: 'HelloHelloHelloHelloHello',
  mostCommonItem: 1,
  checkPalindrome: true,
  checkAnagram: true,
};

const expectedOutputTwo = {
  addTwo: 20,
  repeatString: 'Hello World!Hello World!',
  mostCommonItem: [3, 2],
  checkPalindrome: false,
  checkAnagram: false,
};

describe('JS Functions Practice: Return', () => {
  it('AddTwo should add 5 and 5', () => {
    const actualOutput = addTwo(...paramsOne.addTwo);
    expect(actualOutput).toBe(expectedOutputOne.addTwo);
  });

  it('AddTwo should add 5 and 15', () => {
    const actualOutput = addTwo(...paramsTwo.addTwo);
    expect(actualOutput).toBe(expectedOutputTwo.addTwo);
  });

  it('repeatString should repeat "Hello" 5 times', () => {
    const actualOutput = repeatString(...paramsOne.repeatString);
    expect(actualOutput).toBe(expectedOutputOne.repeatString);
  });

  it('repeatString should repeat "Hello World!" 5 times', () => {
    const actualOutput = repeatString(...paramsTwo.repeatString);
    expect(actualOutput).toBe(expectedOutputTwo.repeatString);
  });

  it('mostCommonItem should be 1', () => {
    const actualOutput = mostCommonItem(paramsOne.mostCommonItem);
    expect(actualOutput).toBe(expectedOutputOne.mostCommonItem);
  });

  it('mostCommonItem should be [3, 2] or [2, 3]', () => {
    // @todo: take care of sorting
    const actualOutput = mostCommonItem(paramsTwo.mostCommonItem);
    expect(actualOutput).toBe(expectedOutputTwo.mostCommonItem);
  });

  it('checkPalindrome "racecar" should be true', () => {
    const actualOutput = checkPalindrome(paramsOne.checkPalindrome);
    expect(actualOutput).toBe(expectedOutputOne.checkPalindrome);
  });

  it('checkPalindrome "racecaer" should be false', () => {
    // @todo: take care of sorting
    const actualOutput = checkPalindrome(paramsTwo.checkPalindrome);
    expect(actualOutput).toBe(expectedOutputTwo.checkPalindrome);
  });

  it('checkAnagram "debit card" should be an anagram of "dirty room"', () => {
    const actualOutput = checkAnagram(paramsOne.checkAnagram);
    expect(actualOutput).toBe(expectedOutputOne.checkAnagram);
  });

  it('checkAnagram "racecar" should not be an anagram of "football"', () => {
    const actualOutput = checkAnagram(paramsTwo.checkAnagram);
    expect(actualOutput).toBe(expectedOutputTwo.checkAnagram);
  });
});
