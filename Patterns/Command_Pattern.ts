interface ICommand {
  execute(): void;
  unexecute(): void;
}

// Device classes
class Light {
  public on() {
    console.log("Light is ON");
  }
  public off() {
    console.log("Light is OFF");
  }
}

class Fan {
  public on() {
    console.log("Fan is ON");
  }
  public off() {
    console.log("Fan is OFF");
  }
}

// Command for Light ON
class LightOnCommand implements ICommand {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute() {
    this.light.on();
  }
  unexecute() {
    this.light.off();
  }
}

// Command for Light OFF
class LightOffCommand implements ICommand {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute() {
    this.light.off();
  }
  unexecute() {
    this.light.on();
  }
}

// Command for Fan ON
class FanOnCommand implements ICommand {
  private fan: Fan;
  constructor(fan: Fan) {
    this.fan = fan;
  }
  execute() {
    this.fan.on();
  }
  unexecute() {
    this.fan.off();
  }
}

// Command for Fan OFF
class FanOffCommand implements ICommand {
  private fan: Fan;
  constructor(fan: Fan) {
    this.fan = fan;
  }
  execute() {
    this.fan.off();
  }
  unexecute() {
    this.fan.on();
  }
}

// Invoker
class RemoteControl {
  private onCommand: ICommand;
  private offCommand: ICommand;

  constructor(onCommand: ICommand, offCommand: ICommand) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
  }

  pressOn() {
    this.onCommand.execute();
  }

  pressOff() {
    this.offCommand.execute();
  }

  pressUndo() {
    this.onCommand.unexecute(); // Unexecute the last action (on/off)
  }
}

// Example usage
const light = new Light();
const fan = new Fan();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const fanOn = new FanOnCommand(fan);
const fanOff = new FanOffCommand(fan);

const lightRemote = new RemoteControl(lightOn, lightOff);
const fanRemote = new RemoteControl(fanOn, fanOff);

lightRemote.pressOn();  // Light is ON
fanRemote.pressOn();    // Fan is ON
lightRemote.pressUndo();  // Light is OFF
fanRemote.pressUndo();    // Fan is OFF
