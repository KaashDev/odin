let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);

function filterRange(arr, lowerBound, upperBound){
    return arr.filter((num) =>{
        return num >= lowerBound && num <= upperBound;
    });
}