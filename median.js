function median() {
        var array = document.getElementById("median").value 
        var myFunc = num => Number(num)
        var Arr = Array.from(array,myFunc)

        var len = Arr.length
        var median

        if(len % 2 == 0) {
                median = (Arr[(len - 1)/2] + Arr[len / 2]) / 2    
        }

        else {
                median = Arr[len / 2]
        }

        document.getElementById('medianAns').innerHTML = Arr.length
        
}