class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  set radius(radius: number) {
    if (radius > 0) {
      this._radius = radius;
    } else {
      throw new Error('Cannot set a negative radius');
    }
  }

  get radius(): number {
    return this._radius;
  }
}

const circle = new Circle(5);

circle.radius = 12;

console.log(circle.radius);
