class Singleton {
  private constructor() {}
  static instance: Singleton;
  public static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

// In this pattern you can't create more than one instance you have to use the same instance everywhere 