function findMedian() {
        var array = document.getElementById("median").value;
        var myFunc = num => Number(num);
        var intArr = Array.from(array,myFunc)
; 
        var len = intArr.length;
        
        // var sum = 0;
        // console.log(len);
        // console.log(typeof(intArr[0]));
        // console.log(intArr[1]);

        var ctr = 0;
        for(var i = 0; i < len; i=i+2) {
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
                // console.log(("midian = "+(intArr[(len+1)/2 - 2])))
                var first = intArr[(len+1)/2];
                var second = intArr[(len+1)/2 - 2];
                // console.log(first);
                // console.log(second);

                // console.log((first + second)/2);
                // console.log("median = "+(first+second)/2);

                document.getElementById("res").innerHTML = (first + second) / 2;                
        }
}