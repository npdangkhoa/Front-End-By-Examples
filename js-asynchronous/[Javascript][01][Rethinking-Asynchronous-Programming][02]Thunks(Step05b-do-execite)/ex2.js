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
	var data;

	fakeAjax(file, function(response){
		data = response;
	});

	var result = function(cb){
		cb(data);
	};

	return result;
}

var thunksFile1 = getFile("file1");
var thunksFile2 = getFile("file2");
var thunksFile3 = getFile("file3");

thunksFile1(function(text1){
	console.log(text1);

	thunksFile2(function(text2){
		console.log(text2);

		thunksFile3(function(text3){
			console.log(text3);
		})
	
	})

	console.log('Completed !');
});
