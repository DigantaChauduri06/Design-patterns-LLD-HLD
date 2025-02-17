interface IObservable {
  add: (observer: IObserver)=>void;
  remove: (observer: IObserver)=>void;
  notify: () => void;
}

interface IObserver {
  update: () => void;
}

// Example of weather system
// In this example we will need to notify whenever any changes to the temp to phones, TV or whoever it subscribes 

// this is subject
class WeatherStation implements IObservable {
  temp: number = 0;
  observers: IObserver[] = [];
  
  public add(observer: IObserver) {
    this.observers.push(observer);
    this.notify();  
  }
  
  public remove(observer: IObserver) {
    this.observers = this.observers.filter(obs => obs !== observer);
    this.notify();  
  }

  public notify() {
    this.observers.forEach(obs => {
      obs.update();
    })
  }

  public getTemparature(): number {
      return this.temp;
  }
}

// This is a subscriber
class SmartPhone implements IObserver {
  weatherStation: WeatherStation;
  
  constructor(weatherStation: WeatherStation) {
    this.weatherStation = weatherStation;
  }
  
  update() {
    console.log(this.weatherStation.getTemparature());
  }
}


// This is a subscriber
class SmartTv implements IObserver {
  weatherStation: WeatherStation;

  constructor(weatherStation: WeatherStation) {
    this.weatherStation = weatherStation;
  }

  update() {
    console.log(this.weatherStation.getTemparature());
  }
}



