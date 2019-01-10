function add(x, y){
	return x + y;
}

var thunks = function(){
	return add(5,4);
}

var result = thunks();
console.log(result);