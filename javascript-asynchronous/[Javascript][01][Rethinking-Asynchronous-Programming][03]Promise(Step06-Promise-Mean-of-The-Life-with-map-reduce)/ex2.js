function getData(number){
	return new Promise(function(resole, reject){
		resole(number);
	});
}

var x, y;

[10, 30]
.map(getData)
.reduce(function(firstVal, secondVal){
			console.log('firstVal '+ firstVal);
			console.log('secondVal  '+ secondVal);

			firstVal.then(function(result){
				x = 1 + result;
				console.log('x: ' + x);

			}).then(function(){
				return secondVal;

			}).then(function(result){
				y = 1 + result;
				console.log('y: ' + y);

			}).then(function(){
				return getData('Mean of life:' + (x + y));
			}).then(function(result){
				console.log("result: " + result);
			})
		}
)




// getData(10)
// .then( function(number1) {
// 	x = 1 + number1;
// 	return getData(30);
// })
// .then (function(number2){
// 	y = 1 + number2;
// 	return getData('Mean of life:' + (x + y));
// })
// .then (function(result){
// 	console.log(result);
// })