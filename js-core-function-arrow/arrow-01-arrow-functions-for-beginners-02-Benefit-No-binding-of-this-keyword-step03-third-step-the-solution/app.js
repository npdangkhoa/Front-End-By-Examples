/**
 * An example should make this clearer. In your console lets create a constructor function then
 *  create an instance of it:
 */

 function Counter(){
     this.num = 0;
     // Why is the arrow function fixed it?  
     // With an arrow function! We need a function that doesn’t bind this.
     // With an arrow function, the this binding keeps its original binding from the context.
     // Lets take our original Counter function and replace our setInterval with an arrow function.
     this.timer = setInterval(() => {
         this.num ++;
         console.log(this.num);
     }, 1000);
 }
 var a  = new Counter();
 console.log(a.num);
