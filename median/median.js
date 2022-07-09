function findMedian() {
        var array = document.getElementById("median").value;
        // var myFunc = num => Number(num);
        // var intArr = Array.from(array,myFunc)

        var intArr = array.split(',').map(function(item) {
                return parseInt(item, 10);
        });


        // var len = intArr.length;

        // if(len % 2 != 0) {
        //         document.getElementById("res").innerHTML = intArr[len / 2];
        // }
        var len = intArr.length;
        console.log(intArr);
        
        // var sum = 0;
        // console.log(len);
        // console.log(typeof(intArr[0]));
        // console.log(intArr[1]);

        var ctr = 0;
        for(var i = 0; i < len; i=i+1) {
                ctr++;
                // newArr[i] = intArr[i]
        }
        console.log("counter = "+ctr);
        console.log("length = "+len);
        if(ctr % 2 != 0) {
                // for odd (len-1) / 2
                // console.log("median = "+intArr[(len-1) / 2]);
                document.getElementById("res").innerHTML = intArr[(len-1) / 2];
        }

        else {
                console.log("length = "+len);
                var first = intArr[((len)/2)-1];
                var second = intArr[((len)/2)];
                document.getElementById("res").innerHTML = (first + second) / 2;                
        }
}