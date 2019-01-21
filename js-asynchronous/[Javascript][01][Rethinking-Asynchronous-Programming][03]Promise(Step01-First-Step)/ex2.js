function delay(num){
	console.log('delay');
	return new Promise(function(resole, reject){
		console.log('start resole:' + num);
		setTimeout(resole, num)
	});
}

delay(100)
.then(function(){
	console.log('delay 200');
	return delay(200);
})
.then(function(){
	console.log('delay 300');
	return delay(300);
})
.then(function(){
	console.log('all done!');
})
