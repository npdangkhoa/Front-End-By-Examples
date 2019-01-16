
function methodThatReturnsAPromise(nextID) {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
  		console.log(nextID);
  		resolve();
	  }, 1000);
	});
  }
  

let result = [1,2,3,4,5].reduce(async (prevVal, currentVal, currentIndex, arr)=>{
	console.log('prev: '+ prevVal);
	console.log('currentVal: '+ currentVal);
	console.log('currentIndex: '+ currentIndex);
	console.log('arr: '+ arr);

	await prevVal;
	return methodThatReturnsAPromise(currentVal);
}, 
// init value for prevVal parameter. 
Promise.resolve()
);

console.log('result: '+ result);
