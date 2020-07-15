class Roster {
  constructor() {
    this.idList = [];
  }

  addOne(id) {
    if (this.idList.includes(id)) {
      return false
    } else {
      this.idList.push(id)
      return true
    }
  }
}


class Student extends Roster {
  constructor(id, name, idList) {
    super(idList)
    this.id = id
    this.name = name
  }

  isPerson(someOne) {
    return someOne.id === this.id
  }
}

// function Student (id, name) {
//   this.id = id
//   this.name = name
// }

// Student.prototype.isPerson = function (someOne) {
//   return someOne.id === this.id
// }


let ahui1 = new Student(1, 'ahui')
let ahui2 = new Student(1, 'ahui2')
let ahui3 = new Student(3, 'ahui')

console.log(ahui1.idList);


console.log(ahui1.isPerson(ahui2)) // true
console.log(ahui1.isPerson(ahui3)) // false
 