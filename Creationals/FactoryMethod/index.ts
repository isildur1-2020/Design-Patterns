interface Entity {
  speak(): void;
  updateLogic(): void;
}

class Boo implements Entity {
  speak() {
    console.log("Hola, soy Boo!");
  }
  updateLogic() {}
}

class Koopa implements Entity {
  speak() {
    console.log("Hola, soy Kooba!");
  }
  updateLogic() {}
}

class Goomba implements Entity {
  speak() {
    console.log("Hola, soy Goomba");
  }
  updateLogic() {}
}

// ====================================================================

interface EnemyFactory {
  createEnemy(): Entity;
}

class RandomEnemyFactory implements EnemyFactory {
  createEnemy() {
    let randomNum = Math.random();
    let enemy: Entity;
    if (randomNum > 0.66) enemy = new Koopa();
    else if (randomNum > 0.33) enemy = new Goomba();
    else enemy = new Boo();
    return enemy;
  }
}

class RandomDifficultEnemyFactory implements EnemyFactory {
  createEnemy() {
    let randomNum = Math.random();
    let enemy: Entity;
    if (randomNum > 0.5) enemy = new Koopa();
    else if (randomNum > 0.33) enemy = new Goomba();
    else enemy = new Boo();
    return enemy;
  }
}

// ====================================================================

class Game {
  private enemyFactory: EnemyFactory;

  constructor(enemyFactory: EnemyFactory) {
    this.enemyFactory = enemyFactory;
  }

  gameLogic() {
    console.log("Inicio del juego");
    console.log("Creando enemigo...");
    let enemy = this.enemyFactory.createEnemy();
    console.log("Enemigo creado...");
    console.log("---------------------------------");
    console.log(enemy.speak());
  }
}

new Game(new RandomEnemyFactory()).gameLogic();
