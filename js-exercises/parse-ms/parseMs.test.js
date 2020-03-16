import { parseMs } from "./parseMs";

describe("parseMs", () => {
    test('should tell correct value of millisecond', () => {
      expect(parseMs('1337000001')).toEqual( {days: 15, hours: 371, minutes: 22283, seconds: 1337000, milliseconds: 1337000001,	microseconds: 0,
        nanoseconds: 0});
      
    });

});
  
