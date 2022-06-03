function calculate() {


        var array = document.getElementById("arr1").value
        var myFunc = num => Number(num)
        var intArr = Array.from(array,myFunc)

        var sum = 0
        for(var i = 0; i < intArr.length; i++) {
                sum += intArr[i]
        }

        var len = intArr.length;
        var len2 = len - 1;
        var finalLen = (len - (len2/2))
        var result = sum / (finalLen);
        document.getElementById('res').innerHTML = result
}