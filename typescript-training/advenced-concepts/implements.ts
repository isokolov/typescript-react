interface Printable {
  print: () => void;
}

interface Exportable {
  export: () => void;
}

class Book implements Printable {
  private _title: string;
  private _author: string;

  constructor(title: string, author: string) {
    this._title = title;
    this._author = author;
  }
  print() {
    console.log('Title ' + this._title, ' Author ', this._author);
  }
}

class Magazine implements Printable {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  print() {
    console.log('Name ' + this._name);
  }
}

class PDF implements Printable, Exportable {
  private _name: string;
  private size: number;
  constructor(name: string) {
    this._name = name;
    this.size = 12;
  }

  print() {
    console.log('Name ' + this._name, ' Size ', this.size);
  }

  export() {
    console.log('exporting....');
  }
}

const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
const magazine = new Magazine('Time Magazine');
book.print();
