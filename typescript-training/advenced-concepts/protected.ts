class User {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    this._name = n;
  }
}

class Admin extends User {
  set name(n: string) {
    this._name = n;
  }

  get name(): string {
    return this._name;
  }
}
const user = new User('Codiku');
console.log(user.name);
user.name = 'azeaze';
console.log(user.name);
const admin = new Admin('Robin');
// admin.name = 'azeaze';
console.log(admin.name);
