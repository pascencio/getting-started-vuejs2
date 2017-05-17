import Dexie from 'dexie';

let name = 'todo-db';
let db = new Dexie(name);

db.open().catch((error) => {
  console.log("Error: " + error);
});

class Model {
  constructor(options) {
    this.db = db;
    this.options = options;
    this.db.version(options.version).stores(options.schema);
  }

  get db() {
    return this.db;
  }
}

export default Model;
