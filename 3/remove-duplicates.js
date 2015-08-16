function removeDuplicates(sourceArray){
	var hasOccured = [];//keeps all the seen values of the array to chheck
	var arrayLength = sourceArray.length;
	for (var i=0; i<arrayLength; i++){
		var current = sourceArray[i];
		if (hasOccured.indexOf(current) < 0){
			hasOccured.push(current);
		}
	}
	return hasOccured;
}