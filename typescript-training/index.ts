//objects

function printCoords(coords: { lat: string; lng: string }) {
  console.log('Lat', coords.lat);
  console.log('Lng', coords.lng);
}

function getDistanceBetween(
  coords1: { lat: string; lng: string },
  coords2: { lat: string; lng: string }
) {
  // return the distance betwen coords1 and coords2
}

const user = { firstName: 'Codiku', lastName: 'TheDev' };

function displayUser(user: { firstName: string; lastName?: string }) {
  console.log('First name', user.firstName.toLocaleLowerCase());
  if (user.lastName) {
    console.log('Last name', user.lastName.toLocaleLowerCase());
  }
}

displayUser(user);
