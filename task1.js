class Car {
  constructor(fuel, lowFuelConsumption, durability, speed, name) {
    this.fuel = fuel;
    this.lowFuelConsumption = lowFuelConsumption;
    this.durability = durability;
    this.speed = speed;
    this.name = name || 'Unknown Car';
  }

  get totalFuel() {
    return 5 + this.fuel;
  }
  get powerReserve() {
    return this.totalFuel * 200 + this.totalFuel * 0.1 * 200 * this.lowFuelConsumption;
  }
  get totalSpeed() {
    return 10 + this.speed * 0.05 * 10;
  }
  get totalDurability() {
    return 100 + this.durability * 0.1 * 100;
  }

  static create(type, name) {
    let newCar;
    switch (type) {
      case 'civilian':
        newCar = new Civilian(name);
        break;
      case 'sport':
        newCar = new Sport(name);
        break;
      case 'military':
        newCar = new Military(name);
        break;
    }
    return newCar;
  }

  addPoints(pointsArr) {
    if (pointsArr.length > 2) {
      throw new Error('Превышен лимит распределяемых очков');
    }
    for (let i = 0; i < points.length; i++) {
      this[pointsArr[i]]++;
    }
  }
}

class Civilian extends Car {
  constructor(name) {
    super();
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 2;
    this.speed = 4;
    this.name = name || 'Civilian Car';
  }
}
class Sport extends Car {
  constructor(name) {
    super();
    this.fuel = 2;
    this.lowFuelConsumption = 1;
    this.durability = 1;
    this.speed = 6;
    this.name = name || 'Sport Car';
  }
}
class Military extends Car {
  constructor(name) {
    super();
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 4;
    this.speed = 2;
    this.name = name || 'Military Car';
  }
}

function createOpponents(numOfOpp) {
  let typesOfOpp = ['civilian', 'sport', 'military'];
  let typesOfPoints = ['fuel', 'lowFuelConsumption', 'durability', 'speed'];
  let oppArray = [];
  for (let i = 0; i < numOfOpp; i++) {
    let randomInd = randomInt(typesOfOpp.length);
    let newOpp = Car.create(typesOfOpp[randomInd]);
    newOpp.addPoints([typesOfPoints[randomInt(typesOfPoints.length)], typesOfPoints[randomInt(typesOfPoints.length)]]);
    oppArray.push(newOpp);
  }
  return oppArray;
}
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

const findMaxStat = (arr, stat) => {
  const max = arr.reduce((acc, item) => {
    if (item[stat] >= acc) {
      acc = item[stat];
    }
    return acc;
  }, 0);

  return max;
};

function compare(carsArr) {
  let compareResult = [];
  carsArr.forEach((element) => {
    let { powerReserve, totalDurability, totalSpeed, name } = element;
    compareResult.push({ powerReserve, totalDurability, totalSpeed, name });
  });

  compareResult.map((element) => {
    Object.keys(element).forEach((key) => {
      const maxValue = findMaxStat(carsArr, key);
      const currentValue = element[key];

      if (typeof element[key] === 'number') {
        element[key] = Math.floor((currentValue / maxValue) * 100) + '%';
      }
    });
  });

  return compareResult;
}