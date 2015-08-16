function hcf(x,y){
	if (y == 0) return x;
	else return hcf(y, x % y);
}

function lcm(x,y){
	return ( x / hcf(x,y) ) * y;
}

function computeLCM(sourceArray){
	if (sourceArray.length <= 1) return sourceArray[0]; 
	else{
		sourceArray.push( lcm( sourceArray.shift() , sourceArray.shift() ) );
		return computeLCM(sourceArray);
	}	
}