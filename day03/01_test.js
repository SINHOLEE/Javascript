function printHello() {
    console.log('Hello from baz');
}

function baz() {
    setTimeout(printHello, 1);
}

function bar() {
    baz();
}

function foo() {
    bar();
}


console.log('1');
console.log('2');
foo();
console.log('3');
console.log('4');
foo();
console.log('5');
console.log('6');
console.log('7');
console.log('8');

