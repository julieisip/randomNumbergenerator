var min = 1;
var max = 10000;


function listGenerator(){

var numberList = [];

//initialized array 1 - max number
for (var i = 1; i <=max; i++) {
		numberList.push(i);

}

//call shuffleList function to generated list of random unique number
shuffleList(numberList);

//loop on the numberList array to print the values on console
for (var i =0; i < numberList.length; i++) {
	console.log( i + 1 +  ". " + numberList[i]);

}

return numberList;

}

// generates random number (integer) on range (1-10000)
function randomNumberGenerator(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

//shuffles the order of the list in randomly by swapping numbers on the array with random indexes
function shuffleList(numList){
	var count = max;

	//throw exception when list lenght is not 10000
	if (numList.length != 10000){
		throw "List should be in length 10000"
	}


	while (count > 0) {
			var tempNum = randomNumberGenerator(min,count);
			var tempVal = numList[count-1];
			numList[count-1] = numList[tempNum-1];
			numList[tempNum-1] = tempVal;
			count--
	}
}

exports.listGenerator = listGenerator;
