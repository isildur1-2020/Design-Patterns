interface Prototype {
  clone(): Prototype;
}

interface Animal {
  name: string;
  color: string;
}

class Cat implements Prototype {
  private name: string;
  private color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  clone(): Prototype {
    return new Cat(this.name, this.color);
  }
}

// CLIENT CODE
const trueno = new Cat("Trueno", "Gray");
console.log(trueno);
const trueno2 = trueno.clone();
console.log(trueno2);
