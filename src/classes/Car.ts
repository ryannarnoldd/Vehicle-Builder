// Imports Wheel class and Vehicle class.
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class.
class Car extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor that initializes the properties of the Car class.
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Uses super constructor to initialize the properties of the parent class.
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // If the wheels array is not provided, create a new array with 4 Wheel objects (Each Wheel objects)
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Method that prints the details of the Car class. It will OVERRIDE...
  override printDetails(): void {
    super.printDetails();

    // Logs each of the details.
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Logs the details of each wheel using a loop.
    for (let i = 0; i < this.wheels.length; i++) {
      console.log(`Wheel  ${i + 1}: ${this.wheels[i].getDiameter} inches with a ${this.wheels[i].getTireBrand} tire..`);
    }
  }
}

// Exports Car.
export default Car;