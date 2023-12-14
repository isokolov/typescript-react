abstract class Spell {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  abstract cast(): void;
}

enum FireSpellName {
  FireBolt = 'Fire Bolt',
  FireWall = 'Fire Wall',
  BigBang = 'Big Bang',
}

enum FrostSpellName {
  FrostBolt = 'Frost Bolt',
  Blizzard = 'Blizzard',
}

class FireSpell extends Spell {
  readonly burningDamage = 20;
  constructor(name: FireSpellName) {
    super(name);
  }
  cast() {
    console.log(
      this.name,
      ` - Boom you are burning the enemy ! It took ${this.burningDamage} damages`
    );
  }
}

class FrostSpell extends Spell {
  readonly slowingRate = 0.5;

  constructor(name: FrostSpellName) {
    super(name);
  }

  cast() {
    console.log(
      this.name,
      ` - Brrr you are freezing the enemy,  it's slowed by ${this.slowingRate}`
    );
  }
}

type SpellName<S> = S extends FireSpell ? FireSpellName : FrostSpellName;

class Wizard<S extends Spell> {
  private spellBook: S[] = [];

  constructor(spellBook: S[]) {
    this.spellBook = spellBook;
  }

  castAllAtOnce() {
    this.spellBook.forEach((spell: S) => {
      spell.cast();
    });
  }

  castFromSpellBook(name: SpellName<S>) {
    const spell = this.spellBook.find((spell) => spell.name == name);
    if (spell) {
      spell.cast();
    } else {
      throw new Error("You don't have this spell in your spell book !");
    }
  }
}

const frostSpells: FrostSpell[] = [
  new FrostSpell(FrostSpellName.FrostBolt),
  new FrostSpell(FrostSpellName.Blizzard),
];

const frostWizard = new Wizard(frostSpells);

frostWizard.castFromSpellBook(FrostSpellName.FrostBolt);
