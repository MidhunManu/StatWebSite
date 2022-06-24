function findVariance() {
        var data = document.getElementById("arr1").value;
        var intArr = data.split(',').map(function(item) {
                return parseInt(item, 10);
        });

        var sum = 0;
        var len = intArr.length;
        for(var i = 0; i < len; i++) {
                sum += intArr[i];
        }

        var mean = sum / len;
        var sqDiff = 0;

        for(var i = 0; i < len; i++) {
                sqDiff += (intArr[i] - mean) * (intArr[i] - mean); 
        }

        document.getElementById("res").innerHTML = sqDiff / len;
}