export default class AsyncAction {
  REQUEST: string;

  FAILURE: string;

  SUCCESS: string;

  constructor(type?: string) {
    if (!type) {
      throw new Error("Type parameter is mandatory");
    }
    this.REQUEST = `${type}_REQUEST`;
    this.SUCCESS = `${type}_SUCCESS`;
    this.FAILURE = `${type}_FAILURE`;
  }

  request(payload?: any) {
    if (payload) return { type: this.REQUEST, payload };
    return { type: this.REQUEST };
  }

  success(payload?: any) {
    if (payload) return { type: this.SUCCESS, payload };
    return { type: this.SUCCESS };
  }

  failure(payload?: any) {
    if (payload) return { type: this.FAILURE, payload };
    return { type: this.FAILURE };
  }
}
