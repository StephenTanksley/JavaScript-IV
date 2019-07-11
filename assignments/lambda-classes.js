// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
    }
  
    destroy() {
      return `${this.name} was removed from the game.`;
    };
  };