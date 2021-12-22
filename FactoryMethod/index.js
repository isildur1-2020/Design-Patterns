var Boo = /** @class */ (function () {
    function Boo() {
    }
    Boo.prototype.speak = function () {
        console.log('Hola, soy Boo!');
    };
    Boo.prototype.updateLogic = function () { };
    return Boo;
}());
var Kooba = /** @class */ (function () {
    function Kooba() {
    }
    Kooba.prototype.speak = function () {
        console.log('Hola, soy Kooba!');
    };
    Kooba.prototype.updateLogic = function () { };
    return Kooba;
}());
var BooFactory = /** @class */ (function () {
    function BooFactory() {
    }
    BooFactory.prototype.createEnemy = function () {
        return new Boo();
    };
    return BooFactory;
}());
var KoobaFactory = /** @class */ (function () {
    function KoobaFactory() {
    }
    KoobaFactory.prototype.createEnemy = function () {
        return new Kooba();
    };
    return KoobaFactory;
}());
// ===================
var Game = /** @class */ (function () {
    function Game(booFactory, koobaFactory) {
        this.booFactory = booFactory;
        this.koobaFactory = koobaFactory;
    }
    Game.prototype.gameLogic = function () {
        console.log('Inicio del juego');
        console.log('Creando enemigos...');
        var booEnemy = this.booFactory.createEnemy();
        console.log('Boo creado...');
        var koobaEnemy = this.koobaFactory.createEnemy();
        console.log('Kooba creado...');
        console.log('---------------------------------');
        console.log(booEnemy.speak());
        console.log(koobaEnemy.speak());
    };
    return Game;
}());
new Game(new BooFactory, new KoobaFactory).gameLogic();
