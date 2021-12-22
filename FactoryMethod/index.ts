interface Entity {
    speak(): void
    updateLogic(): void
}

class Boo implements Entity {
    speak() {
        console.log('Hola, soy Boo!')
    }
    updateLogic() { }
}

class Kooba implements Entity {
    speak() {
        console.log('Hola, soy Kooba!')
    }
    updateLogic() { }
}

// ===================

interface EnemyFactory {
    createEnemy(): Entity
}

class BooFactory implements EnemyFactory {
    createEnemy() {
        return new Boo()
    }
}

class KoobaFactory implements EnemyFactory {
    createEnemy() {
        return new Kooba()
    }
}

// ===================

class Game {
    private booFactory: EnemyFactory
    private koobaFactory: EnemyFactory

    constructor(booFactory: EnemyFactory, koobaFactory: EnemyFactory) {
        this.booFactory = booFactory
        this.koobaFactory = koobaFactory
    }

    gameLogic() {
        console.log('Inicio del juego')
        console.log('Creando enemigos...')
        let booEnemy = this.booFactory.createEnemy()
        console.log('Boo creado...')
        let koobaEnemy = this.koobaFactory.createEnemy()
        console.log('Kooba creado...')
        console.log('---------------------------------')
        console.log(booEnemy.speak())
        console.log(koobaEnemy.speak())
    }
}

new Game(new BooFactory, new KoobaFactory).gameLogic()