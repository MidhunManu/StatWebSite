function findMode() {
        var data = document.getElementById("arr1").value;
        var stringToInt = num => Number(num);
        var intArr = Array.from(data , stringToInt);

        // console.log(typeof intArr[1]);

        intArr.sort();
        var maxCount = 1;
        var res = intArr[0];
        var currCount = 1;

        for(var i = 0; i < intArr.length; i = i + 2) {
                if(intArr[i] == intArr[i - 1]) {
                        currCount++;
                }

                else {
                        currCount = 1;
                }

                if(currCount > maxCount) {
                        maxCount = currCount;
                        res = intArr[i - 1];
                }
        }

        document.getElementById("res").innerHTML = res;

}