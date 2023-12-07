var _a, _b;
var persons = [
    {
        name: 'Alice',
        job: 'Font-end Dev',
        age: 28,
        isHappy: true,
        friendList: [{ age: 30, job: 'Astronaut', name: 'Tobby' }],
        sayHi: function (color) {
            console.log('Hi i am Alice ! my favorite color is ', color);
        },
    },
    { name: 'Bob', job: 'Back-end dev', age: 44 },
    { name: 'Codiku', job: 'Full Stack dev', age: 30 },
];
(_b = (_a = persons[0]).sayHi) === null || _b === void 0 ? void 0 : _b.call(_a, 'red');
var formatedList = persons.map(function (person) {
    return "<li>Name : ".concat(person.name, " - Job : ").concat(person.job, " - Age : ").concat(person.age, "</li>");
});
var liListString = formatedList.join('');
document.getElementById('app').innerHTML = "<ul> ".concat(liListString, " </ul>");
