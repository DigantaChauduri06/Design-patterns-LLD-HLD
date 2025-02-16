// strategy pattern

interface IFlyBehaviour {
    fly: () => void;
}

interface IQuackBehaviour {
    quack: () => void;
}

interface IDisplayBehaviour {
    display: () => void;
}

class Duck {
    fb: IFlyBehaviour;
    qb: IQuackBehaviour;
    db: IDisplayBehaviour;
    constructor(fb: IFlyBehaviour, qb: IQuackBehaviour, db: IDisplayBehaviour) {
        this.db = db;
        this.fb = fb;
        this.qb = qb;
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
}

/**
 *
 * The Benefit of this pattern will be we can have the flexibility to have any functionality to any Duck as want by using Duck class
 *
 */
