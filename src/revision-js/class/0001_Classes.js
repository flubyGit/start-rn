class Launch {
  constructor(name = "Generico", value = 0) {
    this.name = name;
    this.value = value;
  }
}

class FinanceCycle {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.launch = [];
  }

  addLaunch(...launch) {
    launch.forEach((l) => this.launch.push(l));
  }
  summary() {
    let value = 0;
    this.launch.forEach((l) => {
      value += l.value;
    });

    return value;
  }
}

const salary = new Launch("Salário", 45000);
const luzAccount = new Launch("Luz", -220);

const account = new FinanceCycle(6, 2018);
account.addLaunch(salary, luzAccount);

console.log(account.summary());
