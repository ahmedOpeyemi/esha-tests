function rotateArray(sourceArray, n){
	var arrayLength = sourceArray.length;
	var switchElements = [];
	for (var i=1; i<=n; i++){
		//removes the swicth elements into another array
		switchElements.push(sourceArray[arrayLength-i]);
		sourceArray.pop();
	}

	for (var i=0; i<switchElements.length; i++){
		//adds them back at the beginning
		sourceArray.unshift(switchElements[i]);
	}

	return sourceArray;
}