interface IRequest {
  request: ()=>void;
}

class Adapter implements IRequest {
  adaptee: Adaptee;
  constructor(private _adaptee: Adaptee) {
    this.adaptee = this._adaptee;
  }

  public request() {
    /// {...} process the request and call the adaptee's special request  
    this.adaptee.special_request();
  }
  
}



class Adaptee {
  special_request() {
    /// {...}
  }
}

/**
 * example would be: I am visting UK and want to use another type of charger for my electric machine. This is to process any kind of charger request and call the UK's charger port.
 *
 * 
 */