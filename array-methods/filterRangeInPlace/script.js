let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert(arr);

function filterRangeInPlace(arr, lowerBound, upperBound){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < lowerBound || arr[i] > upperBound){
            arr.splice(i, 1);
            i--;
        }
    }

}

