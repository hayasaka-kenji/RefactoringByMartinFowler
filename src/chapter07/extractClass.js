export class Person {
  constructor(name, areaCode, number) {
    this._name = name;
    this._officeAreaCode = areaCode;
    this._officeNumber = number;
    this._telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() { return this._name; }

  set name(arg) { this._name = arg; }

  get telephoneNumber() { 
    return this._telephoneNumber.telephoneNumber;
  }

  get officeAreaCode() { 
    return this._telephoneNumber.officeAreaCode; 
  }

  set officeAreaCode(arg) { 
    this._telephoneNumber._officeAreaCode = arg;
  }

  get officeNumber() { return this._telephoneNumber._officeNumber; }

  set officeNumber(arg) { this._telephoneNumber._officeNumber = arg; }
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._officeAreaCode = areaCode;
    this._officeNumber = number;
  }

  get officeAreaCode() { return this._officeAreaCode; }
  set officeAreaCode(arg) { this._officeAreaCode = arg; }
  get officeNumber() { return this._officeNumber; }
  set officeNumber(arg) { this._officeNumber = arg; }
  get telephoneNumber() { 
    return `(${this._officeAreaCode}) ${this._officeNumber}`;
  }
}