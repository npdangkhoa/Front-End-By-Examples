function getData(number){
	return new Promise(function(resole, reject){
		resole(number);
	});
}

var x, y;

getData(10)
.then( function(number1) {
	x = 1 + number1;
	return getData(30);
})
.then (function(number2){
	y = 1 + number2;
	return getData('Mean of life:' + (x + y));
})
.then (function(result){
	console.log(result);
})