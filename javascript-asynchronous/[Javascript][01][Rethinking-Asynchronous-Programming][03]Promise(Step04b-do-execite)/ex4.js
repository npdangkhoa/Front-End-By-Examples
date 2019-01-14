function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	//var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;
	var randomDelay = 100;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,function(response){
			resolve(response);
		});
	});
}


['file1', 'file2', 'file3']
.map(getFile)
.reduce(
	function combine(chain, filePromise){
		console.log(chain);
		return chain
			.then(function(){
				// you may customize what you pass to the next function in the chain
				// and you may accumulate prior results in some other data structure here
				return filePromise;
			})
			.then(output);
	},
	// fulfilled promise to start chain
	Promise.resolve()
) 
// All don't here
.then(function(){
	output('Complete !');
})
.catch(err=> {

})

