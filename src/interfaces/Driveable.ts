// Standard Driveable interface for all vehicles. Made for Vehicle class.
interface Driveable {
  started: boolean;
  currentSpeed: number;
  start(): void;
  accelerate(change: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}

export default Driveable;