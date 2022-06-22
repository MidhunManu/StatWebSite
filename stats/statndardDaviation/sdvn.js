function findSdvn() {

	values = [];
  	var inp = document.getElementById('arr1');
  	values.push(inp.value);
  	inp.value = "";  

	var numberArray = values.map(Number);
	
	for(var i = 0; i < values.length; i++) {
		console.log(values[i]);
	}

	var sum = 0;	
	for(var i = 0; i < values.length; i++) {
		sum += values[i];
	}

	console.log(values[1]);
	// document.getElementById("res").innerHTML = values.join(", ")
}

