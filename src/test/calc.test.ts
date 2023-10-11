import { sumOnly } from "../domain/calc";

test("verifica resultado", () => {
  let result = sumOnly(1, 2, 3, 4, 5);
  expect(result).toBe(15);
});
