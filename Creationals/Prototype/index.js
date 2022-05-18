var Perro = /** @class */ (function () {
    function Perro(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    Perro.prototype.clone = function () {
        return new Perro(this.name, this.age, this.color);
    };
    return Perro;
}());
var maku = new Perro("Makú", 2, "White");
var makuDuplicated = maku.clone();
console.log(maku);
console.log(makuDuplicated);
console.log(maku == makuDuplicated);
console.log(maku === makuDuplicated);
