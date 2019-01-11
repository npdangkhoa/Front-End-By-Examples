function makeThunk(fn){
	var args = [].slice.call(arguments, 1);
	var resultfn =  function(cb){
		args.push(cb);
		result = fn.apply(null, args);
		return result;
	} 

	return resultfn;
}

function getData(x, cb){
	return cb(x);
}

function get30fn(number30){
	y = number30 + 1;

	var getAnswer = makeThunk(getData, 'Mean of the life:' + (x + y));
	getAnswer(function(getData){
		console.log(getData);
	});
}

function get10fn(number10){
	x = number10 + 1;
	get30(get30fn);
}

var get10 = makeThunk(getData, 10);
var get30 = makeThunk(getData, 30);

get10(get10fn);