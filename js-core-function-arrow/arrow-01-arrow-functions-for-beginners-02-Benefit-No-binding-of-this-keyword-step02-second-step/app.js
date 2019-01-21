/**
 * An example should make this clearer. In your console lets create a constructor function then
 *  create an instance of it:
 */

 function Counter(){
     this.num = 0;

     // Step03: 
     // Code looks the same as before, except we’ve added a variable
     // this.timer and set it equal to our setInterval function.
     this.timer = setInterval(function add(){
         this.num ++;
         // Step04: Why is the value is NAN?
         // Because the value of this in setIntervalis being bound to the global object
         console.log(this);
         //  It was logging NaN because this.num was referring to the num property on the window object 
         // ( window.num which doesn’t exist), and not the b object ( b.num ) we had just created.
         console.log(this.num);
     }, 1000);
 }
 //WHY is the value of a.number = 0 ?
 //As you should know, with a constructor function the value of this is bound to 
 // the new object being created, in this case, the a object. 

 // Step01: object a is create from the constructor function.
 // Step02: the value of this keyword is bound to the new object "a" being created.
 var a  = new Counter();
 // step05: stop they annoying interval by running
 clearInterval(a.timer);

 console.log(a.num);
