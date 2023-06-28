/*
 * Supongamos que hemos creado un programa tipo
 * paint en nuestro trabajo y, necesitamos agregar
 * la funcionalidad de copiar y pegar un circulo creado.
 * este circulo tiene posicion x, y, radio y color.
 * Es un buen ejemplo para utilizar prototype
 */
interface Prototype {
  clone(): Prototype;
}

class Circle implements Prototype {
  private x: number;
  private y: number;
  private radio: number;
  private color: string;
  constructor(x: number, y: number, radio: number, color: string) {
    this.x = x;
    this.y = y;
    this.radio = radio;
    this.color = color;
  }
  clone(): Prototype {
    return new Circle(this.x, this.y, this.radio, this.color);
  }
}

const newCircle = new Circle(0, 0, 1200, "green");
const copyCircle = newCircle.clone();
