interface Person {
  name: string;
  job: string;
  age: number;
  isHappy?: boolean;
  friendList?: Person[];
  sayHi?: (color: string) => void;
}

const persons: Person[] = [
  {
    name: 'Alice',
    job: 'Font-end Dev',
    age: 28,
    isHappy: true,
    friendList: [{ age: 30, job: 'Astronaut', name: 'Tobby' }],
    sayHi: (color: string) => {
      console.log('Hi i am Alice ! my favorite color is ', color);
    },
  },
  { name: 'Bob', job: 'Back-end dev', age: 44 },
  { name: 'Codiku', job: 'Full Stack dev', age: 30 },
];

persons[0].sayHi?.('red');

const formatedList: string[] = persons.map((person: Person): string => {
  return `<li>Name : ${person.name} - Job : ${person.job} - Age : ${person.age}</li>`;
});

const liListString: string = formatedList.join('');

document.getElementById('app')!.innerHTML = `<ul> ${liListString} </ul>`;
