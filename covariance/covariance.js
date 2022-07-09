function mean(arr, n)
{
        let sum = 0;
        for(let i = 0; i < n; i++)
                sum = sum + arr[i];
         
        return sum / n;
}

function covariance(arr1, arr2, n)
{
        let sum = 0;
        let mean_arr1 = mean(arr1, n);
        let mean_arr2 = mean(arr2, n);
        for(let i = 0; i < n; i++) {
                sum = sum + (arr1[i] - mean_arr1) *(arr2[i] - mean_arr2);
        }
        return sum / (n - 1);
}

function findCovariance() {
        var data1 = document.getElementById("arr1").value;
        var data2 = document.getElementById("arr2").value;
        var array1 = data1.split(",").map(function (item) {
        return parseInt(item, 10);
        });

        var array2 = data2.split(",").map(function (item) {
        return parseInt(item, 10);
        });

        var len = array1.length;

        if(array1.length == array2.length) { 
                document.getElementById("res").innerHTML = covariance(array1 , array2 , len);
        }

        else {
                document.getElementById("res").innerHTML = "<h3>both the data sets must have same size<h3>"
        }
}
