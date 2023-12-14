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

const heroes = [h1, h2, h3, h4];

class SmartArray<T> {
  private array: T[] = [];
  constructor(array: T[]) {
    this.array = array;
  }
  get values() {
    return this.array;
  }

  shuffle(): T[] {
    return this.array.sort(() => Math.random() - 0.5);
  }

  push(element: T): void {
    this.array.push(element);
  }

  removeLast(): T[] {
    this.array.slice(0, this.array.length - 1);
    return this.array;
  }
}

const heroSmartArray = new SmartArray<Hero>(heroes);

const shuffled = heroSmartArray.shuffle();

console.log(shuffled);

heroSmartArray.push({
  name: 'WonderWoman',
  superPower: 'fly',
});
