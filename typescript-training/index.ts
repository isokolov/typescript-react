class Vehicule {
  speed: number;
  brand: string;

  constructor(speed: number, brand: string) {
    this.brand = brand;
    this.speed = speed;
  }

  getFormatedSpeed(): string {
    return this.speed + ' km/h';
  }

  setBrand(newBrand: string) {
    this.brand =
      newBrand[0].toUpperCase() +
      newBrand.slice(1, newBrand.length).toLowerCase();
  }
}

const honda = new Vehicule(200, 'Honda');
const mustang = new Vehicule(250, 'Mustang');

honda.brand = 'toYotA';
honda.setBrand('toyota');

console.log(honda.brand);
