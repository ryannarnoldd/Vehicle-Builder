import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

interface AbleToTow {
    // Allows tow to be done to a Truck, Motorbike, or Car.
    towingCapacity: number;
    tow(vehicle: Truck | Motorbike | Car): void;
}

// Exports interface for Truck class.
export default AbleToTow;
