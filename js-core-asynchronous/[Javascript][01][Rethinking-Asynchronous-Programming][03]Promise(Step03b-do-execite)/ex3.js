function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	return new Promise(function(thenResolve, reject){
		fakeAjax(file, function(response){
			thenResolve(response);
		});

	})
}

getFile('file1')
.then(output)
.then(function(){
	return getFile('file2');
})
.then(output)
.then(function(){
	return getFile('file3');
})
.then(output)
.then(function(){
	console.log('Completed !');
})