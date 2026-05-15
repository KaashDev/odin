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


//.map - add one to each element in array
function addOne(num){
    return num+1;
}

const mappedArr = array.map(addOne);
console.log("addOne")
console.log(array);
console.log(mappedArr);


//.filter - return odd elements
function isOdd(num){
    return num%2 !==0;
}

const oddNums = array.filter(isOdd);
console.log("OddNums");
console.log(array);
console.log(oddNums);

//.reduce - multiply all numbers in array
const productOfAllNums = array.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log("productOfAllNums");
console.log(array);
console.log(productOfAllNums);