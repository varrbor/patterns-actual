// class Bird {
//   fly() {}
//   swim() {}
//   walk() {}
// }
// class Duck extends Bird {
//   fly() { return "flying" }
//   swim() { return "swimming" }
//   walk() { return "walking" }
// }

// class Penguin extends Bird {
//   fly() { throw new Error("I can't fly") }   // ❌ forced to implement
//   swim() { return "swimming" }
//   walk() { return "walking" }
// }

class Bird {}

class Flying {
  fly() {
    return "I can fly"
  }
}

class Swimming {
  swim() {
    return "I can swim"
  }
}

class Walking {
  walk() {
    return "I can walk"
  }
}

class Duck extends Bird {}
Object.assign(Duck.prototype, new Flying(), new Swimming(), new Walking())

class Penguin extends Bird {}
Object.assign(Penguin.prototype, new Swimming(), new Walking())
