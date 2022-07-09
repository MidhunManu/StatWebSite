/*
The formula for Linear Regression

sigmaX = sqrt(summation(x)^2/n - mean(x))
bxy = cov(x,y) / variance(y)
(y - mean(y)) = byx * (x - mean(x))
(x - mean(x)) = bxy * (y - mean(y))

y = byx * (x - mean(x)) + mean(y)
x = bxy * (y - mean(y)) + mean(x)
*/
function mean(array, len) {
  var sum = 0;
  for (var i = 0; i < len; i++) {
    sum += array[i];
  }

  return sum / len;
}

function covariance(array1, array2, n) {
  let sum = 0;
  let mean_arr1 = mean(arr1, n);
  let mean_arr2 = mean(arr2, n);
  for (let i = 0; i < n; i++) {
    sum = sum + (arr1[i] - mean_arr1) * (arr2[i] - mean_arr2);
  }
  return sum / (n - 1);
}

function variance(intArr) {
  var sum = 0;
  var len = intArr.length;
  for (var i = 0; i < len; i++) {
    sum += intArr[i];
  }

  var mean = sum / len;
  var sqDiff = 0;

  for (var i = 0; i < len; i++) {
    sqDiff += (intArr[i] - mean) * (intArr[i] - mean);
  }

  return sqDiff / len;
}
function regressionCoeff_XonY(array1 ,array2, lenX) {
	var covariance = covariance(array1 , array2 , lenX);
	var varianceOfX = variance(array2);
	
	return covarianceOfX / varianceOfX;
}

function regressionCoeff_YonX(array1 , array2 , len) {
	var covariance = covariance(array1 , array2 , len);
	var variance = variance(array1);

	return covariance / variance;
}

function regressionForX(array1, array2, valueOfY , len) {
	// x = bxy * (y - mean(y)) + mean(x)
	var predictedValueOfX = regressionCoeff_XonY(array1 , array2 , len) * (valueOfY - mean(array2)) + mean(array1);
	return predictedValueOfX;
}

function regressionForY(array1 , array2 , valueOfX , len) {
	// y = byx * (x - mean(x)) + mean(y)
	var predictedValueOfY = regressionCoeff_YonX(array1 , array2 , len) * (valueOfX - mean(array1)) + mean(array2);
}

function findRegression() {
  var data1 = document.getElementById("arr1").value;
  var data2 = document.getElementById("arr2").value;

  var findX = document.getElementById("data1"); 
  var findY = document.getElementById("data2");

  var array1 = data1.split(",").map(function (item) {
    return parseInt(item, 10);
  });
  var array2 = data2.split(",").map(function (item) {
    return parseInt(item, 10);
  });

  if (array1.length != array2.length) {
    alert("length of both the arrays must be same");
  }

  var len = array1.length;

  if(findX.checked) {
    window.open("./predictX.html");
  }

  else {
    window.open("./predictY.html");
  }
	
}
