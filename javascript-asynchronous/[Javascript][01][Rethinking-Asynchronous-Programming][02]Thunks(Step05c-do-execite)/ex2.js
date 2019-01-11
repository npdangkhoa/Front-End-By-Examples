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
// there are two slow of process.
// flow 01: resp -> resp = text   -> cb(resp)   -> end.
// flow 02: resp -> (resp = cb)   -> resp(text) -> end.
function getFile(file) {
	var resp;

	fakeAjax(file, function(text){
		if(resp) resp(text);
		else resp = text;
	});

	return function thunkXX(cb){
		if (!resp) resp = cb
		else cb(resp);
	};
}



// function getFile2(file) {
// 	var resp;

// 	fakeAjax(file,function(text){
// 		if (!resp) resp = text;
// 		else resp(text);
// 	});

// 	return function th(cb) {
// 		if (resp) cb(resp);
// 		else resp = cb;
// 	};
// }


var thunksFile1 = getFile("file1");
var thunksFile2 = getFile("file2");
var thunksFile3 = getFile("file3");

thunksFile1(function(text1){
	console.log(text1);
	thunksFile2(function(text2){
		console.log(text2);
		thunksFile3(function(text3){
			console.log(text3);
			console.log('Completed !');
		})	
	})
});
