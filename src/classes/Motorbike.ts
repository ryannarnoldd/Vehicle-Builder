// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if (wheels.length === 2) {
      this.wheels = wheels;
    } else {
      this.wheels = [new Wheel(), new Wheel()];
    }
  }

    wheelie(): void {
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }

    override printDetails(): void {
      super.printDetails();

      console.log(`VIN: ${this.vin}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight}`);
      console.log(`Top Speed: ${this.topSpeed}`);
      console.log(`Color: ${this.color}`);

      console.log('Wheels:');
       console.log(`First Wheel: ${this.wheels[0].getDiameter} inches with ${this.wheels[0].getTireBrand} tire.`);
      console.log(`Second Wheel: ${this.wheels[1].getDiameter} inches with ${this.wheels[1].getTireBrand} tire.`);
    

    }
}

// Export the Motorbike class as the default export
export default Motorbike;
