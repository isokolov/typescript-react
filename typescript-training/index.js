var persons = [
    {
        name: 'Alice',
        job: 'Font-end Dev',
        age: 28,
    },
    { name: 'Bob', job: 'Back-end dev', age: 44 },
    { name: 'Codiku', job: 'Full Stack dev', age: 30 },
];
var formatedList = persons.map(function (person) {
    return "<li>Name : ".concat(person.name, " - Job : ").concat(person.job, " - Age : ").concat(person.age, "</li>");
});
var liListString = formatedList.join('');
document.getElementById('app').innerHTML = "<ul> ".concat(liListString, " </ul>");
