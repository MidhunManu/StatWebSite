// // var myInt = 235345;
// var vals = "1 2 3 " 
// // Getting the string as a parameter
// // and typecasting it into an integer
// let myFunc = num => Number(num);

// var intArr = Array.from(vals, myFunc);

// // Print the result array
// console.log(intArr);


function calculate() {
//         var val1 = parseInt(document.getElementById("arr1").value)
//         var val2 = parseInt(document.getElementById("arr2").value)
//         var ans = document.getElementById('res').innerHTML = val1+val2

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