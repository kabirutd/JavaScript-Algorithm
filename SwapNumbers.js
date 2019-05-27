var a = 1;
var b = 2;

//print before swapping numbers
print(a, b);
var temp = a;
a = b;
b = temp;

//print after swapping numbers
print(a, b);

//second algo

//re-initialize numbers
a = 3;
b = 4;

//print before swapping numbers
print(a, b);

a = a + b;
b = a - b;
a = a - b;

//print after swapping numbers
print(a, b);

function print(a, b) {

    console.log('a= ' + a);
    console.log('b= ' + b);
}