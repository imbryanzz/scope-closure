var hello = 'Hello';
let world = 'Hello World';
const hellorWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(hellorWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar)

const anotheryFunction = () => {
    var localVar = globalVar = 'Im Global';
}

anotheryFunction();

console.log(localVar);