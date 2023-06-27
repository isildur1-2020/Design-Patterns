// ** SINGLETON
// * ÚNICA INSTANCIA
// * ACCESSO GLOBAL
// Crear un método para obtener la instancia
// definir la instancia como la clase y estatica
// si la instancia no esta definida entonces
// instanciar la propia clase y devolverla

class MySingleton {
  private static instance: MySingleton;
  private constructor() {
    console.log("Constructor called");
  }
  static getInstance(): MySingleton {
    if (!MySingleton.instance) {
      console.log("Creating an instance");
      MySingleton.instance = new MySingleton();
    }
    return MySingleton.instance;
  }
}
const first = MySingleton.getInstance();
const second = MySingleton.getInstance();
const thrid = MySingleton.getInstance();
const fourth = MySingleton.getInstance();
