class MongoDB {
  private mongoose = require("mongoose");
  private static connection: MongoDB;
  private constructor() {
    this.createConnection();
  }
  static getConnection() {
    if (this.connection === undefined) {
      this.connection = new MongoDB();
    }
    return this.connection;
  }
  private async createConnection() {
    try {
      const db_name = "";
      const user = "";
      const password = "";
      const cluster = "";
      const URI = `mongodb+srv://${user}:${password}@${cluster}/${db_name}`;
      await this.mongoose.connect(URI);
      console.log("Procedure successfully finished");
    } catch (err) {
      console.log(err);
    }
  }
}

const first = MongoDB.getConnection();
const second = MongoDB.getConnection();
const third = MongoDB.getConnection();
const fourth = MongoDB.getConnection();
