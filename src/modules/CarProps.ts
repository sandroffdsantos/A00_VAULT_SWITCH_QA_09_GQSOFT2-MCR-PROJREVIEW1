/**
 * @format
 * @remarks This file is intended to be used for <purpose of the file>
 */

/**
 * @CarProps Represents the properties of a car.
 */
export class CarProps {
    /**
     * Creates a new instance of CarProps.
     * @param brand The brand of the car.
     * @param color The color of the car.
     * @param price The price of the car.
     */
    constructor(
        public brand: string,
        public color: string,
        public price: number
    ) {}

    /**
     * Gets the brand of the car.
     * @returns The brand of the car.
     */
    public getBrand(): string {
        return this.brand;
    }

    /**
     * Gets the color of the car.
     * @returns The color of the car.
     */
    public getColor(): string {
        return this.color;
    }

    /**
     * Gets the price of the car.
     * @returns The price of the car.
     */
    public getPrice(): number {
        return this.price;
    }

    /**
     * Sets the brand of the car.
     * @param brand The new brand of the car.
     */
    public setBrand(brand: string): void {
        this.brand = brand;
    }

    /**
     * Sets the color of the car.
     * @param color The new color of the car.
     */
    public setColor(color: string): void {
        this.color = color;
    }

    /**
     * Sets the price of the car.
     * @param price The new price of the car.
     */
    public setPrice(price: number): void {
        this.price = price;
    }
}
