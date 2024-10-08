class Wheel {
  private diameter: number;
  private tireBrand: string;

  // Constructor for Wheel class.
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  // Returns the diameter of the wheel.
  get getDiameter(): number {
    return this.diameter;
  }

  get getTireBrand(): string {
    return this.tireBrand;
  }
}

// Exports Wheel.
export default Wheel;