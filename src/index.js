// var a = 1
// function foo(a) {
//     a = 2
// }
// foo(a)
// console.log(a) // 1


// var a = 1;
// function foo(a, b) {
//     console.log(a);  // 1
//     a = 2;
//     arguments[0] = 3;
//     var a;
//     console.log(a, this.a, b)  // 3 1 undefined;   严格模式下会输出 3 undefined undefined   严格模式下， this是取不到定义的全局变量的
// }
// foo(a)

// var a = 1
// function foo() {
//     console.log(a) // 1
// }
// function change() {
//     var a = 2
//     foo()
// }
// change()

// var one = {
//     name: 1,
//     display: function () {
//         console.log(this.name)
//     }
// }
// var two = {
//     name: 2,
//     display: one.display
// }
// two.display() //2


// var num1 = 1,num2 = 2;
// function foo() {
//     if (num1) {
//         var num1 = 11
//     }
//     console.log('num1: ', num1)
//     if (!num2) {
//         var num2 = 22
//     }
//     console.log('num2: ', num2)
// }
// foo()

// function foo(n, o) {
//     console.log(o)
//     return {
//         fun: function(m) {
//             return foo(m, n)
//         }
//     }
// }
// var a = foo(0)
// a.fun(1)
// a.fun(2)
// a.fun(3)

// var b = foo(0).fun(1).fun(2).fun(3)

// function Foo() {
//     getName = function () {
//         console.log(1)
//     }
//     return this
// }
// Foo.getName = function () {
//     console.log(2)
// }
// Foo.prototype.getName = function () {
//     console.log(3);
// }
// var getName = function () {
//     console.log(4);
// }
// function getName () {
//     console.log(5);
// }
// Foo.getName(); // 2
// getName(); // 4
// Foo().getName(); // 1
// getName(); // 1
// new Foo.getName(); // 2
// new Foo().getName(); // 3
// new new Foo().getName(); // 3

// var foo = test()
// var a = 'window_a'
// function test() {
//     console.log('a: ', a)
//     this.a = 'function_a'
//     var self = this
//     var fa = self.a
//     return function () {
//         console.log(this.a + '|' + self.a + '|' + fa);
//     }
// }
// foo()


// class Container {
//     private constructorPool;
  
//     constructor() {
//       this.constructorPool = new Map();
//     }
  
//     register(name, constructor) {
//       this.constructorPool.set(name, constructor);
//     }
  
//     get(name) {
//       const target = this.constructorPool.get(name);
//       return new target();
//     }
//   }
  
//   const container = new Container();
  
//   console.log(container);


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const temp = {
// 	d(source) {
//     	console.log(source)
//       	return source.b + source.c
//     }
// }

// const returnedTarget = Object.assign({}, temp, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }


// const subsetTo = (target, arr) => {
// 	return arr.every(item => target.includes(item))
// }

// console.log(subsetTo([1, 2, 3, 4], [1, 2, 3, 4]));

// result[i] = function (num) {
// 	return function (params) {
// 		return num
// 	}()
// }(i)

// function createFunction() {
// 	var result = [];

// 	for (var i = 0; i < 10; i++) {
// 		result[i] = function () {
// 			return i
// 		}
// 	}

// 	return result
// }

// // console.log(createFunction());
// createFunction().map(i => {
// 	console.log(i());
// })


// var arr = [];
// for (var i = 0; i < 3; i++) {
//     arr[i] = function() {
//       return i;
//     };
// }

// console.log(arr[0]);

// console.log('i = ', i);

// i = 10

// console.log(arr[0]()); // 0
// console.log(arr[1]()); // 1
// console.log(arr[2]()); // 2



// console.log(temp);
// var temp = 123



// [1, 3, 5, 7, 9, 11, 13]    20
// let arr = [];
// for(let i=0;i<20;i++) {
// 	arr.push(2*i+1)
// }
// console.log(arr);



// [1, 1, 2, 3, 5, 8, 13, 21,  ,,,,]   20
// let arr=[1,1];
// for(let i=1;i<20;i++){
// 	arr.push(arr[i-2]+arr[i-1])
// }
// console.log(arr);

function printArr(20) {

	
}