import { updateObject } from "./updateObject";


describe("updateObject", () => {
  test('should tell correct value of obj', () => {

    expect(updateObject(1, '_', ['a', 'b', 'c'])).toEqual([1, "_", Array("a","_","c")]);

  });

});
