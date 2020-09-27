class GrandFather {
  constructor(surname) {
    this.surname = surname;
  }
}

class Father extends GrandFather {
  constructor(surname, profession = "Professor") {
    super(surname);

    this.profession = profession;
  }
}

class Son extends Father {
  constructor() {
    super("Silva");
  }
}
const son = new Son();
if (son instanceof Son) {
  console.log(son);
}
