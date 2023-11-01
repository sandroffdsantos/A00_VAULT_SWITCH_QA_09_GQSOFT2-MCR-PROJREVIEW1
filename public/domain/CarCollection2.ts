/**
 * @format
 * @remarks This file is intended to be used for <purpose of the file>
 */

import { CarProps2 } from "../modules/CarProps2";

/**
 * @Car Represents a car.
 */

export class Car2 extends CarProps2 {
  /**
   * Creates a new instance of Car.
   * @param brand The brand of the car.
   * @param color The color of the car.
   * @param price The price of the car.
   */
  constructor(
    public brand: string,
    public color: string,
    public price: number
  ) {
    super(brand, color, price);
  }
}

/**
 * @CarCollection Represents a collection of cars.
 */

export class CarCollection {
  /**
   * Creates a new instance of CarCollection.
   * @param cars The cars in the collection.
   */
  constructor(public cars: Car2[]) {}

  /**
   * Gets the cars in the collection.
   * @returns The cars in the collection.
   */
  public getCars(): Car2[] {
    return this.cars;
  }

  /**
   * Sets the cars in the collection.
   * @param cars The new cars in the collection.
   */
  public setCars(cars: Car2[]): void {
    this.cars = cars;
  }

  /**
   * Adds a car to the collection.
   * @param car The car to add to the collection.
   */
  public addCar(car: Car2): void {
    this.cars.push(car);
  }

  /**
   * Removes a car from the collection.
   * @param car The car to remove from the collection.
   */
  public removeCar(car: Car2): void {
    this.cars = this.cars.filter((c) => c !== car);
  }
}
