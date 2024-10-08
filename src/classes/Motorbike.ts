// Imports Wheel class and Vehicle class.
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Constructor for Motorbike class that extends Vehicle class.
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
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
    // UseS super.
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // If the wheels array is not provided, create a new array with 2 Wheel objects
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  // function that will make the motorbike do a wheelie.
  wheelie(bikey: Motorbike): void {
    if (bikey.vin != '') {
      console.log(bikey.make);
    }
    if (bikey.model != '') {
      console.log(bikey.model);
    }
    console.log(`Motorbike ${bikey.make} ${bikey.model} is doing a wheelie!`);
  }

  // Overrides the printDetails method from the Vehicle class. 
  override printDetails(): void {
    super.printDetails();

    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Logs the details of each wheel.
    console.log(`Wheel  1: ${this.wheels[0].getDiameter} inches with ${this.wheels[0].getTireBrand} tire `);
    console.log(`Wheel  2: ${this.wheels[1].getDiameter} inches with ${this.wheels[1].getTireBrand} tire`);
  }
}

// Exports the Motorbike class.
export default Motorbike;