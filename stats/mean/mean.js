function findMean() {
        var data = document.getElementById("arr1").value;
        var stringToInt = num => Number(num);
        var intArr = Array.from(data , stringToInt);

        var sum = 0;

        for(var i = 0; i < intArr.length; i++) {
                sum += intArr[i];
        }

        var len = intArr.length;
        var len2 = len - 1;
        var finalLen = (len - (len2/2));
        var result = sum / (finalLen);
        document.getElementById('res').innerHTML = result
}