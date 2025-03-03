// Strategy pattern example in TypeScript

// Fly behavior interface
interface IFlyBehaviour {
    fly: () => void;
}

// Quack behavior interface
interface IQuackBehaviour {
    quack: () => void;
}

// Display behavior interface
interface IDisplayBehaviour {
    display: () => void;
}

// Concrete Fly behaviors
class FlyWithWings implements IFlyBehaviour {
    fly(): void {
        console.log("Flying with wings!");
    }
}

class NoFly implements IFlyBehaviour {
    fly(): void {
        console.log("I can't fly!");
    }
}

// Concrete Quack behaviors
class Quack implements IQuackBehaviour {
    quack(): void {
        console.log("Quack! Quack!");
    }
}

class MuteQuack implements IQuackBehaviour {
    quack(): void {
        console.log("<< Silence >>");
    }
}

// Concrete Display behaviors
class DisplayAsMallard implements IDisplayBehaviour {
    display(): void {
        console.log("I look like a Mallard duck.");
    }
}

class DisplayAsRubberDuck implements IDisplayBehaviour {
    display(): void {
        console.log("I look like a Rubber duck.");
    }
}

// Duck class with strategy pattern
class Duck {
    fb: IFlyBehaviour;
    qb: IQuackBehaviour;
    db: IDisplayBehaviour;

    constructor(fb: IFlyBehaviour, qb: IQuackBehaviour, db: IDisplayBehaviour) {
        this.fb = fb;
        this.qb = qb;
        this.db = db;
    }

    public fly(): void {
        this.fb.fly();
    }

    public quack(): void {
        this.qb.quack();
    }

    public display(): void {
        this.db.display();
    }

    public setFlyBehaviour(fb: IFlyBehaviour): void {
        this.fb = fb;
    }

    public setQuackBehaviour(qb: IQuackBehaviour): void {
        this.qb = qb;
    }

    public setDisplayBehaviour(db: IDisplayBehaviour): void {
        this.db = db;
    }
}

// Creating ducks with different behaviors
const mallardDuck = new Duck(new FlyWithWings(), new Quack(), new DisplayAsMallard());
const rubberDuck = new Duck(new NoFly(), new MuteQuack(), new DisplayAsRubberDuck());

// Testing mallard duck
console.log("Mallard Duck:");
mallardDuck.display();  // "I look like a Mallard duck."
mallardDuck.fly();      // "Flying with wings!"
mallardDuck.quack();    // "Quack! Quack!"

console.log("\nRubber Duck:");
rubberDuck.display();   // "I look like a Rubber duck."
rubberDuck.fly();       // "I can't fly!"
rubberDuck.quack();     // "<< Silence >>"

// Changing rubber duck's behavior dynamically
console.log("\nRubber Duck after behavior change:");
rubberDuck.setFlyBehaviour(new FlyWithWings());
rubberDuck.fly();  // Now it can fly!
