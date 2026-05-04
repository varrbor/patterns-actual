var a = 5;
function f(){
    if(a){
        console.log(a);
        var a = 10;
    }
}
f()
//hosting
a=7
console.log(a)
var a ;

console.log(b)
var b=8;


// //зробити коунтер
// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter;}
// })();
// add() //1
// add()//2

/* const obj = {
a:12,
say : function(){
setTimeout(function(){
console.log(this.a)
}, 1000)
}
}
obj.say() */
/* const obj = {
a:12,
say : function(){
setTimeout(()=>{
console.log(this.a)
}, 1000)
}
}
console.log(obj.say()) */

// const obj = {
//     a:12,
//     say : function(){
//         function helper(){
//             console.log(this.a)
//         }
//         setTimeout(helper.bind(this), 1000)
//     }
// }
// obj.say()

// //написати фунцію для числа яка бере це число і додає 3
// const x = 3;
// Number.prototype.test = function(){
//     return this + 3
// }

// console.log(x.test())

// var a = 5;
// function f() {
//   if (a) {
//     console.log(a);
//     var a = 10;
//   }
// }

// f();

// hosting;
// a = 7;
// console.log(a);
// let a;

// console.log(b);
// var b = 8;

// зробити коунтер
// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();
// console.log(add()); //1
// console.log(add()); //2

// const obj = {
//   a: 12,
//   say: function () {
//     setTimeout(function () {
//       console.log(this.a);
//     }, 1000);
//   },
// };
// obj.say();

// const obj = {
// a:12,
// say : function(){
// setTimeout(()=>{
// console.log(this.a)
// }, 1000)
// }
// }
// console.log(obj.say())

// const obj = {
//   a: 12,
//   say: function () {
//     function helper() {
//       console.log(this.a);
//     }
//     setTimeout(helper.bind(this), 1000);
//   },
// };
// obj.say();

// const obj = {
//   a: 12,
//   say: function () {
//     function innerFunction() {
//       console.log(this.a);
//     }
//     innerFunction(); // Call the inner function
//   },
// };

// obj.say();

// //написати фунцію для числа яка бере це число і додає 3
// const x = 8;
// Number.prototype.test = function () {
//   return this + 3;
// };

// console.log(x.test());

// const obj = { name: "mmmm" };

// const obj2 = {
//   name: "nnnnn",
//   f() {
//     return this.name;
//   },
// };

// console.log(obj2.f.call(obj));

//sorting
// const words = [
//   "orange",
//   "banana",
//   "grapefruit",
//   "banana",
//   "grapefruit",
//   "banana",
// ];

// const func = (arr) => {
//   const temp = arr.reduce((akk, current) => {
//     akk[current] = (akk[current] || 0) + 1;
//     return akk;
//   }, {});

//   const keys = Object.keys(temp);

//   return keys.sort((a, b) => temp[b] - temp[a]);
// };

// console.log(func(words));

//curring
// const a = function(a,b){
//   return a+b
// }

// const b = (a,b)=>a*b

// function calculate(sum){
//   return function(a){
//     return function(b){
//       return sum(a,b)
//     }
//   }
// }

// console.log(calculate(b)(2)(3))

// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(777)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end');

//async await
// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await response.json();
//   return data;
// }
// getData().then(data => {
//   console.log(data);
// });

//Pass function as an argument to another function

//array of names to be used in the function

//Hi Order Function
// const names = ["John", "Tina", "Kale", "Max"];

// function usFunction(arr, fn) {
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i]);
//   }
// }

// //Function that is being used as a parameter
// function argFn(name) {
//   console.log("Hello " + name);
// }

// //calling useFunction() with argFn() as a parameter
// usFunction(names, argFn);

// function factorial(x)
// {
// console.log(x)
//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);

// }
// console.log(factorial(5));

// function check(str){
// const regexp = /[A-Z]/gm

// if(regexp.test(str)) {
//   return true;
// } else return false
// }
// console.log(check('test'))
//VERY IMPORTANT
// window.x = 10;

