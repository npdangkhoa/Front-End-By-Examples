function addAsyn(x, y, cb){
	// init value to get return value
	var result = 0;
	 setTimeout(result = cb (x, y), 1000);
	 return result;
}

function makeThunk(fn, a, b){
	var args = [].slice.call(arguments, 1);
	console.log('arguments: '+ JSON.stringify(arguments));
	console.log('fn: '+ JSON.stringify(fn));
	console.log('args: '+ args);
	console.log('a: '+ a);
	console.log('b: '+ b);

	var result =  function(cb){
		args.push(cb);
		result = fn.apply(null, args);
		return result;
	} 

	return result;
}



// create thunk var.
var thunks = makeThunk(addAsyn, 11, 25);



//pass paramters and execute thunk
var result = thunks(function(a, b){
	return a + b;
});

console.log(result);