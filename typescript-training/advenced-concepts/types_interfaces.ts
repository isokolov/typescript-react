/*interface Vehicule {
  maxSpeed: number;
  brand: string;
}
interface Car extends Vehicule {
  horsePower: number;
}
interface Boat extends Vehicule {
  sails: number;
}
let car: Car = {
  brand: "Mustang",
  horsePower: 250,
  maxSpeed: 280,
};
*/

interface Vehicule {
  maxSpeed: number;
  brand: string;
}
type Car = {
  horsePower: number;
} & Vehicule;
type Boat = {
  sails: number;
} & Vehicule;

let car: Car;
let boat: Boat;
