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

// PRODUCT
class EightWheeler extends Vehicle {
  public printVehicle(): void {
      console.log("I AM A 8 WHEELER");  
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

class EightWheelerFactory implements IvehicleCreator {
    createVehicle(): Vehicle {
      return new EightWheeler();
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
const client = new Client(new EightWheelerFactory());
const eightWheelerVehicle = client.getVehicle;
eightWheelerVehicle .printVehicle()

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


