function capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

function camelize(str){
    let arr = str.split("-");
    arr = arr.filter((word) =>{
        return word !== "";
    });
    console.log(arr);

    const arrWithoutFirst = arr.slice(1);
    return arrWithoutFirst.reduce((finalString, currentString) =>{
        return finalString + capitalize(currentString);
    }, arr[0]);

    
    
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));