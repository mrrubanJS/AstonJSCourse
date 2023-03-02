function Company(name, salary) {
  Object.defineProperty(this, 'name', {
    get() {
      return name;
    },
  });
  Object.defineProperty(this, 'salary', {
    get() {
      return salary;
    },
  });
  this.income = function (value) {
    Company.store.money += value - this.salary;
    Company.store.staffList[findIndex(this.name)].income += value - this.salary;
  };
  this.spend = function (value) {
    Company.store.money -= value;
    Company.store.staffList[findIndex(this.name)].income -= value;
  };

  Company.addStaff({ name: this.name, income: 0 });
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.addStaff = function (staff) {
  this.store.staffList.push(staff);
  this.store.countStaff += 1;
};
Company.getLeaders = function () {
  let leadersArr = [{ name: undefined, income: -Infinity }];
  for (let i = 0; i < Company.store.staffList.length; i++) {
    if (leadersArr[0].income < Company.store.staffList[i].income) {
      leadersArr = [];
      leadersArr.push(Company.store.staffList[i]);
    } else if (leadersArr[0].income === Company.store.staffList[i].income) {
      leadersArr.push(Company.store.staffList[i]);
    }
  }
  return leadersArr;
};

function findIndex(name) {
  for (let i = 0; i < Company.store.staffList.length; i++) {
    if (Company.store.staffList[i].name === name) {
      return i;
    }
  }
}