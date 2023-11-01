/**
 * @format
 * @remarks This file is intended to be used for development of algorythms
 */

/**
 * Globally Scoped Variables:
 * @param numberOne
 * @param numberTwo
 */
let numberOne: number;
let numberTwo: number;

/**
 * Function that calculates the sum of two numbers
 * @param numberOne
 * @param numberTwo
 * @returns sum of two numbers
 */
export function sumOnly2(numberOne: number, numberTwo: number): number {
  // Arrange
  let sum: number;

  // Act
  sum = numberOne + numberTwo;

  // Assert
  console.log(sum);
  return sum;
}

sumOnly2(2, 5);
