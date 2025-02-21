// ABSTRACT FACTORY
interface VehicleFactory {
  createTwoWheeler(): Wheeler2;
  createFourWheeler(): Wheeler4;
}


// CONCRETE FACTORY 1 (BMW Factory)
class BMWFactory implements VehicleFactory {
  createTwoWheeler(): Wheeler2 {
    return new BMWBike();
  }
  createFourWheeler(): Wheeler4 {
    return new BMWCar();
  }
}

// CONCRETE FACTORY 2 (Toyota Factory)
class ToyotaFactory implements VehicleFactory {
  createTwoWheeler(): Wheeler2 {
    return new ToyotaBike();
  }
  createFourWheeler(): Wheeler4 {
    return new ToyotaCar();
  }
}


// ABSTRACT PRODUCT A
abstract class Wheeler2 {
  abstract printType(): void;
}

// ABSTRACT PRODUCT B
abstract class Wheeler4 {
  abstract printType(): void;
}

// CONCRETE PRODUCT A1 (BMW Wheeler2)
class BMWBike extends Wheeler2 {
  printType(): void {
    console.log("BMW Sports Bike");
  }
}

// CONCRETE PRODUCT A2 (Toyota Wheeler2)
class ToyotaBike extends Wheeler2 {
  printType(): void {
    console.log("Toyota Electric Scooter");
  }
}

// CONCRETE PRODUCT B1 (BMW Wheeler4)
class BMWCar extends Wheeler4 {
  printType(): void {
    console.log("BMW Luxury Car");
  }
}

// CONCRETE PRODUCT B2 (Toyota Wheeler4)
class ToyotaCar extends Wheeler4 {
  printType(): void {
    console.log("Toyota Budget Car");
  }
}




// CLIENT CODE (Uses Abstract Factory)
function vehicleShowroom(factory: VehicleFactory) {
  const bike = factory.createTwoWheeler();
  const car = factory.createFourWheeler();

  bike.printType();
  car.printType();
}

// USAGE
console.log("🚗 BMW Factory:");
vehicleShowroom(new BMWFactory());

console.log("\n🚙 Toyota Factory:");
vehicleShowroom(new ToyotaFactory());
