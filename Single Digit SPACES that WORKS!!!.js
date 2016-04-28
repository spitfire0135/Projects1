function spaces(x) {
	if (x === 1) {
		return 0;
	} else if (x === 2) {
		return 0;
	} else if (x === 3) {
		return 0;
	} else if (x === 4) {
		return 1;
	} else if (x === 5) {
		return 0;
	} else if (x === 6) {
		return 1;
	} else if (x === 7) {
		return 0;
	} else if (x === 8) {
		return 2;
	} else if (x === 9) {
		return 1;
	} else if (x === 0) {
		return 1;		
  }
}
document.getElementById("spaces").innerHTML=(spaces());

// !!!!!!!!!!!!!!!!!!!! IT WORKS!!!! but only with single digits!!!!!!!!