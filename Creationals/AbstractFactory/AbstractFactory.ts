// ** ABSTRACT FACTORY
/*
 ** Supongamos que desarrollamos un juego de SUPER MARIO MAKER
 ** tenemos que renderizar una moneda y un bloque con vistas para
 ** NintendoDS y GameBoy, entonces ese es un claro ejemploe de bolsillo
 ** para implementar AbstractFactory
 */
// * Primero creamos las entidades que en este caso son COIN y BLOCK, cada
// * una de ellas puede tener los atributos y metodos que desee, pero en este
// * caso cada una va a tener un metodo que es el que lo va a renderizar
interface Coin {
  render(): void;
}
interface Block {
  render(): void;
}
// ===========================================================================
// * Ahora definimos cada uno de los renderizados por aparte, por ejemplo
// * tendremos un renderizado especial para NintendoCoin que GameBoyCoin, sim-
// * plemente porque se ven distintas
class NintendoCoin implements Coin {
  render(): void {
    console.log("Rendering nintendo coin...");
  }
}
class NintendoBlock implements Block {
  render(): void {
    console.log("Rendering nintendo block...");
  }
}
class GameBoyCoin implements Coin {
  render(): void {
    console.log("Rendering gameboy coin...");
  }
}
class GameBoyBlock implements Block {
  render(): void {
    console.log("Rendering gameboy block...");
  }
}
// ===========================================================================
// * Ahora viene AbstractFactory que se encarga de definir los metodos totales
interface AbstractFactory {
  createCoin(): Coin;
  createBlock(): Block;
}

// ===========================================================================
// * Por ultimo las factorias que deben definir explicitamente que tienen que
// * devolver y que se va a mostrar
class GameBoyItemFactory implements AbstractFactory {
  createCoin(): Coin {
    return new GameBoyCoin();
  }
  createBlock(): Block {
    return new GameBoyBlock();
  }
}

class NintendoItemFactory implements AbstractFactory {
  createCoin(): Coin {
    return new NintendoCoin();
  }
  createBlock(): Block {
    return new NintendoBlock();
  }
}

class Game {
  private abstractFactory: AbstractFactory;
  constructor(abstractFactory: AbstractFactory) {
    this.abstractFactory = abstractFactory;
  }
  init() {
    this.abstractFactory.createCoin().render();
    this.abstractFactory.createBlock().render();
  }
}

const newGame = new Game(new GameBoyItemFactory());
newGame.init();
