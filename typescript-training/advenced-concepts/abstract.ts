abstract class VideoGame {
  protected name: string;
  protected genre: string;
  protected platform: string;

  constructor(name: string, genre: string, platform: string) {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
  }

  abstract play(): void;

  displayInfo() {
    console.log(this.name, this.genre, this.platform);
  }
}

class ArcadeGame extends VideoGame {
  constructor(name: string, platform: string) {
    super(name, 'Arcade', platform);
  }

  play(): void {
    console.log('Jump jump');
  }
}

class ShooterGame extends VideoGame {
  constructor(name: string, platform: string) {
    super(name, 'Shooter', platform);
  }
  play(): void {
    console.log('Boom Boom');
  }
}

const mario = new ArcadeGame('Mario', 'Gameboy');
const callOfDuty = new ShooterGame('Call of duty', 'PC');

mario.play();
mario.displayInfo();
