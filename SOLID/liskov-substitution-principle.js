// class Bird {
//   fly() {
//     return "I can fly";
//   }
// }

// class Duck extends Bird {}

// class Penguin extends Bird {
//   fly() {
//     throw new Error("I can't fly"); // ❌ порушення
//   }
// }

// function makeBirdFly(bird) {
//   return bird.fly();
// }

// makeBirdFly(new Duck());    // OK
// makeBirdFly(new Penguin()); // 💥 crash

class Bird {}

class FlyingBird extends Bird {
  fly() {
    return "I can fly";
  }
}

class Duck extends FlyingBird {}

class Penguin extends Bird {}