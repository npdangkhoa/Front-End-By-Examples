function fakeAjax(url, cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function () {
		cb(fake_responses[url]);
	}, randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	fakeAjax(file, function (text) {
		handResponses(file, text);
	});
}

function handResponses(fileName, contents) {
	if (!(fileName in responses)) {
		responses[fileName] = contents;
	}
	//console.log('\n fileName: ' + fileName + '; contents: ' + contents + ' responses: ' + JSON.stringify(responses));
	var listFileNames = ['file1', 'file2', 'file3'];

	// loop through responses in order for rendering
	for (i = 0; i < listFileNames.length; i++) {
		// response received?
		if (listFileNames[i] in responses){
			// response needs to be rendered?
			if (responses[listFileNames[i]] !== 'true') {
				console.log('\n ' + listFileNames[i] + ': ' + responses[listFileNames[i]]);
				responses[listFileNames[i]] = 'true';
			}

		// can't render yet
		} else {
			// not complete!
			return;
		}

	}
	output("Complete!");
}

var responses = {};
var listFileOutputs;


// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
