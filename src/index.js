// 实现一个学生类，id,name2个属性，做到id相同表示同一个人；名字相同不一定是同一个人，你会实现哪些方法。
class Student {
  constructor(id, name) {
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

console.log(ahui1.isPerson(ahui2)) // true
console.log(ahui1.isPerson(ahui3)) // false