// console.log(window.x);

// const obj = {
//   x: 15,
//   func: () => console.log(this.x),
//   func2: function () {
//     console.log(this.x);
//   },
// };

// const func = () => console.log(this.x);

// func(); // => undefined
// func.call(obj) // => undefined
// obj.func.call(obj) // => undefined
// // But the following will work as expected
// obj.func2.call(obj) // => 15, accessing the

//function call

// const picachu = {
//   name: 'pica',
//   surname: 'chu',
//   getPokeName: function(){
//     return `${this.name} ${this.surname}`
//   }

// }

// var pokemonName = function(snack, hobby) {
//   console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(picachu, 'candy', 'sport')

//----------------------
// (function(a) {
//   arguments[0] = 10;
//   return a;
// })(5);

//----------------------
// (function(a) {
//   arguments[0] = 10;
//   console.log(a) ;
// })(5);

//----------------------
// function Car(color) {
//   this.color = color;
// }
// var lada = new Car("Black");
// Car.prototype.currentGear = 1;
// console.log(++lada.currentGear);
// console.log(Car.prototype.currentGear);

//----------------------
// var User = function() {};

// User.prototype.attributes = {
//   isAdmin: false
// };

// var admin = new User("Sam"),
//   guest = new User("Bob");

// admin.attributes.isAdmin = true;

// console.log(admin.attributes.isAdmin);
// console.log(guest.attributes.isAdmin);

//-----------------------
// var obj = {
//   a: 1
// };

// (function(obj) {
//   obj = {
//     a: 2
//   };
// })(obj);

// console.log(obj.a);

//-----------------------
// var a = {};

// (function b ( a ) {
//     a.a = 10;
//     a = null;
// })( a );

// console.log(a);

//-----------------------

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

//-----------------------

// var func = [];
// for (var i = 0; i < 5; i++) {
//   func[i] = function() {
//     console.log(i);
//   };
// }
// func[3]();

//-----------------------

// (function() {
//   var a = b = 5;
// })();
// console.log(b);

//-----------------------

// (function (x) {
//   return (function (y) {
//     console.log(x);
//     console.log(y);
//   })(2);
// })(1);

//-----------------------
// Number.prototype.add = function (a) {
//   return this + a;
// };
// Number.prototype.multiply = function (a) {
//   return this * a;
// };

// console.log((3).add(8).multiply(2));

//-----------------------
// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();

//-----------------------
// (function() {
//   console.log(1);
//   setTimeout(() => console.log(2), 1000);
//   setTimeout(() => console.log(3), 0);
//   Promise.resolve(true).then(() => console.log(4));
//   console.log(5);
// })();

//-----------------------
// try {
//   setTimeout(function () {
//     throw new Error();
//   }, 1000);
// } catch (e) {
//   alert(e);
// }
//-----------------------
// var a = 1;
// function b() {
//   a = 10;
//   return;
//   // function a() {
//   // }
// }
// b();
// console.log(a);
//-----------------------
// Promise.resolve(10)
//   .then((e) => console.log(e)) // ??
//   .then((e) => console.log(3)) // ??
//   .then(console.log) // ??
//   .then((e) => {
//     if (!e) {
//       throw "Error caught";
//     }
//   })
//   .catch((e) => {
//     console.log(e); // ??
//     return new Error("New error");
//   })
//   .then((e) => {
//     console.log(e.message); // ??
//   })
//   .catch((e) => {
//     console.log(e.message); // ??
//   });
//-----------------------
//Реалізуйте функцію reduce за допомогою рекурсії.
//https://www.freecodecamp.org/news/implement-array-map-with-recursion-35976d0325b2/

// const arr = [1, 2, 3];
// console.log(arr.reduce((acc, initialVal) => acc + initialVal, 2));

// const double = (x) => x * 2;

// var map = (fn, arr) => {
//   const mappedArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let mapped = fn(arr[i]);

//     mappedArr.push(mapped);
//   }

//   return mappedArr;
// };

// const map = (fn, [head, ...tail]) => {
//   if (head === undefined) {
//     return [];
//   }

