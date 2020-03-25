import { frequencySort } from './freqSort';

describe('frequencySort', () => {
  test('should check the frequency of char', () => {
    expect(frequencySort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([ 'z', 'b', 'a' ]);
    expect(frequencySort(["b", "c", "a", "a", "a", "b", "a"])).toEqual([ 'a', 'b', 'c' ]);  
  });
});
