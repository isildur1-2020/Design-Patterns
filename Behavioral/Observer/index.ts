interface Observer {
  update(): void;
}

interface Observable {
  suscribe(): void;
  unsuscribe(): void;
  notify(): void;
}

class Publisher implements Observable {
  public lastVideo: string = "Nothing";
  suscribe(): void {}
  unsuscribe(): void {}
  notify(): void {}
}

class Suscriber implements Observer {
  private boss: Observable = null;
  constructor(publisher: Observable) {
    this.boss = publisher;
  }
  update(): void {}
}

const publisher = new Publisher();
const suscriber = new Suscriber(publisher);
