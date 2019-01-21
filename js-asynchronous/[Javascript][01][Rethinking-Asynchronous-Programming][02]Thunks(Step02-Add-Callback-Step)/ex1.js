function addAsyn(x, y, cb){
	 return cb (x, y);
}

var thunks = function(cb){
	return addAsyn(5,4, cb);
}

var result = thunks(function(a, b){
	return a + b;
});

console.log(result);