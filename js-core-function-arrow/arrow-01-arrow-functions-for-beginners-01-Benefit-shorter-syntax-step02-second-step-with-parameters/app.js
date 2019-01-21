/**
 * Arrow functions were introduced in ES6 / ECMAScript 2015, 
 * and since their introduction they changed forever how JavaScript code looks 
 * (and works).
 */
const app = (parm1, parm2) => doSomeThing(parm1, parm2);


function  doSomeThing(parm1, parm2){
    console.log('parm1 ' + parm1);
    console.log('parm2 ' + parm2);

}

app('01', '02');