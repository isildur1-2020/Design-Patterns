// ** FACTORY
// Factory nos sirve para crear estrategias
// de creación de clases que tienen atributos
// en común.

/*
Supongamos que queremos devolver enemigos distintos en
un videojuego aleatoriamente, se puede crear usando el
patrón de diseño FACTORY.
Nos permite crear estrategias de creación.
*/

// Definimos una entidad que en este caso van a
// ser los pokemones y, cada pokemon tiene un nombre,
// una dificultad y un método de ataque
interface Entity {
  name: string;
  difficulty: number;
  attack(): void;
}
// ====================================================
// Definimos nuestros pokemones con configurando sus
// respectivos atributos
class Caterpie implements Entity {
  name: string = "Caterpie";
  difficulty: number = 9;
  attack(): void {
    console.log("Caterpie is attacking!");
  }
}
class Metapod implements Entity {
  name: string = "Metapod";
  difficulty: number = 2;
  attack(): void {
    console.log("Metapod is attacking!");
  }
}
class Butterfree implements Entity {
  name: string = "Butterfree";
  difficulty: number = 5;
  attack(): void {
    console.log("Butterfree is attacking!");
  }
}
// ====================================================
// La interfaz EnemyFactory sirve para crear la
// estrategia de creacion, ya que cada fabrica va a
// extender de esta
interface EnemyFactory {
  createEnemy(): Entity;
}
// ====================================================
// En esta clase crearemos un algoritmo que nos
// devuelva un pokemon segun la probabilidad y, gracias
// a la interfaz EnemyFactory podemos hace polimorfismo
class RandomPokemonFactory implements EnemyFactory {
  createEnemy(): Entity {
    const randomNumber = Math.random();
    console.log(`Random number: ${randomNumber}`);
    if (randomNumber < 0.3) {
      return new Caterpie();
    } else if (randomNumber >= 0.3 && randomNumber < 0.6) {
      return new Metapod();
    } else {
      return new Butterfree();
    }
  }
}
// ====================================================
class Game {
  private enemyFactory: EnemyFactory;
  constructor(enemyFactory: EnemyFactory) {
    this.enemyFactory = enemyFactory;
  }
  init() {
    console.log("Creating enemies...");
    this.enemyFactory.createEnemy().attack();
  }
}

const randomPokemonFactory = new RandomPokemonFactory();
const newGame = new Game(randomPokemonFactory);
newGame.init();
