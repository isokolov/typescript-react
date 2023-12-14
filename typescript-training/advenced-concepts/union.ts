// Unions

let value: number | string | boolean | [];

value = [];

interface Square {
  kind: 'square';
  size: number;
}
interface Circle {
  kind: 'circle';
  radius: number;
}

let myShape: Square | Circle;

myShape = {
  kind: 'square',
  size: 2,
};

function displayShape(shape: Square | Circle): void {
  console.log('Kind ', shape.kind);
  if (shape.kind === 'circle') {
    console.log('Radius ', shape.radius);
  } else {
    console.log('Size ', shape.size);
  }
}

displayShape(myShape);

let array: (number | string | (Square | Circle))[] = [myShape, 'hi', 2];
