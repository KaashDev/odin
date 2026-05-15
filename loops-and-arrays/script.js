//Returns sum of even numbers multiplied by 3
function sumOfTripledEvens(array){
    let sum =0;
    for(let i = 0; i < array.length; i++){
        
        if(array[i] % 2 === 0){
            const tripleEvenNumber = array[i] * 3;
            sum += tripleEvenNumber;
        }
    }
    return sum;
}

const array = [1,2,3,4,5]
console.log("sum of tripled evens")
console.log(sumOfTripledEvens(array));
console.log();

//add one to each element in array
function addOne(num){
    return num+1;
}

const mappedArr = array.map(addOne);
console.log("addOne")
console.log(array);
console.log(mappedArr);
console.log();