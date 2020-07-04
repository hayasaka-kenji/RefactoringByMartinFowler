// 人
export class Person {
  // 第二引数で部署を追加する。
  constructor(name, aDepartment) {
    this._name = name;
    this._department = aDepartment;
  }
  get name() { return this._name; }
  get department() { return this._department; }
  set department(arg) { this._department = arg; }
  // 追加された部署のゲッターを定義。
  get manager() { return this._department.manager; }
  get chargeCode() { return this._department.chargeCode; }
}

// 部署
export class Department {
  constructor(manager, code) {
    this._manager = manager;
    this._chargeCode = code;
  }
  get manager() { return this._manager; }
  set manager(arg) { this._manager = arg; }
  get chargeCode() { return this._chargeCode; }
  set chargeCode(arg) { this._chargeCode = arg; }
}