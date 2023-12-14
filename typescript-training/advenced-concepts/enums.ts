enum Direction {
  North = 'North',
  South = 'South',
  Est = 'Est',
  West = 'West',
}

const direction: Direction = Direction.West;

function move(direction: Direction) {
  console.log('Moving ', direction);
}

move(direction);
