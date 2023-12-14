interface Hero {
  name: string;
  superPower: string;
}
const h1: Hero = {
  name: 'The flash',
  superPower: 'Run super fast',
};

const h2: Hero = {
  name: 'The Hulk',
  superPower: 'Super strong',
};

const h3: Hero = {
  name: 'Batman',
  superPower: 'Is rich',
};

const h4: Hero = {
  name: 'Superman',
  superPower: 'Basically a God',
};

let heroes = [h1, h2, h3, h4];

function removeLastElement<MyType>(array: MyType[]): MyType[] {
  return array.slice(0, array.length - 1);
}

const reversedHeroes = removeLastElement(heroes);

console.log('reversedHeroes', reversedHeroes);

const reversedNumbers = removeLastElement<number>([1, 2, 3]);

console.log('reversedNumbers', reversedNumbers);
