var Boo = /** @class */ (function () {
    function Boo() {
    }
    Boo.prototype.speak = function () {
        console.log('Hola, soy Boo!');
    };
    Boo.prototype.updateLogic = function () { };
    return Boo;
}());
var Koopa = /** @class */ (function () {
    function Koopa() {
    }
    Koopa.prototype.speak = function () {
        console.log('Hola, soy Kooba!');
    };
    Koopa.prototype.updateLogic = function () { };
    return Koopa;
}());
var Goomba = /** @class */ (function () {
    function Goomba() {
    }
    Goomba.prototype.speak = function () {
        console.log('Hola, soy Goomba');
    };
    Goomba.prototype.updateLogic = function () { };
    return Goomba;
}());
var RandomEnemyFactory = /** @class */ (function () {
    function RandomEnemyFactory() {
    }
    RandomEnemyFactory.prototype.createEnemy = function () {
        var randomNum = Math.random();
        var enemy;
        if (randomNum > 0.66)
            enemy = new Koopa();
        else if (randomNum > 0.33)
            enemy = new Goomba();
        else
            enemy = new Boo();
        return enemy;
    };
    return RandomEnemyFactory;
}());
var RandomDifficultEnemyFactory = /** @class */ (function () {
    function RandomDifficultEnemyFactory() {
    }
    RandomDifficultEnemyFactory.prototype.createEnemy = function () {
        var randomNum = Math.random();
        var enemy;
        if (randomNum > 0.50)
            enemy = new Koopa();
        else if (randomNum > 0.33)
            enemy = new Goomba();
        else
            enemy = new Boo();
        return enemy;
    };
    return RandomDifficultEnemyFactory;
}());
// ====================================================================
var Game = /** @class */ (function () {
    function Game(enemyFactory) {
        this.enemyFactory = enemyFactory;
    }
    Game.prototype.gameLogic = function () {
        console.log('Inicio del juego');
        console.log('Creando enemigo...');
        var enemy = this.enemyFactory.createEnemy();
        console.log('Enemigo creado...');
        console.log('---------------------------------');
        console.log(enemy.speak());
    };
    return Game;
}());
new Game(new RandomEnemyFactory).gameLogic();
