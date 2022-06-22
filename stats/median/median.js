function findMedian() {
        var array = document.getElementById("median").value
        var myFunc = num => Number(num)
        var intArr = Array.from(array,myFunc)
 
        var len = intArr.length;
        
        var sum = 0;

        for(var i = 0; i < len; i=i+2) {
                sum += 1;
        }

        for(var i = 0; i < sum; i=i+2) {
                console.log(intArr[sum/2]);
        }
}
       