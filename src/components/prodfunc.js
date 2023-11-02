/**
 * @format
 * @remarks This file is intended to be used for the development of the algorythm for the product of two numbers
 */

/**
 * Globally Scoped Variables Declaration::
 * @param numberOne
 * @param numberTwo
 */
let numberOne;
let numberTwo;

/**
 * Function that calculates the product of two numbers
 * @param numberOne
 * @param numberTwo
 * @returns product of two numbers
 */
export function prodOnly(numberOne, numberTwo) {
  // Arrange
  let product;
  // Act
  product = numberOne * numberTwo;
  // Assert
  console.log(product);
  return product;
}

prodOnly(2, 3);
