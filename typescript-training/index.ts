class Vehicule {
  speed: number;
  private brand: string;
  static color: string = 'black';
  constructor(speed: number, brand: string) {
    this.speed = speed;
    this.brand = brand;
  }

  public setBrand(newBrand: string): void {
    this.brand =
      newBrand[0].toUpperCase() +
      newBrand.slice(1, newBrand.length).toLowerCase();
  }

  public getBrand(): string {
    return this.brand;
  }
}
console.log(Vehicule.color);

class VehiculeAPI {
  static fetchAll() {
    console.log('async request ...');
  }
}

VehiculeAPI.fetchAll();
