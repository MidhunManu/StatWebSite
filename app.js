function calculate() {


        var val1 = document.getElementById("arr1").value
        var val2 = document.getElementById("arr2").value
        var myFunc = num => Number(num)
        var intArr = Array.from(val1,myFunc)

        var sum = 0
        for(var i = 0; i < intArr.length; i++) {
                sum += intArr[i]
        }

        document.getElementById('res').innerHTML = sum
}