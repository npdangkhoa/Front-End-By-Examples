function addAsyn(x, y, cb){
	// init value to get return value
	var result = 0;
	 setTimeout(result = cb (x, y), 1000);
	 return result;
}

// create thunk var.
var thunks = function(cb){
	return addAsyn(11,4, cb);
}

//pass paramters and execute thunk
var result = thunks(function(a, b){
	return a + b;
});

console.log(result);