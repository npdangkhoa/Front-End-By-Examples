/**
 * Arrow functions were introduced in ES6 / ECMAScript 2015, 
 * and since their introduction they changed forever how JavaScript code looks 
 * (and works).
 */
const app = function(){
    return 'traditional way';
}

const appNew = ()=> {
    return 'arrow function way';
}

console.log(app());
console.log(appNew());
