//objects
function printCoords(coords) {
    console.log('Lat', coords.lat);
    console.log('Lng', coords.lng);
}
function getDistanceBetween(coords1, coords2) {
    // return the distance betwen coords1 and coords2
}
var user = { firstName: 'Codiku', lastName: 'TheDev' };
function displayUser(user) {
    console.log('First name', user.firstName.toLocaleLowerCase());
    if (user.lastName) {
        console.log('Last name', user.lastName.toLocaleLowerCase());
    }
}
displayUser(user);
