let arr = [5, 2, 1, -10, 8];

function sortInDecreasingOrder(arr){
    return arr.sort((a,b) => b-a);
}

sortInDecreasingOrder(arr);
alert(arr);