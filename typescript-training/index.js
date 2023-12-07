var Vehicule = /** @class */ (function () {
    function Vehicule(speed, brand) {
        this.speed = speed;
        this.brand = brand;
    }
    Vehicule.prototype.setBrand = function (newBrand) {
        this.brand =
            newBrand[0].toUpperCase() +
                newBrand.slice(1, newBrand.length).toLowerCase();
    };
    Vehicule.prototype.getBrand = function () {
        return this.brand;
    };
    Vehicule.color = 'black';
    return Vehicule;
}());
console.log(Vehicule.color);
var VehiculeAPI = /** @class */ (function () {
    function VehiculeAPI() {
    }
    VehiculeAPI.fetchAll = function () {
        console.log('async request ...');
    };
    return VehiculeAPI;
}());
VehiculeAPI.fetchAll();
