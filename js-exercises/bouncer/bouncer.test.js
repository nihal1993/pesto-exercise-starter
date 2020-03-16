import { bouncer } from "./bouncer";

describe("bouncer", () => {
  test('should tell correct value of bouncer', () => {
    expect(bouncer([false, null, 0, NaN, undefined, '', 9])).toEqual([9]);
    
  });
});
