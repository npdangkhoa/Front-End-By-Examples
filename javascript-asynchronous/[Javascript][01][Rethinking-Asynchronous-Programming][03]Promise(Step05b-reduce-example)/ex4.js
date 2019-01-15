
function methodThatReturnsAPromise(nextID) {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
  		console.log(nextID);
  		resolve();
	  }, 1000);
	});
  }
  

let result = [1,2,3,4,5].reduce((prevVal, currentVal, currentIndex, arr)=>{
	console.log('prev: '+ prevVal);
	console.log('currentVal: '+ currentVal);
	console.log('currentIndex: '+ currentIndex);
	console.log('arr: '+ arr);

	return prevVal.then(function(){
		return methodThatReturnsAPromise(currentVal);
	})
}, 
// init value for prevVal parameter. 
new Promise((resolve, reject) => {
	resolve();
}));

console.log('result: '+ result);
