/**
 * An example should make this clearer. In your console lets create a constructor function then
 *  create an instance of it:
 */

 function Counter(){
     this.num = 0;
 }
 //WHY is the value of a.number = 0 ?

 // Step01: object a is create from the constructor function.
 // Step02: the value of this keyword is bound to the new object "a" being created.
 var a  = new Counter();

 console.log(a.num);
