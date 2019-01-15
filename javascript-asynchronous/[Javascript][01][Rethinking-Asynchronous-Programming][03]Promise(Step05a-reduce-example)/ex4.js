let result = [1,2,3,4,5].reduce((prev, cunrrent, cunrrentIndex, arr)=>{
	console.log('prev: '+ prev);
	console.log('cunrrent: '+ cunrrent);
	console.log('cunrrentIndex: '+ cunrrentIndex);
	console.log('arr: '+ arr);

	return cunrrent;
})