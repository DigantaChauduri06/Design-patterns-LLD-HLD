abstract class Vehicle {
  public abstract printVehicle(): void; 
}

// PRODUCT
class TwoWheeler extends Vehicle {
  public printVehicle(): void {
      console.log("I AM A TWO WHEELER");  
  }
  
}
// PRODUCT
class FourWheeler extends Vehicle {
  public printVehicle(): void {
      console.log("I AM A Four WHEELER");  
  }
}

// using factory method pattern
// CREATOR
interface IvehicleCreator {
  createVehicle() : Vehicle;
}
// CREATOR
class TwoWheelerFactory implements IvehicleCreator {
    createVehicle(): Vehicle {
      return new TwoWheeler();
    }
}

class FourWheelerFactory implements IvehicleCreator {
    createVehicle(): Vehicle {
      return new FourWheeler();
    } 
}
// So if we want to create 8 wheeler then just need to create this class  

class Client {
  private vehicle: Vehicle;
  constructor(private factory: IvehicleCreator) {
    this.vehicle = factory.createVehicle();
  }
  get getVehicle() {
    return this.vehicle
  }
}

// How do I use this?
const client = new Client(new TwoWheelerFactory());
const twoWheelerVehicle = client.getVehicle;
twoWheelerVehicle.printVehicle()

/*
// Client - without Factory method
class Client {
  private vehicle: Vehicle | null;
  constructor(type: number) {
    if (type === 2) {
      this.vehicle = new TwoWheeler();
    } else if (type === 4) {
      this.vehicle = new FourWheeler();
    } else {
      this.vehicle = null;
    }
  }

  clearVehicle() {
    this.vehicle = null;
  }

  get getVehicle() {
    return this.vehicle;
  }
  
}

// How do I use this?
const client = new Client(2);
const vehicle = client.getVehicle;
if (vehicle != null) {
  vehicle.printVehicle();
}
client.clearVehicle()
*/


