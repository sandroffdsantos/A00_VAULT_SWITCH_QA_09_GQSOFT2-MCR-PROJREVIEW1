/**
 * @format
 * @remarks This file is intended to be used for <purpose of the file>
 */
import { sumOnly } from "../components/sumfunc";
import { CarProps } from "../modules/CarProps";

/******
 * @UserStory NA
 * @Test TC - Test the sumOnly function to return the sum of two numbers
 * @UsDepndency NA
 *
 *****/
describe("TC001 - Test the sumOnly function to return the sum of two numbers", () => {
    /**
     * Calls the sumOnly function with the given parameters and assigns the result to the actual variable.
     *
     * @param {number} numberOne - The first number to be summed.
     * @param {number} numberTwo - The second number to be summed.
     * @returns {number} The sum of the two numbers.
     */
    test("TC001 - Test the sum of 2 + 5 to return 7", () => {
        // Arrange
        let numberOne: number = 2;
        let numberTwo: number = 5;
        let expected: number = 7;

        // Act
        let actual: number = sumOnly(numberOne, numberTwo);

        // Assert
        expect(actual).toBe(expected);
    });
});
