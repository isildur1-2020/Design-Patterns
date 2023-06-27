interface Cat {
  name: string;
  temper: number;
  speak(): void;
}

class EgyptianCat implements Cat {
  name: string = "Egyptian Cat";
  temper: number = 3;
  speak(): void {
    console.log("Meow anubis");
  }
}

class CreoleCat implements Cat {
  name: string = "Creolle Cat";
  temper: number = 7;
  speak(): void {
    console.log("Meow creole");
  }
}

interface CatFactory {
  create(): Cat;
}

class CreateCat implements CatFactory {
  create(): Cat {
    if (true) {
      return new EgyptianCat();
    }
  }
}

class Main {
  private catFactory: CatFactory;
  constructor(catFactory: CatFactory) {
    this.catFactory = catFactory;
  }
  init() {
    this.catFactory.create().speak();
  }
}
