//Register/Calculator
var register = {
	tenDollar = {
		avail: 1,
		value: 10.00,
	};
	fiveDollar = {
		avail: 1,
		value: 5.00
	};
	oneDollar = { 
		avail:  2,
		value:  1.00,
	};
	quarter = {
		avail: 4,
		value: 0.25,
	};
	dime = {
		avail: 10,
		value: 0.10,
	};
	nickle = {
		avail: 10,
		value: 0.05,
	};
	penny = {
		avail: 50,
		value: 0.01,
	};
	//total amount of money in the register.
	totalCash: function() {"$" + " " + (tenDollar.avail * tenDollar.value) + (fiveDollar.avail + .fiveDollar.value) + (oneDollar.avail + oneDollar.value) + (quarter.avail + quarter.value) + (dime.avail + dime.value) + (nickle.avail + nickle.value) + (penny.avail + penny.value)
	};
	//total dollars, how many tens, fives, dollars...
	totalDollars: 	return tenDollar.avail + " " + "Tens.",
					return fiveDollar.avail + " " + "Fives.",
					return oneDollar.avail + " " + "Ones.";
	//total cash in dollars.
	totalCashDollars: function() {"$" + " " + (tenDollar.avail * tenDollar value) + (fiveDollar.avail * fiveDollar.value) + (oneDollar.avail * oneDollar.value)};
	//total Change, how many quarters, dimes, nickles, pennies...
	totalChange:	return quarter.avail + " " + "Quarters.", 
					return dime.avail + " " + "Dimes.", 
					return nickle.avail + " " + "Nickles.", 
					return penny.avail + " " + "Pennies.";
	//total cash in change.
	totalCashChange: function() {(quarter.avail + quarter.value) + (dime.avail + dime.value) + (nickle.avail + nickle.value) + (penny.avail + penny.value)};
}
var price = prompt("Price?") {
	if (isNaN) {
		return "Error";
	}
var tax = 0.0835;
var tip = 0.10;
var totalCost = (price * tax) + (price * tip) + price;
