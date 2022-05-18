interface IPrototype {
  clone(): IPrototype;
}

class Perro implements IPrototype {
  private name: string;
  private age: number;
  private color: string;

  constructor(name: string, age: number, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  clone(): Perro {
    return new Perro(this.name, this.age, this.color);
  }
}

const maku = new Perro("Makú", 2, "White");
const makuDuplicated = maku.clone();

console.log(maku);
console.log(makuDuplicated);
console.log(maku == makuDuplicated);
console.log(maku === makuDuplicated);