//   return [fn(head), ...map(fn, tail)];
// };

// console.log(map(double, [1, 2, 3]));

// const createCounter = function(init) {
//     let count = init;
//     return {
//         increment: ()=> ++count,

//         reset: ()=>count,
//     }
// };

//  const counter = createCounter(9)
//  console.log(counter.increment()); // 6
//  console.log(counter.reset()); // 5

//  counter.decrement(); // 4
// if (true) {
//   console.log(job);
//   const job = "55555";
// }
//-----------------------
// var str = "abc";
// console.log(str[0]);
// str[0] = "x";
// console.log(str[0]);
//-----------------------
// async function asyncTask() {
//   console.log("A");
//   const p = new Promise((resolve) => {
//     console.log("B");

//     setTimeout(() => {
//       resolve("C");
//     }, 0);
//     Promise.resolve()
//       .then(() => {
//         console.log("D");
//       })
//       .then((value) => {
//         console.log(value);
//       });
//   });
//   console.log("E");
// }

// asyncTask();

//-----------------------
//revers number
// const reversedNum = (num) => num.toString().split("").reverse().join("");
// console.log(reversedNum(1234));
//----------------------- що виведе
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perymeter: () => {
//     return 2 * Math.PI * this.radius;
//   },
// };

// console.log(shape.diameter());
// console.log(shape.perymeter());

// ----------------------- що виведе
// function Person(name, title) {
//   this.name = name;
//   this.title = title;
// }

// const member = new Person("example1", "example2");
// Person.getFullName = function () {
//   return `${this.name} ${this.title}`;
// };
// console.log(person.getFullName());

// console.log([] == []); //false
// console.log([] === []); //false
// console.log({} == {}); //false
// console.log({} === {}); //false
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// console.log(true || false); //tue
// console.log(1 || false); //1
// console.log(0 || false); //false
// console.log("string" || false); //string
// console.log(0 || false || 9 || "string" || 1); //9
// console.log(false || (0 && 1)); //0
// console.log(0 || false); //false
// console.log(true || (1 && 6)); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(1 && 0 && 5); //0
// console.log({} + [] + {} + [1]); //[object Object][object Object]1

// console.log(!!"false" == !!"true"); //true
// console.log(["x"] == "x"); //true

// ----------------------- що виведе
// const obj = {
//   name: "kolin",
//   props: {
//     name: "rox",
//     getName: function () {
//       return this.name;
//     },
//     arrow: () => this.name,
//     arrowInsideFuncttion: function () {
//       return () => console.log(this.name);
//     },
//   },
// };

// // console.log(obj.props.getName());
// const test = obj.props.getName;

// console.log(test());
// console.log(test.call(obj.props));
// console.log(test.apply(obj));
// console.log(test.bind(obj).bind(obj.props)());
// console.log(obj.props.arrow());
// console.log(test.apply(obj));
// obj.props.arrowInsideFuncttion()();

// ----------------------- що виведе
// [1, 2, 3].map(console.log);

// const a = [1, 2, 3].map(console.log);
// console.log(88, a);

// ----------------------- знайти суму масива рекурсійно
// function sum(arr) {
//   let total = 0;
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       total += sum(item);
//     } else {
//       total += item;
//     }
//   });

//   return total;
// }

// console.log(sum([1, [2, 3, [4, 5]]]));

// ----------------------- що виведе

// console.log(1);
// let a = new Promise((resolve, reject) => {
//   console.log(2);
//   reject();
// });

// setTimeout(() => {
//   console.log(3);
// });

// a.then(() => console.log(4))
//   .catch(() => console.log(5))
//   .catch(() => console.log(6))
//   .then(() => console.log(7));

// console.log(8);
// //-----------------
// Promise.reject("a")
//   .catch((p) => {
//     throw p + "b";
//   })
//   .catch((p) => p + "c")
//   .then((p) => p + "d")
//   .then((p) => console.log(p));
// ----------------------- що виведе

// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => { throw new Error("Failure") }, 1000);
// })

// prom1.catch((e) => { console.log(e) })
// ----------------------- що виведе
// let x = 10;
// let y = 10;
// let prom1 = new Promise((resolve, reject) => {
//     if (x == y) {
//         resolve("Equal Values")
//     } else {
//         reject("Unequal Values")
//     }
// })

// prom1.then((e) => { console.log(e) });
// prom1.catch((e) => { console.log(e) })
// ----------------------- що виведе
// let firstObj = { name: "Hello" };

// let secondObj = firstObj;

// firstObj = { name: "Bye" };

// console.log(secondObj.name);
// ----------------------- що виведе
// Promise.resolve(10)
//   .then((res) => res + 1)
//   //   .then("ffff")
//   .catch((e) => {
//     console.log(e); // ??
//     return new Error("New error");
//   });

//   .then((res) => res + 1);

//   .then((e) => console.log(e)) // ??
//   .then((e) => Promise.resolve(e))
//   .then(console.log) // ??
//   .then((e) => {
//     if (!e) {
//       throw "Error caught";
//     }
//   })
//   .catch((e) => {
//     console.log(e); // ??
//     return new Error("New error");
//   })
//   .then((e) => {
//     console.log(e.message); // ??
//   })
//   .catch((e) => {
//     console.log(e.message); // ??
//   });

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

//   return { entities: data };
// };
//------------------------------ з масива зробити обєкт
// console.log(normalize(input));

/* {
  entities: {
    1: {
      id: 1,
      name: 'Bob'
    },
    7: {
      id: 7,
      name: 'Carl'
    }
  },
  byId: [1, 7],
} */
// const input = [
//   { id: 1, name: "Bob" },
//   { id: 7, name: "Carl" },
// ];

// const output = input.reduce(
//   (acc, item) => {
//     acc.entities[item.id] = item;
//     acc.byId.push(item.id);
//     return acc;
//   },
//   { entities: {}, byId: [] }
// );

// console.log(output);

//--------поверне 3
// const x = () => {
//   return 1, 3;
// };

// console.log(x());

// const promise = new Promise((resolve) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timeStart");
//     resolve("success");
//     console.log("timeStop");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });
//--------
// function diffArray(arr1, arr2) {
//   const newArr = [];

//   function diff(first, second) {
//     for (let i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {
//         newArr.push(first[i]);
//       }
//     }
//   }

//   diff(arr1, arr2);
//   diff(arr2, arr1);

//   return newArr;
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//--------
// let count = 0;
// const arr = [0,1, 2, 3];
// arr.forEach((el) => {
//   if (el) {
//     count = count + 1;
//   }
// });

// console.log(count);

//--------
// const arr = [1, 2, 3, 4];
// console.log(arr.slice(0, 1));
//  console.log(arr.splice(0, 1));
// console.log(arr);

//--------

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   "a": 4,
// };

// console.log(obj);

//--------

// console.log(+false);
// console.log(typeof typeof 888);

//--------

// const arr = [1, 2, 3, 4];
// arr[10] = 5;

// console.log(arr);
//--------

// function muFunction() {
//   // "use strict";
//   xyz = 100;
//   console.log(xyz);
// }
// console.log(muFunction());

//--------
// var xyz = 1 + abc;
// var abc = 1000;
// console.log(xyz);

//--------
// const data = {
//   name: "namib",
// };
// const arr = [1, 2, 3, 4];
// const [x, y] = arr;
// console.log(x, y);
// console.log(delete data);
// console.log(delete arr);
//--------
// let a = [];
// let b = a;
// console.log(a == b);
//--------
// let name = "john";

// sayHi(); // valid

// function sayHi() {
//   let greet = "hi";
//   console.log(name);
// }

// sayHello(); // error
// let sayHello = function () {
//   console.log(name);
// };
//--------
// const a = { a: "a" };
// const b = { b: "b" };
// const c = {};
// c[a] = a;
// c[b] = b;
// console.log(c[a].a, c[b].b);
//--------

// let addressObject = { city: "delhi", state: "delhi" };

// let person = {
//   name: "John",
//   address: addressObject,
// };

// let str = JSON.stringify(person);
// let jsonObject = JSON.parse(str);
// console.log(jsonObject);

//-------- memorised function
// function heavy(x) {
//   console.log(x + ":heavy");
//   return x + "heavy";
// }

// function memoized(fx) {
//   let cache = new Map();
//   return function (x) {
//     // wrapper
//     if (cache.has(x)) {
//       return cache.get(x);
//     } else {
//       let memoValue = fx(x);
//       cache.set(x, memoValue);
//       return memoValue;
//     }
//   };
// }
// let memoizedHeavy = memoized(heavy);
// memoizedHeavy(2);
// memoizedHeavy(2); // take from cache
//--------

// const x = 12;
// console.log(x ** 12);

//--------
// function test() {
//   salary = 1200;
//   console.log(salary);
// }
// test();
//--------
// function test() {
//   console.log(test.abc);
// }
// test();
// test.abc = 400;
// test.abc = 600;
// test();
// console.log(test);
//--------
// let a = {
//   name: "aaa",
// };
// let b = {
//   ...a,
// };
// b.name = "bbb";
// console.log(a.name);

//--------
// let a = 10;
// let b = new Number(10);
// let c = 10;

// console.log(a == b);
// console.log(b === c);

//--------
// console.log(+true);
// console.log(!"test");

//--------
// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 600;
// b[c] = 700;
// console.log(a[c]);
// console.log(a[b]);
// console.log(b[b]);
// console.log(b[c]);
//--------
// console.log("5" + 3);
// console.log("5" - 3);
// console.log(typeof NaN);
// console.log(typeof string);
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);
// console.log(1 < 2 < 3);
//--------
// console.log(a);
// console.log(b);
// var a = (b = 6);
//--------
// console.log(a);
// a = 6;
//-------- calback function
// function sum(a, b) {
//   return a + b;
// }
// const asyncFunk = (a, b, cb) => setTimeout(() => cb(sum(a, b)));
// asyncFunk(2,5, function(result){
//   console.log(result)
// })

