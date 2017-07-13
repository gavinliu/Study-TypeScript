let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let hello: string = 'hello';
let myName: string = 'Gavin';
let age: number = 12;
let str: string = `Hello, ${ myName }, I am ${ age + 1 } years old.`

document.body.innerHTML = str;
