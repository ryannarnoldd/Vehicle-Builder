// Imports Vehicle class, Motorbike class, Car class, Wheel class, and AbleToTow interface.
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class that extends Vehicle class and implements AbleToTow!!! interface.
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[],

  ) {
    // Uses super.
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // If the wheels array is not provided, create a new array with 4 Wheel objects. Same thing. (Could optimise this)
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // function to tow any vehicle using union operator.
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.vin != '') {
      console.log(vehicle.make);
    }
    if (vehicle.model != '') {
      console.log(vehicle.model);
    }

    // If the weight of the vehicle is less than or equal to the towing capacity, the vehicle is towed.
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicle.make} ${vehicle.model} is towed`);
    }
    else {
      console.log((`${vehicle.make} ${vehicle.model} is too heavy.`));
    }
  }

  override printDetails(): void {
    super.printDetails();
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

    // If had more time, could create the wheels property in the Vehicle class and use it here.
  }
}

// Exports Truck.
export default Truck;