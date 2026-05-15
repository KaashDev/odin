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

let array = [1,2,3,4,5]
console.log(sumOfTripledEvens(array));