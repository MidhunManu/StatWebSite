function regression(array1 , array2 , len) {
	
}

function findRegression() {

	var data1 = document.getElementById("arr1").value;
	var data2 = document.getElementById("arr2").value;
	var array1 = data1.split(",").map(function (item) {
    		return parseInt(item, 10);
    	});
	var array2 = data2.split(",").map(function (item) {
    		return parseInt(item, 10);
    	});

	if(array1.length != array2.length) {
        	alert("length of both the arrays must be same");
	}

	var len = array1.length;	
}