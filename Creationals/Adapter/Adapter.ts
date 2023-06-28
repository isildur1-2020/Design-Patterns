// ** ADAPTER
/*
 * Es utilizado este patrón de diseño para adaptar
 * una interfaz de una clase a otra interfaz que se
 * espera utilizar. Esto permite que las clases que no
 * sean compatibles puedan trabajar juntas, adaptándose
 * a nuestros requerimientos
 *
 * Supongamos que tenemos un clase de un librería de
 * autenticación, esta librería tiene métodos para iniciar
 * sesión, para cerrar sesión y un método para obtener la
 * información del usuario, pero queremos cambiar el
 * comportamiento de obtener información del usuario
 */
class AuthenticationLibrary {
  login() {
    console.log("Log user");
  }
  logout() {
    console.log("Logout user");
  }
  getUserInformation() {
    console.log("Get PABLOKBS information");
  }
}
/*
 * Lo que podemos hacer es crear una clase que herede de
 * la que ya tenemos para asií sobrescribir el método
 */
class AuthenticationAdapter extends AuthenticationLibrary {
  getUserInformation(): void {
    console.log("Get my own information");
  }
}
