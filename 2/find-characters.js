//order N*N 
function find_chars(string1, string2){	
	var sOneLength = string1.length;
	var sTwoLength = string2.length;	
	var returnString = '';
	for (var i = 0; i < sOneLength; i++) {
		for (var j=0; j < sTwoLength; j++){
			//console.log('Comparing  ' + string1.charAt(i) +' and '+ string2.charAt(j));
			if (string1.charAt(i) == string2.charAt(j)){
				returnString=returnString.concat(string1.charAt(i));
			}
		}		
	}
	return returnString;
}

//order N
function find_chars_n(string1, string2){
	var sOneLength = string1.length;
	var sTwoLength = string2.length;	
	var returnString = '';
	//convert the second string to a character array
	var string2Array = string2.split('');
	//do check - using array index method
	for (var i = 0; i < sOneLength; i++) {
		if (string2Array.indexOf(string1.charAt(i)) > -1)
			returnString=returnString.concat(string1.charAt(i));
	}
	return returnString;
}