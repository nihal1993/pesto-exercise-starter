import { leastCommonMultiple } from "./leastCommonMultiple";

describe("leastCommonMultiple", () => {

  test('should tell correct answer  of lcm ', () => {
    expect(leastCommonMultiple(6, 12)).toEqual(12);
    expect(leastCommonMultiple(7, 7)).toEqual(7);
    expect(leastCommonMultiple(13, 7)).toEqual(91);
    
  });

});
