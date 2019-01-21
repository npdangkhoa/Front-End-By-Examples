function* gen(){
	console.log('hello');
	yield;
	console.log('world');
}


var it = gen();
it.next();
it.next();
it.next();