//--------

// encapsulation
// class Commute {
//   travel(transport) {
//     return transport.travelTime();
//   }
// }

// class Vehicle {
//   travelTime() {
//     return this._timeTaken;
//   }
// }

// // strategy 1
// class Bus extends Vehicle {
//   constructor() {
//     super();
//     this._timeTaken = 10;
//   }
// }

// strategy 2
// class Taxi extends Vehicle {
//   constructor() {
//     super();
//     this._timeTaken = 5;
//   }
// }

// // strategy 3
// class PersonalCar extends Vehicle {
//   constructor() {
//     super();
//     this._timeTaken = 3;
//   }
// }

// // usage
// const commute = new Commute();

// console.log(commute.travel(new Taxi())); // 5
// console.log(commute.travel(new Bus())); // 10

//--------
// (function autorun(){
//   let x = 1;
//   function log(){
//     console.log(x);//1
//   };

//   function run(fn){
//     let x = 100;
//     fn();//1
//   }

//   run(log);
// })();
//--------
// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // припустимо, що час виконання цієї функції > 100 мс
// for (let j = 0; j < 100000000; j++) {
//   i++;
// }
//--------
// const t = new Promise((resolve, reject) => {
//   let x = Math.random() * 10;
//   if (x > 5) {
//     resolve("+++");
//   } else {
//     reject("-----");
//   }
// });

// t.then((e) => console.log(e));

//--------
// var twoSum = function (nums, target) {
//   const prevMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     if (prevMap.has(diff)) {
//       console.log(prevMap.get(diff));
//       return [prevMap.get(diff), i];
//     }

//     prevMap.set(nums[i], i);
//   }

//   return [];
// };

// console.log(twoSum([2, 3, 4], 6));

//--------rest and spread
const arr = [1, 2, 3];
const copy = [...arr]; // spread
const [a, ...b] = arr; // rest

//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------
//--------


