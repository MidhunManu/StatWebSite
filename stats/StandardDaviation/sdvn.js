function findSdvn() {
        var data = document.getElementById("arr1").value;
        var stringToInt = num => Number(num);
        var intArr = Array.from(data , stringToInt);

        var len = intArr.length;

        // mean
        var sum = 0;
        for(var i = 0; i < len; i = i+2) {
                sum += intArr[i];
        }
        var len = intArr.length;
        var len2 = len - 1;
        var finalLen = (len - (len2/2))
        var mean = sum / finalLen;
        
        var sqDiff = 0;

        for(var i = 0; i < len; i = i + 2) {
                sqDiff += (intArr[i] - mean) * (intArr[i] - mean);
        }

        document.getElementById("res").innerHTML = Math.sqrt(sqDiff / finalLen);

}