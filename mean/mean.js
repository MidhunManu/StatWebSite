function findMean() {
        var data = document.getElementById("arr1").value;

        var intArr = data.split(',').map(function(item) {
                return parseInt(item, 10);
        });

        var sum = 0;

        for(var i = 0; i < intArr.length; i++) {
                sum += intArr[i];
        }
        
        document.getElementById("res").innerHTML = sum / intArr.length;
}