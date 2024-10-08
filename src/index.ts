// Imports the Truck class, Car class, Motorbike class, Wheel class, and Cli class.
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Array to store vehicles.
const vehicles = [];

// Creates a new truck object.
const truck1 = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, 10000, []);

// Creates a new car object.
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130, []
);

 
// Creates a new motorbike object.
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);


// Pushes the vehicles the array.
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Creates a new CLI object.
const cli = new Cli(vehicles);
cli.startCli();