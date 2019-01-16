var x, y;

function coroutine(g){
	var it = g();
	return function(){
		console.log("it: "+JSON.stringify(it));
		console.log("arguments: "+JSON.stringify(arguments)) ;

		return it.next.apply(it, arguments);
	};
}

var run = coroutine(function*(){
	var x = 1 + (yield);
	var y = 1 + (yield);
	console.log(x);
	console.log(y);
	yield(x + y);


});

run();
run(10);
console.log(run(30).value);
