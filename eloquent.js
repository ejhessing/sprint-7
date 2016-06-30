
//Minimum
function min (a,b) {
  return (a < b) ? a : b ;
}

// Recursion

function isEven (num) {
	if (num === 0) {
		return true;
	} else if (num === 1) {
		return false;
	} else if (num < 0) {
		//changes to a positive number and then goes through recursion
		return isEven(-num);
	} else {
		return isEven(num-2);
	}
}



// Bean counting
function countBs (str) {
	var count = 0;
	for (var i=0; i<str.length; i++ ) {
		if (str.charAt(i) === "B"){
			count++;
		}
	}
	return count;
}



function countChar (str , letter) {
	var count = 0;
	for (var i=0; i<str.length; i++ ) {
		if (str.charAt(i) === letter) {
			count++;
		}
	}
	return count;
}