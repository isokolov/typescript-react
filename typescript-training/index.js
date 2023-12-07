var Vehicule = /** @class */ (function () {
    function Vehicule(speed, brand) {
        this.brand = brand;
        this.speed = speed;
    }
    Vehicule.prototype.getFormatedSpeed = function () {
        return this.speed + ' km/h';
    };
    Vehicule.prototype.setBrand = function (newBrand) {
        this.brand =
            newBrand[0].toUpperCase() +
                newBrand.slice(1, newBrand.length).toLowerCase();
    };
    return Vehicule;
}());
var honda = new Vehicule(200, 'Honda');
var mustang = new Vehicule(250, 'Mustang');
honda.brand = 'toYotA';
honda.setBrand('toyota');
console.log(honda.brand);
