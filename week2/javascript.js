
// 1. Write a console.log statement saying "Hello World!" for each language that you know.

console.log('Halo, dunia!');
console.log('Hello world!');
console.log('Hola, mundo!');
console.log('Ciao, mondo!');
console.log('مرحبا، العالم');

// 2. Consider the following code:

console.log("I'm awesome");

// 3. Declare a variable x and initialize it with an integer, using these exact steps:

// TODO -> here you declare your variable
var x = 3;
console.log('the value of my variable x will be: 3');
console.log('x =', x);

// TODO -> here you initialize your variable
x = 9;
console.log('the value of my variable x will be: 9');
console.log('x =', x);

// 4. Declare a variable y and assign a string to it.

// TODO -> here you declare AND assign your string
var y = 'Be what you want to be,';
console.log('the value of my string (y) will be: Be what you want to be,');

// TODO -> log the actual value of the string to the console
console.log('y =', y);

// TODO -> assign a new value to your variable y
var y = 'Be what you want to be, Not what others want to see';
console.log('the value of my string (y) will be: Be what you want to be, Not what others want to see');

// TODO -> log the actual value of the string to the console
console.log('y =', y);

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

var z = 7.25;
console.log('z =', z);

var a = Math.round(z);
console.log('a =', a);

var e = Math.max(a, z);
console.log('e =', e);


// 6. Arrays!

var arr = [];
console.log('the value of arr will be: []');
console.log('arr =', arr);

var animals = ['dogs', 'cats', 'tigers'];
console.log('animals =', animals);

animals.push('baby pig');
console.log('animals =', animals);

// 7. More strings

let myString = "this is a test";
console.log('myString =', myString);
console.log('length of myString =', myString.length);

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.


var variable0  = 33;
var variable1  = 44;
var variable2 = 'Hi';
var variable3 = true;

console.log('The value of variable0 is: ' + variable0);
console.log('The value of variable1 is: ' + variable1);
console.log('The value of variable2 is: ' + variable2);
console.log('The value of variable3 is: ' + variable3);



let foo = 3;
console.log('The value of variable foo is: ' + foo);

console.log('the type  of variable0 x will be: boolean');
console.log('the type of variable0 is:', typeof variable0);

console.log('the type of variable1 x will be: number');
console.log('the type of variable1 is:', typeof variable1);

console.log('the type  of variable2 x will be: number');
console.log('the type of variable2 is:', typeof variable2);

console.log('the type  of variable3 x will be: string');
console.log('the type of variable3 is:', typeof variable3);


var arrOfVariables = [variable0, variable1, variable2, variable3];

for(i = 0; i < arrOfVariables.length; i++){
    for(j = i; j < arrOfVariables.length; j++){
        if(i != j){
            if (typeof arrOfVariables[i] === typeof arrOfVariables[j]) {
                console.log('variable'+ i +' and variable'+ j +' have same data type');
            } 
            else{ 
                console.log('variable'+ i +' and variable'+ j +' have different data type'); 
            } 
        }
    }
}
 
 // 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

 x = 7 ;
 x = x % 3;
 console.log('The division remainder of x divide it by 3 =', x);

y = 19 ;
y = y % 5;
 console.log('The division remainder of y divide it by 5 =', y);

 z = 467 ;
 z = z % 10;
 console.log('The division remainder of z divide it by 10 =', z);

 // 10. Write a program to answer the following questions:

 var multipleTypeArr = [true, 12, 'Hi', 123.333];
console.log('multiple Type Array', multipleTypeArr);

x = 6/0;
y = 10/0;
console.log('x = ', x);
console.log('y = ', y);

if ( x === y){
    console.log('Yes you can compare infinities x and y ');
}
else{
    console.log("No you cann't compare infinities");
}
 