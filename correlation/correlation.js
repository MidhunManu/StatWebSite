function correlationCoefficient(array1, array2, len)
{
      
    var sum_X = 0, sum_Y = 0, sum_XY = 0;
    var squareSum_X = 0, squareSum_Y = 0;
     
    for(var i = 0; i < len; i++)
    {
          
        // Sum of elements of array array1.
        sum_X = sum_X + array1[i];
     
        // Sum of elements of array array2.
        sum_Y = sum_Y + array2[i];
     
        // Sum of array1[i] * array2[i].
        sum_XY = sum_XY + array1[i] * array2[i];
     
        // Sum of square of array elements.
        squareSum_X = squareSum_X + array1[i] * array1[i];
        squareSum_Y = squareSum_Y + array2[i] * array2[i];
    }
    var corr = (len * sum_XY - sum_X * sum_Y)/
               (Math.sqrt((len * squareSum_X -
                       sum_X * sum_X) * 
                          (len * squareSum_Y - 
                       sum_Y * sum_Y)));
     
    return corr;
}

function findCorrelation() {
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
        var result = correlationCoefficient(array1 , array2 , len);

        document.getElementById("res").innerHTML = result;
            
}