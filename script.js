//##Functional declaration  //geting hoisted
function functionName(){  //head

    //logic
}
functionName ()  //function call


// 1.function without para and without return
function wishHi() {
    console.log('Hii');
}
wishHi()



// 2.function with para and without return
function add(name) {
    console.log('Hii');
}
wishHi('Meghana')


// 3.function with para and with return
function add (a,b) {
    return a*b;  // we need to store function in variable
}
var result=add(2,5);     //console.log(add(2,5))
console.log(result)


// ## FUNCTION EXPRESION
add('Meghana')
console.log( functionName)
function add(name) {
    console.log('Hii');
}


var functionName=function(){
    console.log('hii')
}


// ##FUNCTION CONSTRUCYTOR
var wishHi=new Function ("{console.log('hii')}")
wishHi()

var add2=new Function('num1','num2','{return num1+num2}')
console.log(add2(6,7))





//IIEF runs as soon as it defined
// ({
//     function(params)
// })()

//FIRST CLASS  
//functin can PASS argument to another function.
// and function can be return by another funnction.
//  and function can assign value.
var wish=function(){
    console.log('hii')
}
wish()




//CALL BACK pass as an parameter
function submit(maths){
    maths()
    console.log('SUBMIT')
}
function copy(){
    console.log('COPY')
}
submit(copy)


// Higher Order Function
//ACCEPT another function as an argument or return function.

//CLOSURS
// create lexical environment




