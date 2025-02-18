abstract class Beverage {
  public abstract cost() : number;
}

abstract class AddOnDecorator implements Beverage {
  public abstract cost() : number;
}

class Espresso implements Beverage {
  public cost() :number {
    return 1;
  }
}

class Caramel implements AddOnDecorator {
  beverage: Beverage;
  constructor(b: Beverage){
      this.beverage = b;
  }

  public cost(): number {
    return this.beverage.cost() + 2; //  2 is the price of caramel
  }
}


class Soy implements AddOnDecorator {
  beverage: Beverage;
  constructor(b: Beverage){
      this.beverage = b;
  }

  public cost(): number {
    return this.beverage.cost() + 1; //  1is the price of Soy
  }
}


// How to use this ?

const withSoyEsspresso: Beverage = new Soy(new Espresso());
console.log(withSoyEsspresso.cost());


// We can have any type of Beverages we want with this.