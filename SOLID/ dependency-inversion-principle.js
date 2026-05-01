// class MySQLDatabase {
//   save(data) {
//     console.log("Saving to MySQL:", data)
//   }
// }

// class UserService {
//   constructor() {
//     this.db = new MySQLDatabase() // ❌ hard dependency
//   }

//   createUser(user) {
//     this.db.save(user)
//   }
// }

// const service = new UserService()
// service.createUser({ name: "Alice" })


class Database {
  save(data) {
    throw new Error("save() must be implemented");
  }
}
class MySQLDatabase extends Database {
  save(data) {
    console.log("Saving to MySQL:", data);
  }
}

class MongoDatabase extends Database {
  save(data) {
    console.log("Saving to MongoDB:", data);
  }
}
class UserService {
  constructor(database) {
    this.db = database; // depends on abstraction, not implementation
  }

  createUser(user) {
    this.db.save(user);
  }
}
const mysql = new MySQLDatabase()
const mongo = new MongoDatabase()

const service1 = new UserService(mysql)
const service2 = new UserService(mongo)

service1.createUser({ name: "Alice" })
service2.createUser({ name: "Bob" })