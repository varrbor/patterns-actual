class TreeType {
  constructor(name, color, texture) {
    this.name = name
    this.color = color
    this.texture = texture
  }

  draw(x, y) {
    console.log(`Drawing ${this.name} tree at (${x}, ${y})`)
  }
}

class TreeFactory {
  constructor() {
    this.types = {}
  }

  getTreeType(name, color, texture) {
    const key = `${name}_${color}_${texture}`

    if (!this.types[key]) {
      this.types[key] = new TreeType(name, color, texture)
    }

    return this.types[key]
  }
}
class Tree {
  constructor(x, y, type) {
    this.x = x
    this.y = y
    this.type = type // shared flyweight
  }

  draw() {
    this.type.draw(this.x, this.y)
  }
}
class Forest {
  constructor() {
    this.trees = []
    this.factory = new TreeFactory()
  }

  plantTree(x, y, name, color, texture) {
    const type = this.factory.getTreeType(name, color, texture)
    const tree = new Tree(x, y, type)
    this.trees.push(tree)
  }

  draw() {
    this.trees.forEach(tree => tree.draw())
  }
}
const forest = new Forest()

forest.plantTree(10, 20, "Oak", "Green", "oak.png")
forest.plantTree(15, 25, "Oak", "Green", "oak.png")
forest.plantTree(50, 80, "Pine", "DarkGreen", "pine.png")

forest.draw()

