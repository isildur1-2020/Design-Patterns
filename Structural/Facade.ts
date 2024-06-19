/*
 * FACADE - ESTRUCTURAL
 * Simplifica la interacción ente diferentes componentes de un sistema
 *
 * Este patrón se enfoca en proporcionar una interfaz única y fácil de usar
 * para acceder a las funcionalidades de un sistema complejo
 *
 * De esta manera, los clientes que utilizan la clase Facade
 * solo se preocupan por llamar las operaciones expuestas por esta
 * interfaz, sin pensar en los detalles de los componentes internos
 *
 * VENTAJAS
 * -> Simplifica interacción entre componentes
 * -> Mejora legibilidad
 * -> Mejora mantenimiento
 * -> Permite desacoplar
 *
 * DESVENTAJAS
 * -> Aumentar complejidad
 * -> Recomendable para sistemas grandes no sencillos
 */

type Product = {};
type Order = {};

class StockManager {
  public addProduct(product: Product) {}
}
class OrderManager {
  public makeOrder(order: Order) {}
}
class ReportGenerator {
  public generateReport() {}
}

class InventoryFacade {
  private stockManager = new StockManager();
  private orderManager = new OrderManager();
  private reportGenerator = new ReportGenerator();

  public addProduct(product: Product) {
    this.stockManager.addProduct(product);
  }

  public makeOrder(order: Order) {
    this.orderManager.makeOrder(order);
  }

  public generateReport() {
    this.reportGenerator.generateReport();
  }
}
