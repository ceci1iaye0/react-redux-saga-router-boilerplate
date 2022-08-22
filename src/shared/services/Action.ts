export default class Action {
  ACTION: string;

  constructor(type?: string) {
    if (!type) {
      throw new Error("Type parameter is mandatory");
    }
    this.ACTION = `${type}`;
  }

  action(payload?: any) {
    return { type: this.ACTION, payload };
  }
}
