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


//зробити коунтер
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
})();
add() //1
add()//2

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

const obj = {
    a:12,
    say : function(){
        function helper(){
            console.log(this.a)
        }
        setTimeout(helper.bind(this), 1000)
    }
}
obj.say()

//написати фунцію для числа яка бере це число і додає 3
const x = 3;
Number.prototype.test = function(){
    return this + 3
}

console.log(x.test())

